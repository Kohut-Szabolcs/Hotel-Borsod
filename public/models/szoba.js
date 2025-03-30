const connection = require("../conn");
const { DataTypes } = require("sequelize");

const Szoba = connection.define("Szoba", {
    szoba_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Ár: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SzobaSzám: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},  {
        timestamps: false
});

const insertInitialData = async () => {
    try {
        await connection.sync();

        await Szoba.bulkCreate([
            { szoba_id: 1, type: 'Alap', Ár: 35000, SzobaSzám: 101 },
            { szoba_id: 2, type: 'Alap', Ár: 35000, SzobaSzám: 102 },
            { szoba_id: 3, type: 'Alap', Ár: 35000, SzobaSzám: 103 },
            { szoba_id: 4, type: 'Alap', Ár: 35000, SzobaSzám: 104 },
            { szoba_id: 5, type: 'Alap', Ár: 35000, SzobaSzám: 105 },
            { szoba_id: 6, type: 'Deluxe', Ár: 100000, SzobaSzám: 201 },
            { szoba_id: 7, type: 'Deluxe', Ár: 100000, SzobaSzám: 202 }
        ]);

        console.log("Initial data inserted successfully.");
    } catch (error) {
        console.error("Error inserting initial data:", error);
    }
};

insertInitialData();

module.exports = Szoba;