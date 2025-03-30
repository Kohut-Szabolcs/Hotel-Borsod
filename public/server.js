const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = 7000;
const app = express();
const conn = require("./conn");
const Room = require("./models/szoba");
const Roomcont = require("./controllers/room");
const Szolgaltatas = require("./models/szolgaltatas");
const cron = require('node-cron');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoute = require("./routes/user");
const roomRoute = require("./routes/room");
const szolgRoute = require("./routes/szolg");

app.use("/user", userRoute);
app.use("/room", roomRoute);
app.use("/szolg", szolgRoute);


async function seedData() {
    await conn.sync({force: true});
    console.log("Adatok beszúrva");
}

//seedData();

const { releaseExpiredBookings } = require('./services/foglalasService');

cron.schedule('0 0 * * *', () => {
    console.log('Lejárati foglalások ellenőrzése...');
    releaseExpiredBookings();
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log("A szerver fut");
    } else {
        console.log("A szerver indítása közben hiba: " + err);
    }
});