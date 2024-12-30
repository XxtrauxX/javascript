const botonOne = document.querySelector('.boton1')

const figth = document.querySelector('.boton2')

const contpokemon = document.querySelector('#pokemon')



botonOne.addEventListener('click', () => {

    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res)=> res.json())
    .then((datos) => {
        console.log(datos)
        const nuevodiv = document.createElement('div')
        nuevodiv.innerHTML = `
        
           <img class="imgpoke" src="${datos.sprites.front_default}">
           <br>
           <br>
           <h3 class="text"> Nombre: ----> - ${datos.name} -</h3>
           <h3 class="text"> HP:---->  ${datos.stats[0].base_stat}</h3>
           <h3 class="text"> Ataque:---->  ${datos.stats[1].base_stat}</h3>
           <h3 class="text"> Defensa:---->  ${datos.stats[2].base_stat} </h3>
           <h3 class="text"> Velocidad:---->  ${datos.stats[5].base_stat} </h3>
            `;


        contpokemon.append(nuevodiv)

    })


})


figth.addEventListener('click', () => {

    alert('vamos con todo perrin')
})