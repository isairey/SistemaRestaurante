var mongoose = require('mongoose');

var UserDetails = mongoose.model('model');

var LocalStrategy = require('passport-local').Strategy;
// Fichero de configuración donde se encuentran las API keys
// Este archivo no debe subirse a GitHub ya que contiene datos
// que pueden comprometer la seguridad de la aplicación.
//var config = require('./config');

// Exportamos como módulo las funciones de passport, de manera que
// podamos utilizarlas en otras partes de la aplicación.
// De esta manera, mantenemos el código separado en varios archivos
// logrando que sea más manejable.
module.exports = function(passport) {

    // Serializa al usuario para almacenarlo en la sesión
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // Deserializa el objeto usuario almacenado en la sesión para
    // poder utilizarlo
    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });


    // Configuracion del autenticado local
    passport.use(new LocalStrategy(function(username, password, done) {
      process.nextTick(function() {
        UserDetails.findOne({
          'username': username
        }, function(err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
          	console.log('ocurrio un error');
            return done(null, false);
          }

          if (user.password != password) {
          	console.log('hubo un error en la cuenta');
            return done(null, false);
          }

          return done(null, user);
        });
      });

    }));
           

};

