import express from 'express';

import mysql from 'mysql';
import myconn from 'express-myconnection';
import Router from './routes.js';
import dotenv from 'dotenv'
const app = express();




// Configuración de la conexión a la base de datos
app.set('port', process.env.PORT || 9000);
app.use(express.json());
dotenv.config()

const dbOptions = {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

// Middleware de conexión a la base de datos
app.use(myconn(mysql, dbOptions, 'single'));

// Agregar el enrutador
app.use('/', Router);
// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`El servidor está corriendo en el puerto http://localhost:${app.get('port')}/`);
});