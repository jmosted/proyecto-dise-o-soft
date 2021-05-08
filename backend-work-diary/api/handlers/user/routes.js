import express from "express";
import {
  createUser,
  deleteUser,
  getUserByDni,
  updateUser,
} from "./userController.js";
const app = express();

app.post("/user/create-user", (req, res) => createUser(req, res));
app.post("/user/update-user", (req, res) => updateUser(req, res));
app.post("/user/delete-user", (req, res) => deleteUser(req, res));
app.get("/user/get-user-by-dni/:dni", (req, res) => getUserByDni(req, res));

export default app;
