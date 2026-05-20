const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Online");
});

app.get("/callback", (req, res) => {
    res.send("OAuth funcionando");
});

app.listen(3000, () => {
    console.log("Servidor online");
});
