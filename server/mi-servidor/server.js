const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta para recibir la elección del usuario
app.post("/guardar-eleccion", (req, res) => {
    const { eleccion } = req.body;

    // Guardar la elección en un archivo JSON
    const data = { eleccion, fecha: new Date() };
    fs.writeFileSync(path.join(__dirname, "eleccion.json"), JSON.stringify(data));

    res.send("Elección guardada");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});