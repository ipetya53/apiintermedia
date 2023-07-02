const express = require('express');
const axios = require('axios');
const router = express.Router();

// Ruta GET para obtener datos de la ESP8266
router.get('/datos', async (req, res) => {
  try {
    // Realiza la solicitud a la ESP8266
    const response = await axios.get('http://192.168.68.118/datos');
    
    // Obtiene los datos de la respuesta
    const datos = response.data;

    // Envía los datos como respuesta al cliente
    res.json(datos);
  } catch (error) {
    console.error('Error al obtener los datos de la ESP8266:', error);
    res.status(500).json({ error: 'Error al obtener los datos de la ESP8266' });
  }
});

// Ruta POST para enviar datos a la ESP8266
router.post('/enviar-datos', async (req, res) => {
  try {
    const { datos } = req.body;

    // Realiza la solicitud POST a la ESP8266
    await axios.post('http://192.168.68.118/api/enviar-datos', { datos });

    // Envía una respuesta exitosa
    res.json({ mensaje: 'Datos enviados correctamente a la ESP8266' });
  } catch (error) {
    console.error('Error al enviar los datos a la ESP8266:', error);
    res.status(500).json({ error: 'Error al enviar los datos a la ESP8266' });
  }
});

// Ruta PUT para actualizar datos en la ESP8266
router.put('/actualizar-datos', async (req, res) => {
  try {
    const { nuevosDatos } = req.body;

    // Realiza la solicitud PUT a la ESP8266
    await axios.put('http://192.168.68.118/api/actualizar-datos', { nuevosDatos });

    // Envía una respuesta exitosa
    res.json({ mensaje: 'Datos actualizados correctamente en la ESP8266' });
  } catch (error) {
    console.error('Error al actualizar los datos en la ESP8266:', error);
    res.status(500).json({ error: 'Error al actualizar los datos en la ESP8266' });
  }
});

module.exports = router;
