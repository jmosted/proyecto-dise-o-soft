import express from "express";
import {
    createUser,
    deleteUser,
    getUserByDni,
    updateUser,
} from "./userController.js";
import {validationToken} from "../../../config/internal/jwt/jwt.js"

const app = express();

app.post("/user/create-user", (req, res) => createUser(req, res));
app.post("/user/update-user", validationToken, (req, res) => updateUser(req, res));
app.post("/user/delete-user", validationToken, (req, res) => deleteUser(req, res));
app.get("/user/get-user-by-dni/:dni", validationToken,(req, res) => getUserByDni(req, res));

export default app;
