const express = require("express")
const cors  = require("cors")
const historyRouter = require("./app/routers/history.route")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
	res.json({ message: "Chao mung ban den voi tim hieu lich su Viet Nam"})
})

app.use("/api/history", historyRouter)

module.exports = app