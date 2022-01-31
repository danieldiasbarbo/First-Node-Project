class Tables {
	init(connection) {
		this.connection = connection;

		this.criarCadastro();
	}

	criarCadastro() {
		console.log("tentei criar tabela");
		const sql =
			"CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, email varchar(100) NOT NULL, senha varchar(100) NOT NULL, tipo varchar(20) NOT NULL)";

		this.connection.query(sql, (error) => {
			if (error) {
				console.log("error");
			} else {
				console.log("tabela criada com sucesso");
			}
		});
	}
}

module.exports = new Tables();
