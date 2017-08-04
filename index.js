const express = require("express")
const app = express()

const about = require("./routes/about")
const settings = require("./routes/settings/settings")

app.use("/about", about)
app.use("/settings", settings)


app.get("/", (req, res) => res.send("HOMEEEE"))

app.listen(3000, () => console.log("listening on port 3000"))