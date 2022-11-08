const resultado = document.getElementById('resultado')
const microfono = document.getElementById('microfono')
const checkbox = document.getElementById('checkbox')

///////////////////////////////////////////////////////////////////////////
const foxed = new webkitSpeechRecognition();

foxed.lang = "es-ES";
foxed.continuous = true;

foxed.onresult = (evento) => {
  for (const texto of evento.results) {
    resultado.innerHTML = texto[0].transcript;
  }
};

///////////////////////////////////////////////////////////////////////////
function escuchar() {
  // console.log('se empezo a escuchar');

  microfono.classList.add('microfono__contenedor--activo')
  foxed.start();
}

function dejarDeEscuchar() {
  // console.log('se dejo de escuchar');

  microfono.classList.remove('microfono__contenedor--activo')
  foxed.stop();
}

///////////////////////////////////////////////////////////////////////////
const selectorIdiomas = document.getElementById('selectorIdiomas')

selectorIdiomas.addEventListener('change', () => {
  // console.log('se cambio de idioma');

  dejarDeEscuchar()
  checkbox.checked = false

  if (selectorIdiomas.value === 'Español') {
    foxed.lang = "es-ES";
  } else {
    foxed.lang = "en";
  }

  foxed.continuous = true;
})

//////////////////////////////////////////
checkbox.addEventListener('change', () => {
  // console.log('se activo/desactivo el microfono, valor: ', checkbox.checked);

  if (checkbox.checked) {
    escuchar()
  } else {
    dejarDeEscuchar()
  }
})