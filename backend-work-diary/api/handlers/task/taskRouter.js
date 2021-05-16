import express from "express";
import {validationToken} from "../../../config/internal/jwt/jwt.js"
import {createTask, deleteTask, getTaskById, UpdateTask} from "./taskController.js";

const taskRouter = express();

taskRouter.post("/event/create-event", validationToken, (req, res) => createTask(req, res));
taskRouter.post("/event/update-event", validationToken, (req, res) => UpdateTask(req, res));
taskRouter.post("/event/delete-event", validationToken, (req, res) => deleteTask(req, res));
taskRouter.get("/event/get-event-by-id/:id", validationToken, (req, res) => getTaskById(req, res));

export default taskRouter;
