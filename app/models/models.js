import sequelize from '../config/db.config.js';
const BootcampModel = require('./app/models/bootcamp.model');
const UserModel = require('./app/models/user.model');

const Bootcamp = BootcampModel(sequelize);
const User = UserModel(sequelize);

sequelize.sync().then(() => {
    console.log('All models synced successfully.');
}).catch(error => {
    console.error('Error syncing models:', error);
});

module.exports = {
    sequelize,
    Bootcamp,
    User
};