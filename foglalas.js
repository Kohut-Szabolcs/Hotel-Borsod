const connection = require("../conn");
const {DataTypes} = require("sequelize");

const Foglalas = connection.define("Foglalas", {
    foglalas_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    bejelentkezes_datum: {
        type: DataTypes.DATE,
        allowNull: false
    },
    kijelentkezes_datum: {
        type: DataTypes.DATE,
        allowNull: false
    },
    szoba_id: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
},  {
    timestamps: false
});

module.exports = Foglalas;