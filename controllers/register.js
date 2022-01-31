module.exports = (app) => {
	app.get("/register", (req, res) => {
		res.send("Rota de cadastro, metodo GET");
	});

	app.post("/register", (req, res) => {
		const cadastro = req.body;
	});
};
