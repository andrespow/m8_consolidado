const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const secret_key = require ('../config/auth.config.js');


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await User.findOne({
            where: { email: email, password: password }
        });
        if (!usuario) {
            return res.status(401).json({ code: 401, message: 'email o password incorrectos' });
        }
        const passwordMatch = await bcrypt.compare(password, usuario.password);

        if (!passwordMatch) {
            return res.status(401).json({ code: 401, message: 'email o password incorrectos' });
        }

        const token = jwt.sign({ id: usuario.id, email: usuario.email }, secret_key, { expiresIn: '1h' });
        res.json({ code: 200, token: token });
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Error con el servidor' });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ code: 401, message: 'No autorizado: no possee token proporcionado' });
    }

    jwt.verify(token, secret_key, (error, decoded) => {
        if (error) {
            return res.status(403).json({ code: 403, message: 'Token no valido' });
        }
        req.user = decoded;
        next(); 
    });
};


module.exports = { login, verifyToken }