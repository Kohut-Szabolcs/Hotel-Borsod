const express = require("express");
const roomController = require("../controllers/room");
const router = express.Router();

router.post("/addBooking", roomController.createBooking);

router.get("/getRooms", roomController.getAllRooms);

router.get("/getAvaRooms", roomController.getAvailableRooms)

router.delete("/delfogl", roomController.cancelBooking);

module.exports = router;