import User from '../models/user.model.js';

export const validarEmail = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let usuario = await User.findOne({
            where: { email: email, password: password }
        });
        if (!usuario) {
            console.log('Este usuario ya posee una cuenta');
            return res
        }
        next(); 
    } catch (error) {
        console.log('Error al conectar con el servidor');
        return res
    }
};
