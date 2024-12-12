import mostrartexto from './mostrartexto.js'
import mostrarJSON from './mostrarJSON.js'

// accion al botón mostrar texto 
const btnmostrarTXT = document.getElementById("mostrartxt");
const areaTXT = document.getElementById("contenidotexto");
btnmostrarTXT.addEventListener("click", e => {
    mostrartexto(areaTXT);
})



// accion al botón mostrar JSON EN LA TABLA


const btnmostrarJSON = document.getElementById("mostrarjson");
const areaJSON = document.getElementById("datostabla");
btnmostrarJSON.addEventListener("click", e => {
    mostrarJSON(areaJSON);
})