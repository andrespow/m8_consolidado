const { users } = require('../middleware')
const db = require('../middleware')
const User = db.users
const Bootcamp = db.bootcamps

// Crear y Guardar Usuarios
const createUser = (user) => {
  return User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    })
    .then(user => {
      console.log(`>> Se ha creado el usuario: ${JSON.stringify(user, null, 4)}`)
      return user
    })
    .catch(err => {
      console.log(`>> Error al crear el usuario ${err}`)
    })
}

// obtener los bootcamp de un usuario
const findUserById = (userId) => {
  return User.findByPk(userId, {
      include: [{
        model: Bootcamp,
        as: "bootcamps",
        attributes: ["id", "title"],
        through: {
          attributes: [],
        }
      }, ],
    })
    .then(users => {
      return users
    })
    .catch(err => {
      console.log(`>> Error mientras se encontraba los usuarios: ${err}`)
    })
}

// obtener todos los Usuarios incluyendo los bootcamp
const findAll = () => {
  return User.findAll({
    include: [{
      model: Bootcamp,
      as: "bootcamps",
      attributes: ["id", "title"],
      through: {
        attributes: [],
      }
    }, ],
  }).then(users => {
    return users
  })
}

// Actualizar usuarios
const updateUserById = (userId, fName, lName) => {
  return User.update({
      firstName: fName,
      lastName: lName
    }, {
      where: {
        id: userId
      }
    })
    .then(user => {
      console.log(`>> Se ha actualizado el usuario: ${JSON.stringify(user, null, 4)}`)
      return user
    })
    .catch(err => {
      console.log(`>> Error mientras se actualizaba el usuario: ${err}`)
    })
}

// Actualizar usuarios
const deleteUserById = (userId) => {
  return User.destroy({
      where: {
        id: userId
      }
    })
    .then(user => {
      console.log(`>> Se ha eliminado el usuario: ${JSON.stringify(user, null, 4)}`)
      return user
    })
    .catch(err => {
      console.log(`>> Error mientras se eliminaba el usuario: ${err}`)
    })
}

module.exports = { createUser, findUserById, findAll, updateUserById, deleteUserById }