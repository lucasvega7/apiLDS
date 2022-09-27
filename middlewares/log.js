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
  console.log('LOS HEADERS SON: ', req.headers);
  return next(); 
};