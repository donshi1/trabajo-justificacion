// 1. "Escuchar" cuando el documento HTML esté listo
document.addEventListener('DOMContentLoaded', () => {

  // 2. Encontrar las piezas del HTML que necesitamos
  const boton = document.getElementById('miBoton');
  const respuestaP = document.getElementById('respuesta');

  // 3. Definir la dirección de nuestro "motor" (backend)
  const urlBackend = 'http://localhost:3000';

  // 4. Agregar un "escuchador de clics" al botón
  boton.addEventListener('click', () => {
    
    // 5. Cuando hagan clic, ¡ir a buscar los datos! (Usando fetch)
    console.log('Haciendo petición a:', urlBackend);
    respuestaP.textContent = 'Buscando...';

    fetch(urlBackend)
      .then(response => {
        // La respuesta del servidor (en formato JSON)
        return response.json();
      })
      .then(data => {
        // ¡Ya tenemos los datos! Los mostramos en la página
        console.log('Respuesta recibida:', data);
        respuestaP.textContent = data.mensaje; // data.mensaje viene del JSON del backend
      })
      .catch(error => {
        // Manejar cualquier error que ocurra
        console.error('¡Hubo un error!', error);
        respuestaP.textContent = 'Error al conectar con el backend.';
      });
  });
});