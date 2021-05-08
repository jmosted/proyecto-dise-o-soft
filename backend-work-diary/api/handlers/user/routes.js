import express from 'express';
import {createUser, getUserByDni, updateUser} from './userController.js';
const app = express();

app.post('user/create-user',createUser(req,res));
app.post('user/update-user',updateUser(req,res));
app.get('user/get-user-by-dni/:dni',getUserByDni(req,res));

export default app;
