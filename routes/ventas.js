var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res, next){
	res.render('ventas', {
		title: 'Ventas Reportes - Lacatedraldelpisco',
		username: req.user.username
	})
});

router.get('/totales', function(req, res, next){
	res.render('ventastotales', {
		title: 'Ventas Totales - Lacatedraldelpisco',
		username: req.user.username
	});
});
router.get('/tarjetas', function(req, res, next){
	res.render('ventastarjetas', {
		title: 'Ventas Totales - Lacatedraldelpisco',
		username: req.user.username
	});
});
router.get('/efectivo', function(req, res, next){
	res.render('ventasefectivo', {
		title: 'Ventas Totales - Lacatedraldelpisco',
		username: req.user.username
	});
});

router.get('/mensual', function(req, res, next){
	res.render('mensual',{
		itle: 'Ventas Mensuales - Lacatedraldelpisco',
		username: req.user.username
	});
});
router.get('/mensual/principal', function(req, res, next){
	var db = req.db;
	var total = db.get('total');
	var fechaPrincipal =  req.params.principal;
	var fechaFinal = req.params.fin;

	total.find({
		'Fecha': {
			'$gte': '2016-02-01T05:54:20.743Z',
			'$lt': '2016-02-02T06:13:16.074Z'
		}
	}, function(err, doc){
		res.send(doc);
	})

});

router.post('/save', function(req, res, next) {
	var db = req.db;
	var collection = db.get('ventas');
	var pagosTarjetas = db.get('ventasTarjeta');
	var pagosTarjetasUno = db.get('ventasEfectivo');

	var codigo = req.body.codigo;
	var mesa = req.body.mesa;
	var hora = req.body.hora;
	var fecha = req.body.fecha;
	var total = req.body.total;
	var metodoPago = req.body.metodoPago;
	var descuento = req.body.descuento;
	var descuentoTotal = req.body.descuentoTotal;


	if(metodoPago == "Efectivo") {
		pagosTarjetasUno.insert({
		  'Mesa': mesa,
		  'Total': total,
		  'Codigo': codigo,
		  'Hora': hora,
		  'Fecha': fecha,
		  'Metodopago': metodoPago,
		  'Descuento': descuento,
		  'DescuentoTotal': descuentoTotal
		}).success(function(doc){
			res.end(JSON.stringify({inserted: true}));
		}).error(function(err){
			console.log('error');
		});

	}
	else if(metodoPago == "Tarjeta"){

		pagosTarjetas.insert({
		  'Mesa': mesa,
		  'Total': total,
		  'Codigo': codigo,
		  'Hora': hora,
		  'Fecha': fecha,
		  'Metodopago': metodoPago,
		  'Descuento': descuento,
		  'DescuentoTotal': descuentoTotal
		}).success(function(doc){
			res.end(JSON.stringify({inserted: true}));
			console.log('error');
		});
	}
	
	else {
		console.log('error');
	}

	collection.insert({
		  'Mesa': mesa,
		  'Total': total,
		  'Codigo': codigo,
		  'Hora': hora,
		  'Fecha': fecha,
		  'Metodopago': metodoPago,
		  'Descuento': descuento,
		  'DescuentoTotal': descuentoTotal
		}).success(function(doc){
			res.end(JSON.stringify({inserted: true}));
		}).error(function(err){
			console.log('error');
		});



	



});

router.get('/list/:fecha', function(req, res, next){
	var db = req.db;
	var save = db.get('ventas');
	var fecha = req.params.fecha;
	save.find({'Fecha': fecha}, function(err, doc){
		res.send(doc);
	})

});

router.get('/list/tarjetas/:fecha', function(req, res, next){
	var db = req.db;
	var save = db.get('ventasTarjeta');
	var fecha = req.params.fecha;

	save.find({'Fecha': fecha}, function(err, doc){
		res.send(doc);
	});

});

router.get('/list/efectivo/:fecha', function(req, res, next){
	var db = req.db;
	var save = db.get('ventasEfectivo');
	var fecha = req.params.fecha;

	save.find({'Fecha': fecha}, function(err, doc){
		res.send(doc);
	});

});

router.post('/savetotal', function(req, res, next){
	var db = req.db;
	var totalBD = db.get('total');
	var fecha = req.body.fecha;
	var total = req.body.total;

	totalBD.insert({
		'Total': total,
		'Fecha': new Date()
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log('error');
	})
});

router.post('/savetotaltarjeta', function(req, res, next){
	var db = req.db;
	var totalBD = db.get('totaltarjeta');
	var fecha = req.body.fecha;
	var total = req.body.total;

	totalBD.insert({
		'Total': total,
		'Fecha': new Date()
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log('error');
	})
});

router.post('/savetotalefectivo', function(req, res, next){
	var db = req.db;
	var totalBD = db.get('totaltarjeta');
	var fecha = req.body.fecha;
	var total = req.body.total;

	totalBD.insert({
		'Total': total,
		'Fecha': new Date()
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log('error');
	})
});

module.exports = router;