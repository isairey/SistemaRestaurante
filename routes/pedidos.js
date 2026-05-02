var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('pedidos', {
		title: 'Pedidos',
		username : req.user.username
	});
});


router.post('/save', function(req, res, next){

	var db =  req.db;
	
	var mesa = req.body.mesa;
	//var personas = req.body.personas;
	var pedido = req.body.pedido;
	var precio = req.body.precio;
	var mozo = req.body.mozo;
	var codigo = req.body.codigo;

	var collection = db.get('pedidos');
	var pedidoscerrados = db.get('pedidoscerrados');

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

	
	/*End Data*/

	/*collection.insert({
		'Mesa': mesa,
		'Pedido': pedido,
		'Precio': precio,
		'Mozo': mozo,
		'Estado': 'Ocupado',
		'Hora': resultadoHora,
		'Fecha': resultadoFecha,
		'Codigo': codigo

	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log('error');
	});*/

	collection.insert({
		'Mesa': mesa,
		//'Pedido': pedido,
		//'Precio': precio,
		'Mozo': mozo,
		'Estado': 'Ocupado',
		'Hora': resultadoHora,
		'Fecha': resultadoFecha,
		'Codigo': codigo,

	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log('error');
	});




	pedidoscerrados.insert({
		'Mesa': mesa,
		//'Pedido': pedido,
		//'Precio': precio,
		'Mozo': mozo,
		'Estado': 'Cerrado',
		'Hora': resultadoHora,
		'Fecha': resultadoFecha,
		'Codigo': codigo
	});


});

router.get('/show', function(req, res, next){
	var db = req.db;
	var collection = db.get('pedidos');

	collection.find({}, function(err, doc){
		res.json(doc);
	})
});

router.get('/pedidounico/:id', function(req,res, next){
	var id = req.params.id;
	var db = req.db;
	var pedido = db.get('pedidos');
	pedido.find({'_id': id}, function(err, doc){
		res.json(doc);
	})
});



//aqui me de borrando el pedido de las mesas
router.post('/show/pedido/:id/', function(req, res, next){
	var db = req.db;
	var pedido = db.get('pedidos');
	//var borrar = req.params.borrar;
	var pedidoBorrar = req.body.borrar;
	var id = req.params.id;
	pedido.findOne({'_id': id}, function(err, doc){
		pedido.update(
		{'_id': id},
			{$pull	:{
				'Pedido': pedidoBorrar
			}
		})
	}).success(function(doc){
		console.log('se borro');
	}).error(function(err){
		console.log(err);
	})
});


router.post('/mesas', function(req, res, next) {

	var db =  req.db;
	
	var mesa = req.body.mesa;

	var mozo = req.body.mozo;

	var codigo = req.body.codigo;

	var collection = db.get('mesas');

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

	
	/*End Data*/

	collection.insert({
		'Mesa': mesa,
		'Estado': 'Ocupado',
		'Hora': resultadoHora,
		'Fecha': resultadoFecha,
		'Codigo': codigo

	}).success(function(doc){
		res.json({inserted: true});
		
	}).error(function(err){
		res.json('hubo un error');
		
	});

});

router.get('/showmesas', function(req, res, next) {
	var db = req.db;
	var collection = db.get('mesas');

	collection.find({}, function(err, doc){
		res.json(doc);
	});
});

router.post('/deletemesas/:idmesas', function(req, res, next) {
	var db = req.db;
	var collection = db.get('mesas');
	var pedidos = db.get('pedidos');

	var findId = req.params.idmesas;

	collection.remove({'Codigo': findId}, function(err, doc){
		if(err){
			console.log(err);
		}
		else {
			console.log('Se borro'); 
		}
	}).success(function(){
		console.log('borrado');
	});

	pedidos.remove({'Codigo': findId}, function(err, doc){
		if(err){
			console.log('error')
		}
		else {
			console.log('borrado');
		}
	}).success(function(){
		console.log('borrado');
	});
});

router.get('/ticket/:id', function(req, res, next){
	var db = req.db;
	var id = req.params.id;
	var collection = db.get('pedidos');

	collection.find({'_id': id}, function(err, doc){
		res.json(doc);
	});
});

module.exports = router;