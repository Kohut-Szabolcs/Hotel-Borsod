const { Sequelize } = require("sequelize");

const connection = new Sequelize("hotel", "root", "", {
    dialect:"mysql",
    host:"localhost"
});

module.exports = connection;