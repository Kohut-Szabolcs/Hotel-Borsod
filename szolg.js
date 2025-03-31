const express = require("express");
const router = express.Router();
const szolgaltatasController = require("../controllers/szolg");

router.get("/getSzolg", szolgaltatasController.getAllServices);

module.exports = router;