import {Router} from "express";
import {login} from "./loginController.js";

const router = Router();
router.post("/api/v1/login", login);

export default router;



