const microfono = document.getElementById('microfono')
const contenedorResultado = document.querySelector('#resultado')
const botonEscuchar = document.getElementById('boton-escuchar')
const botonApagar = document.getElementById('boton-apagar')

botonEscuchar.addEventListener('click', escuchar)
botonApagar.addEventListener('click', apagar)

///////////////////////////////////////////////////////
const foxed = new webkitSpeechRecognition();

// foxed.lang = "es-ES";
foxed.lang = "en";
foxed.continuous = true;

foxed.onresult = (evento) => {
  for (const result of evento.results) {
    contenedorResultado.innerHTML = result[0].transcript;
  }
};

///////////////////////////////////////////////////////
function escuchar() {
  console.log('se empezo a escuchar');

  botonEscuchar.style.display = 'none'
  botonApagar.style.display = 'inline'

  microfono.classList.add('main__estado--activo')

  foxed.start();
}

function apagar() {
  console.log('se dejo de escuchar');

  botonEscuchar.style.display = 'inline'
  botonApagar.style.display = 'none'

  microfono.classList.remove('main__estado--activo')

  // contenedorResultado.innerHTML = 'Resultado';

  foxed.stop();
}