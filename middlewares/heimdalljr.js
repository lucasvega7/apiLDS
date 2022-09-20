"use strict";

/**
 * Middleware que nos permite verificar la validez de una peticion.
 * @param {JSON} req 
 * @param {JSON} res 
 * @param {Function} next
 * 
 * @returns {Function} next() Si sale todo bien, o bien responde con un mensaje de error,
 * rechazando la peticion
 */
module.exports = async function (req, res, next) {

  if(req.headers.heimdall_auth){ // Si recibe un token
    console.log('Se ha recibido token heimdall auth. Se realiza autenticacion.');
    if(req.headers.heimdall_auth=="true"){
        return next(); // En caso que el token sea valido.
    }
  } else { // Si ni siquiera se recibe un token.
    console.log('No se recibió ningun token heimdall auth.');
  }

  // Si llega a esta parte es por que no esta autenticado.
  console.log('SimpleToken no autenticado');

  res.status(401).json({message: 'Ocurrio un error de autenticacion.'}); // se responde con mensaje de error.
};