const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// Cors
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
//Todo: auth / craer, login, renew
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
//Todo: crud / eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})