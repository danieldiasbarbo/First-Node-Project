const bcrypt = require("bcrypt");
const Usuario = require("../models/user");
const connect = require("../database/connection");

module.exports = (app) => {
	app.get("/login", (req, res) => {
		Usuario.getToken(connect, req.body, res);
	});
};
