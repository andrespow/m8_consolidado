import express from "express";
import {
    createBootcamp,
    findAll,
    addUser,
    findById
} from "../controllers/bootcamp.controller.js";
import { verifyToken } from '../middleware/auth.js';

const rutas = express.Router();

// createBootcamp, addUser, findById, findAll

rutas.post("/api/bootcamp", verifyToken, createBootcamp);
rutas.post("/api/bootcamp/adduser", verifyToken, addUser);
rutas.get("/api/bootcamp/user:id", findById);
rutas.get("/api/bootcamp/alluser", findAll);



export default router;