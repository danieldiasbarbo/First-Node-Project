class Tables {
	init(connection) {
		this.connection = connection;

		this.cadastrarCliente();
	}

	cadastrarCliente() {
		const sql =
			"CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT, email varchar(50) NOT NULL, senha varchar(64) NOT NULL, tipo varchar(20) )";

		this.connection.querry(sql, (error) => {
			if (error) {
				console.log("error");
			} else {
				console.log("tabela criada com sucesso");
			}
		});
	}
}
