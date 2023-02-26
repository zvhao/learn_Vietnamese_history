const express = require("express")
const cors = require("cors")
const historyRouter = require("./app/routers/history.route")
const ApiError = require("./app/api-error");
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
	res.json({ message: "Chao mung ban den voi tim hieu lich su Viet Nam" })
})

app.use("/api/history", historyRouter)

app.use((req, res, next) => {
	return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
	return res.status(err.statusCode || 500).json({
		message: err.message || "Internal Server Error",
	});
});

module.exports = app