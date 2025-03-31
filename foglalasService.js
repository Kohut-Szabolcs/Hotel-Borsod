const { Op } = require('sequelize');
const Foglalas = require('../models/foglalas');
const Szoba = require('../models/szoba');

async function releaseExpiredBookings() {
    try {
        const currentDate = new Date();

        const expiredBookings = await Foglalas.findAll({
            where: {
                kijelentkezes_datum: {
                    [Op.lt]: currentDate,
                },
            },
        });

        for (const foglalas of expiredBookings) {

            await Szoba.update({ foglalt: false }, { where: { id: foglalas.szoba_id } });

            await foglalas.destroy();
        }

        console.log("A lejárt foglalások sikeresen felszabadítva.");
    } catch (error) {
        console.error("Hiba a lejárt foglalások felszabadításakor:", error);
    }
}

module.exports = { releaseExpiredBookings };