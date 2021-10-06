const express = require('express');
const router = require('./api/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

///////////// Request
// Verbos HTTP
// GET    -> obtener
// POST   -> crear
// PUT    -> reemplazar
// PATCH  -> modifica
// DELETE -> borra


///////////// Response
// Response codes HTTP
// 2xx OK
// 4xx Error de request
// 5xx Error de server



app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
