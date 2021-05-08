import express from "express";
import morgan from "morgan";
import path from "path";
import loginRoutes from "./handlers/login/routes.js";
import userRoutes from './handlers/user/routes.js';

export const server = () => {
  const app = express(); //crear una objeto de la variable express

  app.set("port", process.env.PORT || 4000); //define el puerto por la variable env.PORT o montarlo por el puerto 4000

  app.use(morgan("dev")); //solo usar como developer

  app.use(express.json()); //entender peticiones tipo json

  app.use(express.urlencoded({ extended: false }));

  app.use(loginRoutes); //usar la ruta

  app.use(userRoutes);

  return app;
};
