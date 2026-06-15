const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get('nombre');
const email = parametros.get('email');
const edad = parametros.get('edad');
const pais = parametros.get('pais');

if (nombre && email) {
    document.getElementById('res-nombre').textContent = nombre;
    document.getElementById('res-email').textContent = email;
    document.getElementById('res-edad').textContent = edad;
    document.getElementById('res-pais').textContent = pais;
} else {
    document.querySelector('.formulario').innerHTML = '<h2 style="color: rgb(255, 211, 154);">No se recibieron datos</h2><br><a href="index.html"><button type="button" style="margin-left:0;">Volver</button></a>';
}