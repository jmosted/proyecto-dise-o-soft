import express from "express";
import {validationToken} from "../../../config/internal/jwt/jwt.js"
import {createEvent, deleteEvent, getEventById, updateEvent,getAllEvents} from "./eventController.js";

const eventRouter = express();

eventRouter.post("/event/create-event", validationToken, (req, res) => createEvent(req, res));
eventRouter.post("/event/update-event", validationToken, (req, res) => updateEvent(req, res));
eventRouter.post("/event/delete-event", validationToken, (req, res) => deleteEvent(req, res));
eventRouter.get("/event/get-event-by-id/:id", validationToken, (req, res) => getEventById(req, res));
eventRouter.get("/event/get-all-events", validationToken, (req, res) => getAllEvents(req, res));
export default eventRouter;
