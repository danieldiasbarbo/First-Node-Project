const customExpress = require("./config/customExpress");
const connection = require("./database/connection");
const Tables = require("./database/tables");

connection.connect((error) => {
	if (error) {
		console.log("erro ao conectar");
		console.log(error);
	} else {
		console.log("Conexão com o database realizado");

		Tables.init(connection);
		const app = customExpress();
		app.listen(3000, () => console.log("Servidor aberto na porta 3000"));
	}
});
