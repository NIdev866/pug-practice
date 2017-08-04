const express = require("express")
const router = express.Router()

const navbar = {
  marian: "janek", 
  pendh: "nah"
}

router.get("/", (req, res) => res.send(navbar))

module.exports = router