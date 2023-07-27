const express = require ("express");
const { createBootcamp, findAll, addUser, findById} = require ("../controllers/bootcamp.controller.js");
const { verifyToken } = require ('../middleware/auth.js');

const rutas = express.Router();

// createBootcamp, addUser, findById, findAll

rutas.post("/api/bootcamp", verifyToken, createBootcamp);
rutas.post("/api/bootcamp/adduser", verifyToken, addUser);
rutas.get("/api/bootcamp/user:id", findById);
rutas.get("/api/bootcamp/alluser", findAll);


module.exports = { rutas }