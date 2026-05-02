var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('admin', {
		title: 'Administracion',
		username : req.user.username
	});
});

router.get('/mozos', function(req, res, next) {
	
	res.render('mozos', {
		title: 'Mozos - Administracion',
		username: req.user.username
	});

});

router.post('/addmozos', function(req, res, next) {

	var db = req.db;

	var nombre = req.body.nombre;
	var email = req.body.email;
	var celular = req.body.celular;

	var collection = db.get('mozos');

	collection.insert({
		'Nombre': nombre,
		'Email': email,
		'Celular': celular
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err) {
		res.json({error: 'Ocurrio un error'});
		console.log(err);
	});

});

router.get('/mozoslist', function(req, res, next) {
	var db = req.db;
	var collection = db.get('mozos');

	collection.find({}, {sort: {points : 1}}, function(err, doc){
		res.json(doc);
	});
	
});

router.get('/mozoslist/:id', function(req, res, next) {
	
	var to = req.params.id;
	
	var db = req.db;
	var collection = db.get('mozos');

	collection.remove({'Nombre': to}, function(err, doc) {
		
		if(err) {
			console.log(err);
		}
		else {
			console.log('Borrado');
		}
	})

});
router.get('/productosdelete/:id', function(req, res, next) {
	
	var to = req.params.id;
	
	var db = req.db;
	var collection = db.get('stock');

	collection.remove({'Codigo': to}, function(err, doc) {
		
		if(err) {
			console.log(err);
		}
		else {
			console.log('Borrado');
		}
	}).success(function(doc){
		res.json({inserted: true});
	});

});

router.get('/platos', function(req, res, next) {

	res.render('platos', {
		title: 'Platos - Administracion',
		username: req.user.username
	});

});
router.get('/bebidas', function(req, res, next){
	res.render('bebidas', {
		title: 'Bebidas - Administracion',
		username: req.user.username
	});
});

router.post('/addplatos', function(req, res, next){
	var db = req.db;
	var collection = db.get('platos');
	var bebidasCollection = db.get('bebidas');
	var entradas = db.get('entradas');
	var menus = db.get('menus');
	var platos = db.get('platos');
	var carta = db.get('carta');
	var ceviches = db.get('ceviches');
	var tiraditos = db.get('tiraditos');
	var lechetigre = db.get('lechetigre');
	var sudados = db.get('sudadoschupes');
	var segundosMarinos = db.get('segundosmarinos');
	var sudadosChupes = db.get('sudadoschupes');
	var segundosMarinos = db.get('segundosmarinos');
	var chicharonesMarinos = db.get('chicharonesMarinos');
	var trilogias = db.get('trilogias');
	var tacu = db.get('tacu');
	var chicha = db.get('chicha');
	var guarniciones = db.get('guarniciones');
	var sopasCriollas = db.get('sopascriollas');
	var chifas = db.get('chifas');
	var pollobrasa = db.get('pollobrasa');
	var pescadosmariscos = db.get('pescadosmariscos');


	var nombre = req.body.nombre;
	var precio = req.body.precio;
	var categoria = req.body.categoria;
	var codigo = req.body.codigo;


	/*Condicional*/

	if(categoria == 'Ceviches') {

		ceviches.insert({
			'Ceviches': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({

			'Nombre': nombre,
			'Precio': precio,
			'Categoria': categoria,
			'Codigo': codigo
		
		});

	}
	else if(categoria == 'Entradas') {

		entradas.insert({
			'Entradas': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});


		collection.insert({
			'Nombre': nombre,
			'Precio': precio,
			'Categoria': categoria,
			'Codigo': codigo
		});
	}
	else if(categoria == 'Tiraditos') {

		tiraditos.insert({
			'Tiraditos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Lechedetigre') {
		

		lechetigre.insert({
			'Lechetigre': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Sudadoschupes') {
		

		sudados.insert({
			'SudadosyChupes': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Segundosmarinos') {
		

		segundosMarinos.insert({
			'SegundosMarinos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'ChicharronesMarinos') {
		

		chicharonesMarinos.insert({
			'ChicharronesMarinos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Trilogias') {
		

		trilogias.insert({
			'Trilogias': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'TacuTacus') {
		

		tacu.insert({
			'TacuTacus': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Chicharrones') {
		

		chicha.insert({
			'Chicharrones': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Guarniciones') {
		

		guarniciones.insert({
			'Guarniciones': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Sopascriollas') {
		

		sopasCriollas.insert({
			'SopasCriollas': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Chifas') {
		

		chifas.insert({
			'Chifas': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Polloalabrasa') {
		

		pollobrasa.insert({
			'Polloalabrasa': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'PescadosMariscos') {
		

		pescadosmariscos.insert({
			'PercadosMariscos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}

	else {
		return "No se encontro collection fin";
	}

	/*collection.insert({
		'Nombre': nombre,
		'Precio': precio,
		'Categoria': categoria,
		'Codigo': codigo
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		res.json({error: 'Ocurrio un error'});
		console.log(err);
	});*/


});

router.post('/addbebidas', function(req, res, next){
	var db = req.db;
	var collection = db.get('bebidas');
	
	var bebidasAlcohol = db.get('bebidasalcohol');
	var bebidasCervezas = db.get('cervezas');
	var bebidasTragosPisco = db.get('tragosconpisco');
	var bebidasTragosVodka = db.get('tragosconvodka');
	var bebidasTragosRon = db.get('tragosron');
	var bebidasVinosBlancos = db.get('vinosblancos');
	var bebidasEspumantes = db.get('espumantes');
	var bebidasTragosTequila = db.get('tragoscontequila');
	var bebidasWhisky = db.get('medidaswhisky');
	var bebidasVinosTintos = db.get('vinostintos');
	


	var nombre = req.body.nombre;
	var precio = req.body.precio;
	var categoria = req.body.categoria;
	var codigo = req.body.codigo;


	/*Condicional*/

	if(categoria == 'Bebidassinalcohol') {

		bebidasAlcohol.insert({
			'Bebidas': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({

			'Nombre': nombre,
			'Precio': precio,
			'Categoria': categoria,
			'Codigo': codigo
		
		});

	}
	else if(categoria == 'Cerverzas') {

		bebidasCervezas.insert({
			'Cervezas': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});


		collection.insert({
			'Nombre': nombre,
			'Precio': precio,
			'Categoria': categoria,
			'Codigo': codigo
		});
	}
	else if(categoria == 'Tragosconpisco') {

		bebidasTragosPisco.insert({
			'Tragosconpisco': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Tragosconvodka') {
		

		bebidasTragosVodka.insert({
			'Tragosconvodka': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Tragosconron') {
		

		bebidasTragosRon.insert({
			'Tragosconron': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Vinosblancos') {
		

		bebidasVinosBlancos.insert({
			'Vinosblancos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Espumantes') {
		

		bebidasEspumantes.insert({
			'Espumantes': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Tragoscontequila') {
		

		bebidasTragosTequila.insert({
			'Tragoscontequila': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Medidawhisky') {
		

		bebidasWhisky.insert({
			'Medidawhisky': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	else if(categoria == 'Vinostintos') {
		

		bebidasVinosTintos.insert({
			'Vinostintos': {
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
			}
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			res.json({error: 'Ocurrio un error'});
			console.log(err);
		});

		collection.insert({
				'Nombre': nombre,
				'Precio': precio,
				'Categoria': categoria,
				'Codigo': codigo
		});
	}
	

	else {
		return "No se encontro collection fin";
	}

	/*collection.insert({
		'Nombre': nombre,
		'Precio': precio,
		'Categoria': categoria,
		'Codigo': codigo
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		res.json({error: 'Ocurrio un error'});
		console.log(err);
	});*/


});

router.post('/addstock', function(req, res, next){
	var name = req.body.nombre;
	var preciop = req.body.precio;
	var cantidadp = req.body.cantidad;
	var codigo = req.body.codigo;

	var db = req.db;
	var stockbd = db.get('stock');

	stockbd.insert({
		'Nombre': name,
		'Precio': preciop,
		'Cantidad': cantidadp,
		'Codigo': codigo
	}).success(function(doc){
		res.json({inserted: true});
	}).error(function(err){
		console.log(err);
	});


});

router.get('/showstock', function(req, res, next) {
	
	var db = req.db;
	var collection = db.get('stock');

	collection.find({}, {sort: {points : 1}}, function(err, doc){
		res.json(doc);
	});
});

router.get('/platoslist', function(req, res, next) {
	
	var db = req.db;
	var collection = db.get('platos');

	collection.find({}, {sort: {points : 1}}, function(err, doc){
		res.json(doc);
	});
});

router.get('/bebidaslist', function(req, res, next) {
	
	var db = req.db;
	var collection = db.get('bebidas');

	collection.find({}, {sort: {points : 1}}, function(err, doc){
		res.json(doc);
	});
});

router.get('/bebidaslist/bebidasalcohol', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('bebidasalcohol');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/cervezas', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('cervezas');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});


router.get('/bebidaslist/tragosconpisco', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('tragosconpisco');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/tragosconvodka', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('tragosconvodka');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/tragosron', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('tragosron');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});


router.get('/bebidaslist/vinosblancos', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('vinosblancos');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/espumantes', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('espumantes');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/tragoscontequila', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('tragoscontequila');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/bebidaslist/medidaswhisky', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('medidaswhisky');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});


router.get('/bebidaslist/vinostintos', function(req, res, next){
	var db = req.db;
	var bebidas = db.get('vinostintos');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});



router.get('/platoslist/entradas', function(req, res, next){
	var db = req.db;
	var entradas = db.get('entradas');

	entradas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/ceviches', function(req, res, next){
	var db = req.db;
	var ceviches = db.get('ceviches');

	ceviches.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/tiraditos', function(req, res, next) {
	var db = req.db;
	var tiraditos = db.get('tiraditos');

	tiraditos.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/lechedetigre', function(req, res, next) {
	var db = req.db;
	var lechetigre = db.get('lechetigre');

	lechetigre.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/sudadoschupes', function(req, res, next) {
	var db = req.db;
	var sudadoschupes = db.get('sudadoschupes');

	sudadoschupes.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/segundosmarinos', function(req, res, next) {
	var db = req.db;
	var segundosmarinos = db.get('segundosmarinos');

	segundosmarinos.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/sudadoschupes', function(req, res, next) {
	var db = req.db;
	var sudadoschupes = db.get('sudadoschupes');

	sudadoschupes.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/chicharonesmarinos', function(req, res, next) {
	var db = req.db;
	var chicharonesMarinos = db.get('chicharonesMarinos');

	chicharonesMarinos.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/chicharrones', function(req, res, next) {
	var db = req.db;
	var chicharonesMarinos = db.get('chicha');

	chicharonesMarinos.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/trilogias', function(req, res, next) {
	var db = req.db;
	var trilogias = db.get('trilogias');

	trilogias.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/tacu', function(req, res, next) {
	var db = req.db;
	var tacu = db.get('tacu');

	tacu.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/chicha', function(req, res, next) {
	var db = req.db;
	var chicha = db.get('chicha');

	chicha.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/guarniciones', function(req, res, next) {
	var db = req.db;
	var guarniciones = db.get('guarniciones');

	guarniciones.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/sopascriollas', function(req, res, next) {
	var db = req.db;
	var sopasCriollas = db.get('sopascriollas');

	sopasCriollas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/chifas', function(req, res, next) {
	var db = req.db;
	var chifas = db.get('chifas');

	chifas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});
router.get('/platoslist/pollobrasa', function(req, res, next) {
	var db = req.db;
	var pollobrasa = db.get('pollobrasa');

	pollobrasa.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});

router.get('/platoslist/pescadosmariscos', function(req, res, next) {
	var db = req.db;
	var pollobrasa = db.get('pescadosmariscos');

	pollobrasa.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});






/*router.get('/platoslist/bebidas', function(req, res, next) {
	var db = req.db;
	var bebidas = db.get('bebidas');

	bebidas.find({}, { sort: {points: 1}}, function(err, doc) {
		res.json(doc);
	})
});*/



/*router.get('/platoslist/menus', function(req, res, next) {

	var db = req.db;
	var menus = db.get('menus');

	menus.find({}, {sort : {points : 1}}, function(err, doc){
		res.json(doc);
	});
});

router.get('/platoslist/platoscarta', function(req, res, next){
	var db = req.db;
	var platosCarta = db.get('carta');

	platosCarta.find({}, {sort : {points : 1}}, function(err, doc){
		res.json(doc);
	});
});*/

router.get('/deleteplatos/:id/:name', function(req, res, next){
	var db = req.db;
	
	var id = req.params.id;
	var name = req.params.name;
	var bebidasBD = db.get('bebidas');
	var entradasBD = db.get('entradas');
	var menusBD = db.get('menus');
	var cartaBD = db.get('carta');

	console.log(id);
	console.log(name);

	if(id == 'Bebidas') {
		bebidasBD.remove({

			'_id': name
			
			}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('remove');
			}
		});
	}

	else if(id == 'Entradas'){
		entradasBD.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err)
			}
			else {
				console.log('remove');
			}
		});
	}

	else if(id == 'Menus') {
		console.log(id + ' tratando de remover');

		menusBD.remove({
			'_id': name
		}, function(err, doc){
			if(err) {
				console.log(err);
			}
			else {
				console.log('remove');
			}
		});

	}

	else if(id == 'Platos a la carta') {
		cartaBD.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}

	else {
		console.log('No encontre: ' + id);
	}

	
	res.send('remove');



});

router.get('/deleteplatos/:codigo', function(req, res, next) {
	var codigo = req.params.codigo;
	var db = req.db;
	var collection = db.get('platos');

	collection.remove({
		'Codigo': codigo
	}, function(err, doc){
		if(err) {
			console.log('error en platoslist');
		}
		else {
			console.log('se removio');
		}
	});
});

router.get('/deletebebidas/:id/:name', function(req, res, next){
	var db = req.db;
	
	var id = req.params.id;
	var name = req.params.name;
	var bebidas1 = db.get('bebidasalcohol');
	var bebidas2 = db.get('cervezas');
	var bebidas3 = db.get('tragosconpisco');
	var bebidas4 = db.get('tragosconvodka');
	var bebidas5 = db.get('tragosron');
	var bebidas6 = db.get('vinosblancos');
	var bebidas7 = db.get('espumantes');
	var bebidas8 = db.get('tragoscontequila');
	var bebidas9 = db.get('medidaswhisky');
	var bebidas10 = db.get('vinostintos');
	

	console.log(id);
	console.log(name);

	if(id == 'Bebidassinalcohol') {
		bebidas1.remove({

			'_id': name
			
			}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('remove');
			}
		});
	}

	else if(id == 'Cerverzas'){
		bebidas2.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err)
			}
			else {
				console.log('remove');
			}
		});
	}

	else if(id == 'Tragosconpisco') {
		console.log(id + ' tratando de remover');

		bebidas3.remove({
			'_id': name
		}, function(err, doc){
			if(err) {
				console.log(err);
			}
			else {
				console.log('remove');
			}
		});

	}

	else if(id == 'Tragosconvodka') {
		bebidas4.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Tragosconron') {
		bebidas5.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Vinosblancos') {
		bebidas6.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Espumantes') {
		bebidas7.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Tragoscontequila') {
		bebidas8.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Medidawhisky') {
		bebidas9.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}
	else if(id == 'Vinostintos') {
		bebidas10.remove({
			'_id': name
		}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				console.log('removido');
			}
		});
	}

	else {
		console.log('No encontre: ' + id);
	}

	
	res.send('remove');



});

router.get('/deletebebidas/:codigo', function(req, res, next) {
	
	var db = req.db;
	var collection = db.get('bebidas');

	var codigo = req.params.codigo;

	collection.remove({
		'Codigo': codigo
	}, function(err, doc){
		if(err) {
			console.log('error en platoslist');
		}
		else {
			console.log('se removio');
		}
	});
});





module.exports = router;