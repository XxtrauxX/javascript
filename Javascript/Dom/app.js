const wrapper = document.querySelector('#wrapper')
const title = document.querySelector('.title')
const link = document.querySelector('.link.bold')
const inputNumber = document.querySelector('[type="number"]')


const textoUsuaro = prompt("ingresa tu nombre")

title.textContent = `hola estimado ${textoUsuaro}`;




console.dir(wrapper)