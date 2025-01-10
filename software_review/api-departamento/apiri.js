const boton = document.querySelector('#boton1')
const form = document.querySelector('.form')
const input = form.querySelector('.input')
const contenedor = document.querySelector('#contenedor')

resul = input.value



form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const nuevoDiv = document.createElement('div')
    nuevoDiv.classList.add('prueba')
    const resulInput = input.value;
    console.log(resulInput)

    fetch(`https://api-colombia.com/api/v1/Department/name/${resulInput}`)
        .then((res) => res.json())
        .then((datos) => {

            console.log(datos)
            const nuevoDiv = document.createElement('div')
            nuevoDiv.classList.add('prueba')
            const resulInput = input.value;
            console.log(resulInput)


            nuevoDiv.innerHTML = `
    
         <h4>${resulInput} : Población:${datos.id}</h4>`;


            contenedor.append(nuevoDiv);
        })



}