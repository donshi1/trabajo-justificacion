// 1. Importar las "piezas" que instalamos
const express = require('express');
const cors = require('cors');

// 2. Crear nuestra aplicación "servidor"
const app = express();

// 3. Configurar el "portero" (CORS)
// Esto le dice a nuestro servidor que permita peticiones desde cualquier origen (nuestro frontend)
app.use(cors());

// 4. Definir el "puerto" donde escuchará nuestro servidor
// process.env.PORT es para cuando lo despleguemos, 3000 es para nuestro "garaje" (local)
const PORT = process.env.PORT || 3000;

// 5. Crear nuestra primera "ruta" o "endpoint"
// Esta es la dirección que el frontend va a llamar
// Cuando alguien visite la ruta raíz "/", le enviaremos un mensaje
app.get('/', (req, res) => {
  // Enviamos una respuesta en formato JSON
  res.json({
    mensaje: "¡Hola! Este es tu mensaje desde el backend 👋"
  });
});

// 6. "Encender el motor"
// Le decimos al servidor que empiece a escuchar peticiones en el puerto que definimos
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});