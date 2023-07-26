import { DataType } from "sequelize";
import sequelize from "../config/db.config.js";

const User = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "El Campo del nombre es requerido"
      },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "El Campo del apellido es requerido"
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "el correo electronico es requerido"
      },
      isEmail: {
        args: true,
        msg: 'Formato de correo invalido'
      }
    },
    unique: {
      args: true,
      msg: 'correo electronico actualmente registrado en la base de datos!'
    },

  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Debe ingresar el password'
      }
    }
  },
},
  {
    timestamps: true,
    tableName: "users",
  }
)

export default User;
