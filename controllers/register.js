const Cadastro = require("../models/register");
const bcrypt = require("bcrypt");
const Usuario = require("../models/user");
const connect = require("../database/connection");

module.exports = (app) => {
	app.get("/register", (req, res) => {
		const user = req.body;
		const query = "SELECT * FROM usuarios WHERE email = ?";
		connect.query(query, user.email, (err, result) => {
			if (err) {
				console.log(err);
				return res.send(500);
			}

			if (result.length < 1) {
				console.log("Nao encontrado");
				return res.send(401);
			}
			bcrypt.compare(
				user.senha,
				result[0].senha,
				(erroBcrypt, resultBcrypt) => {
					if (erroBcrypt) {
						return res.status(500).send({ error: "error" });
					}
					if (resultBcrypt) {
						return res.status(200).send({ mensagem: "usuario logado" });
					} else {
						console.log(user.senha);
						console.log(result[0].senha);
					}

					return res.status(401).send({ mensagem: "Unauthorized" });
				}
			);
		});
	});

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
