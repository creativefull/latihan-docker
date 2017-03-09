const express = require('express');
const PORT = 8080 || process.env.PORT;
const app = express();

app.get("/", (req,res,next) => {
	res.send("Hello apps in docker update")
})

app.listen(PORT, () => {
	console.log("Aplikasi listen di port ", PORT);
})