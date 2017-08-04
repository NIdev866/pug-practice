const express = require("express")
const router = express.Router()

const options = "SUB2"

router.get("/", (req, res) => res.send(options))
router.get("/marianek", (req, res) => res.send("test2"))

module.exports = router