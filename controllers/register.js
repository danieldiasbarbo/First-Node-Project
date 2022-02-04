const Cadastro = require("../models/register");
const bcrypt = require("bcrypt");

module.exports = (app) => {
	app.post("/register", (req, res) => {
		const cadastro = req.body;

		bcrypt.hash(cadastro.senha, 10, (errBbrypt, hash) => {
			if (errBbrypt) {
				return res.status(500).send({ error: errBbrypt });
			} else {
				cadastro.senha = hash;
				Cadastro.adiciona(cadastro, res);
			}
		});
	});
};
