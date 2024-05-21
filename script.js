const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll(`.app__card-button`)
const inputMusica = document.querySelector('#alternar-musica')
const musica = new Audio('./sonidos/luna-rise-part-one.mp3')

inputMusica.addEventListener('change', () =>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

function cambiarContexto(contexto){

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
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');
    
})

botonEnfoque.addEventListener('click', () =>{
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
})

botonLargo.addEventListener('click',() =>{
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
})













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

