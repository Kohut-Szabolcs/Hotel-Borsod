const Szolgaltatas = require("../models/szolgaltatas");

const getAllServices = 
async (req, res) => {
        try {
            const services = await Szolgaltatas.findAll();

            if (services.length <= 0) {
                return res.status(404).json("Nincsenek szolgáltatások");
            }
            return res.status(200).json({ services: services });
        } catch (err) {
            return res.status(500).json({ "hiba": err });
        }
    }


module.exports = { getAllServices};