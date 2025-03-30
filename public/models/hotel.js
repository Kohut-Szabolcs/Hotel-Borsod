const connection = require("../conn");
const {DataTypes} = require("sequelize");

const Hotel = connection.define("Hotel", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

module.exports = Hotel;