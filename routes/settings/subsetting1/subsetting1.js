const express = require("express")
const router = express.Router()

const options = "SUB1"

router.get("/", (req, res) => res.send(options))
router.get("/marianek", (req, res) => res.send("testone"))

module.exports = router