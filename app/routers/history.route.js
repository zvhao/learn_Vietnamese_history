const express = require("express")
const history = require("../controllers/history.controller")

const router = express.Router()

router.route("/")
	.get(history.findAll)
	.post(history.create)
	.delete(history.deleteAll)

router.route("/favorite")
	.get(history.findAllFavorite)

router.route("/:id")
	.get(history.findOne)
	.put(history.update)
	.delete(history.delete)

	module.exports = router