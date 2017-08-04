const express = require("express")
const router = express.Router()

const options = ["marrh", function(){return "hehe"}, new Date()]

const subsetting1 = require("./subsetting1/subsetting1")
const subsetting2 = require("./subsetting2/subsetting2")

router.use("/subsetting1", subsetting1)
router.use("/subsetting2", subsetting2)

router.get("/", (req, res) => res.send(options))

module.exports = router