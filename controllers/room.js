const Room = require("../models/szoba");
const Foglalas = require("../models/foglalas")

const createBooking = async (req, res) => {
    try {
        const { SzobaSzám, Ár, szoba_id } = req.body;

        if (!SzobaSzám || !Ár || !szoba_id) {
            return res.status(400).json("Hiányzó adatok");
        }

        const room = await Room.findOne({ where: { SzobaSzám, szoba_id } });
        if (!room) {
            return res.status(400).json("A szoba nem elérhető");
        }
        const bejelentkezés = new Date(
            Date.now() + 336* 60 * 60 * 1000


                )
        const kijelentkezes = new Date(
            Date.now() + 504* 60 * 60 * 1000
        )
        const foglalas = Foglalas.create({
            bejelentkezes_datum:bejelentkezés,
            kijelentkezes_datum:kijelentkezes,
            szoba_id:szoba_id

})
        return res.status(201).json("A szoba foglalva");
    } catch (err) {
        return res.status(500).json({ "hiba": err.message });
    }
};

const getAllRooms = 
async (req, res) => {
        try {
            const rooms = await Room.findAll();

            if (rooms.length <= 0) {
                return res.status(404).json("Nincsenek szobák");
            }
            return res.status(200).json({rooms: rooms});
        } catch (err) {
            return res.status(500).json({"hiba": err});
        }
    }

const getAvailableRooms = 
async (req, res) => {
         try {
        const availableRooms = await Room.findAll();
        
        if (availableRooms.length === 0) {
            return res.status(404).json({ message: "Nincsenek elérhető szobák." });
        }

        res.json(availableRooms);
    } catch (error) {
        console.error("Hiba a szobák lekérdezésekor:", error);
        res.status(500).json({ error: 'Hiba történt a szobák lekérdezésekor.' });
    }
    }

const cancelBooking = 
async (req, res) => {
        try {
            const { foglalasId } = req.body;
    
            if (!foglalasId) {
                return res.status(400).json("Hiányzó foglalási azonosító");
            }
    
            const foglalas = await Foglalas.findOne({ where: { foglalas_id: foglalasId } });
            if (!foglalas) {
                return res.status(404).json("A foglalás nem található");
            }
    
            const currentDate = new Date();
            const checkInDate = new Date(foglalas.bejelentkezes_datum);
    
            const timeDifference = checkInDate - currentDate;
            const daysDifference = timeDifference / (1000 * 3600 * 24);
    
            if (daysDifference < 7) {
                return res.status(400).json("A foglalás lemondásához legalább egy héttel a bejelentkezés előtt kell lemondani.");
            }
    
            await foglalas.destroy();
    
            return res.status(200).json("A foglalás sikeresen lemondva");
        } catch (err) {
            return res.status(500).json({"hiba": err});
        }
    }

module.exports = {
    createBooking,
    getAllRooms,
    getAvailableRooms,
    cancelBooking
};