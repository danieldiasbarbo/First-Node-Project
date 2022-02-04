const Usuario = require("../models/user");
const connect = require("../database/connection");

module.exports = (app) => {
	app.post("/login", (req, res) => {
		Usuario.getToken(connect, req.body, res);
	});
};
