import {Router} from "express";
import {login} from "./loginController.js";

const router = Router();
router.get("/api/v1/login",login);

export default router;



