const connection = require("../database/connection");

class Cadastro {
	adiciona(cadastro, res) {
		const sql = "INSERT INTO Usuarios SET ?";

		connection.query(sql, cadastro, (erro, resultado) => {
			if (erro) {
				console.log("falha no cadastro");
				console.log(erro);

				res.status(400).json(erro);
			} else {
				res.status(201).json(resultado);
			}
		});
	}
}

module.exports = new Cadastro();
