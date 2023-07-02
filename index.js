const express = require('express');
const app = express();

// Importar módulos y bibliotecas necesarias
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');

// Configurar middlewares
app.use(bodyParser.json());

// Usar las rutas
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
