const express = require('express');
const dotenv = require('dotenv');

// Cargar el archivo de config.env en dotenv
dotenv.config({path: '.config/config.env'});

// Crear opbjeto app a partir de la clase express
const app = express();

// Enlace  a fichero de routes
const campus = require('./routes/campus');

// Montar(activar) rutas
app.use('/api/v1/campus', campus);

// Determinar el puerto de ejecución del server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server en modo ${process.env.NODE_ENV} en el puerto ${PORT}`));