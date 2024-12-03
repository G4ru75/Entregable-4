// Función para validar el formulario antes de enviarlo
document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Obtiene los valores de cada campo del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Verifica que todos los campos estén completos
    if (nombre === '' || email === '') {
        alert('Por favor completa todos los campos.'); // Muestra una alerta si algún campo está vacío
        event.preventDefault(); // Evita el envío del formulario
    } else {
        alert('Registro exitoso'); // Muestra una alerta de éxito si todos los campos están completos
    }
});

document.getElementById('revealButton').addEventListener('click', function() { 
    document.getElementById('overlay').style.display = 'none'; 
    document.getElementById('content').classList.remove('hidden'); 
    this.style.display = 'none'; 
});

function MensajeBienvenida(){
    document.getElementById('Bienvenida').style.display = 'none'; 
    document.getElementById('Contenido').style.display = 'block'; 
    alert('Ha entrado al bloc personal de Dairo Duran'); 
}