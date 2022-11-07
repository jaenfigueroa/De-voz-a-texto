const contenedorResultado = document.querySelector('#resultado')
const boton = document.querySelector('#boton')

boton.addEventListener('click', escuchar)

///////////////////////////////////////////////////////
function escuchar() {
  const foxed = new webkitSpeechRecognition();

  foxed.lang = "es-ES";
  foxed.continuous = true;

  foxed.onresult = (evento) => {
    for (const result of evento.results) {
      contenedorResultado.innerHTML = result[0].transcript;
    }
  };

  foxed.start();
}

