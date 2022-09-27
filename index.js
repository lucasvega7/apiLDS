require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
var app = express();

// Configuracion
const port = process.env.PORT || 8000;

// configuracion del cors.
const config = {
    "origin": '*',
    'Access-Control-Allow-Origin': '*',
    'allowedHeaders' : ['Content-Type', 'Authorization', 'token']
};
const heimdalljr = require('./middlewares/heimdalljr.js');
const head_log = require('./middlewares/log.js');
// Middlewares
app.use(cors(config));
app.use(morgan(process.env.NODE_ENV));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(head_log);
if(process.env.middleware === "activo"){
    app.use(heimdalljr);
}
// Definicion de rutas:

app.use('/api/v1/palabras', require('./rutas/palabras'));

// Instanciando Servidor.
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});
