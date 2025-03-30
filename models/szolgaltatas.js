const connection = require("../conn");
const { DataTypes } = require("sequelize");

const Szolgaltatas = connection.define("Szolgaltatas", {
    szolgaltatas_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nev: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ar: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

const insertInitialData = async () => {
    try {
        await connection.sync();

        await Szolgaltatas.bulkCreate([
            { szolgaltatas_id: 1, nev: 'Wellness központ', ar: 30000},
            { szolgaltatas_id: 2, nev: 'Úszómedence', ar: 1000},
            { szolgaltatas_id: 3, nev: 'Gourmet étterem', ar: 12000},
            { szolgaltatas_id: 4, nev: 'Sportolási lehetőségek', ar: 5000},
            { szolgaltatas_id: 5, nev: 'Konferenciaterem', ar: 2000}
        ]);

        console.log("Initial data inserted successfully.");
    } catch (error) {
        console.error("Error inserting initial data:", error);
    }
};

insertInitialData();


module.exports = Szolgaltatas;