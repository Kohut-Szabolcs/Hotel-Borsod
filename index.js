const connection = require("../conn");
const { DataTypes } = require("sequelize");

Szoba.hasMany(Foglalas, { foreignKey: "szoba_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
Foglalas.belongsTo(Szoba, { foreignKey: "szoba_id" });