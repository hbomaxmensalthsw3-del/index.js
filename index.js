const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Online");
});

// CALLBACK DO DISCORD
app.get("/auth/discord/callback", (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.send("Código não encontrado");
    }

    res.send("Auth funcionando 🔥");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor online");
});
