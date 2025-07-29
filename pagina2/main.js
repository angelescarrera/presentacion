fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor-vinos');

    data.vinos.forEach(vino => {
      const divVino = document.createElement('div');
      divVino.classList.add('vino');

      divVino.innerHTML = `
        <img src="${vino.img}" alt="${vino.name}">
        <h2>${vino.name}</h2>
        <p>${vino.descripcion}</p>
        <span class="precio">$${vino.precio.toLocaleString()}</span>
        <button class="btn-carrito">Agregar al carrito</button>
      `;

      contenedor.appendChild(divVino);
    });
  })
  .catch(error => {
    console.error('Error al cargar los vinos:', error);
  });

window.addEventListener('load', function () {
  const nombre = prompt("¡Bienvenido/a! ¿Cuál es tu nombre?");
  if (nombre) {
    alert(`¡Hola ${nombre}! Gracias por visitar Dos Vinos 🍷`);
  }
});

