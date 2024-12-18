const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeuser = document.querySelector('[data-id="name"]');


const section = document.querySelector('.section');
const buttonshow =document.querySelector('[data-id="button-show"]');
const buttonhide = document.querySelector('[data-id="button-hide"]');


function controladorEvento () {

    const nombre = prompt('¿cual es tu nombre');
    alert(`tu nombre es ${nombre}`)

}
// opcion alternativa
//buttonshow.onclick = controladorEvento;


//opcion recomendada


buttonshow.addEventListener('click', controladorEvento)
input.addEventListener('change', function(e) {
    changeuser.textContent = e.target.value
})

// ver en donde se hizo click
/*
wrapper.addEventListener('click', function(e){
    console.log(e.target);
})

*/

// quitar el comportamiento por defecto
// event.preventDefault();


// cambiar el fondo donde le demos click en wrapper
wrapper.addEventListener('click', function(e){
 e.target.style.backgroundColor = "hotpink"
})