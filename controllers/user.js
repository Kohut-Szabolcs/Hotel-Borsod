const User = require("../models/felhasznalo");
const bcrypt = require("bcrypt");

const register = 
async (req, res) => {
        try {
            const {TeljesNev, Telefonszam, SzuletesiDatum, SzuletesiHely, Email, Jelszo} = req.body;

            if (!TeljesNev || !Telefonszam || !SzuletesiDatum || !SzuletesiHely|| !Email || !Jelszo) {
                return res.status(400).json("Hiányzó adatok");
            }

            const existingUser  = await User.findOne({ where: { Email } });
            if (existingUser ) {
                return res.status(400).json("Ez az e-mail cím már regisztrálva van");
            }

            const hashedJelszo = await bcrypt.hash(Jelszo, 10);

            const newUser  = await User.create({
                TeljesNév:TeljesNev,
                Telefonszám:Telefonszam,
                SzületésiDátum:SzuletesiDatum,
                SzületésiHely:SzuletesiHely,
                Email:Email,
                Jelszó: hashedJelszo
            });

            return res.status(201).json("Sikeres regisztráció");
        } catch (err) {
            console.log(err);
            return res.status(500).json({"hiba": err});
        }
};

const login = 
async (req, res) => {
        try {
            const {Email, Jelszo} = req.body;

            if (!Email || !Jelszo) {
                return res.status(400).json("Hiányzó adatok");
            }

            const user = await User.findOne({ where: { Email:Email } });
            if (!user) {
                return res.status(400).json("Hibás e-mail vagy jelszó");
            }

            const isJelszoValid = await bcrypt.compare(Jelszo, user.Jelszó);
            if (!isJelszoValid) {
                return res.status(400).json("Hibás e-mail vagy jelszó");
            }

            return res.status(200).json("Sikeres bejelentkezés");
        } catch (err) {
            return res.status(500).json({"hiba": err});
        }
    }

module.exports = {
    register,
    login
};