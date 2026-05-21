require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Servidor online 🔥");
});

app.get("/auth/discord/callback", (req, res) => {
    res.send("OAuth funcionando 🔥");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Servidor online");
});
