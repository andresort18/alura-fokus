const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll(`.app__card-button`);
const inputMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const sonidoPlay = new Audio('/sonidos/play.wav');
const sonidoPause = new Audio('/sonidos/pause.mp3');
const sonidoBeep = new Audio ('/sonidos/beep.mp3');
const botonIniciarPausaar = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span')
const iconoPausaPlay = document.querySelector('.app__card-primary-butto-icon');
const tiempoEnPantalla = document.querySelector('#timer')


let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

inputMusica.addEventListener('change', () =>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

function cambiarContexto(contexto){

    mostrarTiempo();
    botones.forEach(function(contexto) {
        contexto.classList.remove('active'); 
    })

    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src',`./imagenes/${contexto}.png`);
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
            break;

        case "descanso-corto":
            titulo.innerHTML = `
                Que tal tomar un respiro?
                <strong class="app__title-strong">¡haz una Pausa Corta!</strong>
            `
            break;
        case "descanso-largo":
            titulo.innerHTML = `
                Hora de volver a la superficie
                <strong class="app__title-strong">haz una pausa Larga.</strong>
                `   
            default:
            break;
    }
}

botonCorto.addEventListener('click', () =>{
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');
    
})

botonEnfoque.addEventListener('click', () =>{
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
})

botonLargo.addEventListener('click',() =>{
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
})

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        if(sonidoBeep.paused){
            sonidoBeep.play()
        } 
        alert('Tiempo Finalizado')
        reiniciar();
        return;
    }
    textoIniciarPausar.textContent = "pausar";
    tiempoTranscurridoEnSegundos -= 1;
    mostrarTiempo()
    console.log("temporizador:" + tiempoTranscurridoEnSegundos);
}

botonIniciarPausaar.addEventListener('click', iniciarPausar)

function iniciarPausar(){
    if (idIntervalo){
        reiniciar();
        return;
    }
    if(sonidoPlay.paused){
        sonidoPlay.play()
    }
    iconoPausaPlay.setAttribute('src','./imagenes/pause.png');
    idIntervalo = setInterval(cuentaRegresiva,1000);
}

function reiniciar(){
    clearInterval(idIntervalo);
    idIntervalo = null;
    if(sonidoPause.paused){
        sonidoPause.play()
    } 
    textoIniciarPausar.textContent = "Comenzar";
    iconoPausaPlay.setAttribute('src','./imagenes/play_arrow.png');
}

function mostrarTiempo(){
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
    const timepoFormateado = tiempo.toLocaleTimeString('es-MX',{minute:'2-digit', second:'2-digit'})
    tiempoEnPantalla.innerHTML = `${timepoFormateado}`;
}

mostrarTiempo();












//// HTML
// <form id="miFormulario">
//     <input type="text" name="nombre" />
//     <input type="submit" value="Enviar" />
// </form>

//const miFormulario = document.getElementById("miFormulario");
//miFormulario.addEventListener("submit", function(event) {
  //event.preventDefault(); // Evita el envío estándar del formulario
  //const nombre = event.target.elements.nombre.value;
  //alert(`Se ha enviado el formulario con el nombre: ${nombre}`);
//});

