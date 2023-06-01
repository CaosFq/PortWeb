const express = require('express');
const app = express();
const app = require('./src/app');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/contacto', (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const mensaje = req.body.mensaje;

  // Debo agregar la logica para que los correos se alamacenen en una base de datos

  res.send('¡Formulario enviado!');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
