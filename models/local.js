var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema ({
	username: String,
	password: String
}, {
	collection: 'usuarios'
});

var usuarioModel = mongoose.model('model', usuario);
