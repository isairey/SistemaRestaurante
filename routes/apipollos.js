var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var db = req.db;
	var pollos = db.get('ordenespollos');

	pollos.find({}, function(err, doc){
		res.json(doc);
	});

});

router.post('/save', function(req, res, next){
	var id = req.params.id;
	var db = req.db;
	
	var collection = db.get('ordenespollos');
	
	var mesa = req.body.mesa;
	
	var precio = req.body.precio;
	var pedido = req.body.pedido;
	//console.log(typeof pedidosCant + "a");
	//console.log(descuento.length + " b");

	/*Data*/
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutes = fecha.getMinutes();
	var resultadoHora = hora + ":" + minutes;

	var mes = fecha.getMonth();
	var ano = fecha.getFullYear();
	var dia = fecha.getDate();

	if(mes == 0) {
		mes = "Enero";
	}
	else if(mes == 1) {
		mes = "Febrero";
	}
	else if(mes == 2) {
		mes = "Marzo";
	}
	else if(mes == 3){
		mes = "Abril";
	}
	else if(mes == 4) {
		mes = "Mayo";
	}
	else if(mes == 5) {
		mes = "Junio";
	}
	else if(mes == 6) {
		mes = "Julio";
	}
	else if(mes == 7) {
		mes = "Agosto";
	}
	else if(mes == 8) {
		mes = "Septiembre";
	}
	else if(mes == 9) {
		mes = "Octubre";
	}
	else if(mes == 10) {
		mes = "Noviembre";
	}
	else if(mes == 11){
		mes = "Diciembre";
	}
	else  {
		mes = "Ningun mes se encontro";
	}
	var resultadoFecha = "El " + dia + " de " + mes  + " del " + ano;


	collection.insert({
			'Pedido': pedido,
			'Precio': precio,
			'Mesa': mesa,
			'Fecha': resultadoFecha,
			'Hora': resultadoHora
		
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});



});

router.get('/:fecha', function(req, res, next){
	var db = req.db;
	var save = db.get('ordenespollos');
	var fecha = req.params.fecha;

	save.find({'Fecha': fecha}, function(err, doc){
		res.send(doc);
	});

});
router.get('/borrar/:id', function(req, res, next){
	var db = req.db;
	var pollos = db.get('ordenespollos');
	var id = req.params.id;

	pollos.remove({
		'_id': id
	}, function(err, doc){
		if(err){
			console.log(err);
		}
		else {
			console.log('enviado');
		}
	});

});

module.exports = router;