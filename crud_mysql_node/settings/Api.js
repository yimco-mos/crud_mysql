import express from "express";
import cors from "cors";
import mysql from "mysql";
import myconn from "express-myconnection";
import { RouterBooks } from "./routes/routesBooks.js";
import { RouterUsers } from "./routes/routesUsers.js";
import dotenv from "dotenv";



//configuracion de moduos
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

// Configuración de la conexión a la base de datos



const dbOptionsBooks = {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASEBOOKS,
};

const dbOptionsUsers = {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASEUSERS,
};

// Middleware de conexión a la base de datos
app.set("port", process.env.PORT || 9000);

app.use(myconn(mysql, dbOptionsBooks, "single"));
app.use(myconn(mysql, dbOptionsUsers, "single"));
// rutas
app.use("/books", RouterBooks);
app.use("/users", RouterUsers);


// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log(
    `El servidor está corriendo en el puerto http://localhost:${app.get(
      "port"
    )}/`
  );
});
