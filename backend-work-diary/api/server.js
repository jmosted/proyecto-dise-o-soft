import express from "express";
import morgan from "morgan";
import loginRoutes from "./handlers/login/routes.js";
import userRoutes from './handlers/user/routes.js';
import eventRouter from "./handlers/event/routes.js";
import taskRouter from "./handlers/task/taskRouter.js";

export const Server = () => {
  const app = express(); //crear una objeto de la variable express

  app.set("port", process.env.PORT || 4000); //define el puerto por la variable env.PORT o montarlo por el puerto 4000

  app.use(morgan("dev")); //solo usar como developer

  app.use(express.json()); //entender peticiones tipo json

  app.use(express.urlencoded({ extended: false }));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


  app.use(loginRoutes); //usar la ruta

  app.use(userRoutes); // ruta user

  app.use(eventRouter); // event router

  app.use(taskRouter); // task router

  return app;
};
