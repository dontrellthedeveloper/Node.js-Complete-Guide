const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'KNight1990$', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;