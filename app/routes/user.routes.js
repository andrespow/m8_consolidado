import express from "express";
import {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById,
    login
} from "../controllers/user.controller.js";
const { login, verifyToken } = require ("../middleware/auth.js");
const { validarEmail } = require ("../middleware/verifySingUp.js");

const rutas = express.Router();

// createUser, findUserById, findAll, updateUserById, deleteUserById

rutas.post("/api/bootcamp/users/login", validarEmail, login)
rutas.post("/api/bootcamp/users/createuser", createUser);
rutas.get("/api/bootcamp/users/user:id", findUserById);
rutas.get("/api/bootcamp/users/", findAll);
rutas.put("/api/bootcamp/users/user:id", verifyToken, updateUserById);
rutas.delete("/api/bootcamp/users/user:id", verifyToken, deleteUserById);





