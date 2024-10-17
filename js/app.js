document.addEventListener('DOMContentLoaded', function () {
    var imagen = document.querySelector('#profile-picture img');
  
    function mostrarMensaje() {
      alert('Hola! 👋, porque, no somos amigos aún :p?');
    }
  
    imagen.addEventListener('dblclick', mostrarMensaje);
  });