const connection = require("../conn");
const {DataTypes} = require("sequelize");

const User = connection.define("User ", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    TeljesNév: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Telefonszám: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    SzületésiDátum: {
        type: DataTypes.DATE,
        allowNull: false
    },
    SzületésiHely: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    Jelszó: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

module.exports = User;