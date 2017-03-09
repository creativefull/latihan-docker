const express = require('express');
const PORT = 8080 || process.env.PORT;
const app = express();

app.get("/", (req,res,next) => {
	res.send("Hello apps in docker update")
})

app.get("/docker", (req,res,next) => {
	res.send("this docker route")
})

app.listen(PORT, () => {
	console.log("Aplikasi listen di port ", PORT);
})