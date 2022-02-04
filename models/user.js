require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User {
	getToken(connection, usuario, res) {
		const query = "SELECT * FROM usuarios WHERE email = ?";

		connection.query(query, [usuario.email], (error, results) => {
			if (error) {
				return res.status(500).send({ error: "error" });
			}
			if (results.length < 1) {
				return res.status(401).send({ mensagem: "Unauthorized" });
			}

			bcrypt.compare(
				usuario.senha,
				results[0].senha,
				(erroBcrypt, resultBcrypt) => {
					if (erroBcrypt) {
						return res.status(500).send({ error: "error" });
					}
					if (resultBcrypt) {
						const accessToken = jwt.sign(
							usuario.email,
							process.env.ACCESS_TOKEN_SECRET
						);
						return res.status(200).json({ acessToken: accessToken });
					}

					return res.status(401).send({ mensagem: "Unauthorized" });
				}
			);
		});
	}

	authenticateToken(usuario, token) {}

	isLogedIn(connection, token) {
		// Verificará se o token gerado é válido
		return true;
	}
}

module.exports = new User();
