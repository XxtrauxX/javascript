const botonOne = document.querySelector('.boton1')

const figth = document.querySelector('.boton2')

const contpokemon = document.querySelector('#pokemon')

const cpupoke = document.querySelector('#pokecpu')



botonOne.addEventListener('click', () => {


    const numeroale = Math.random()
    const Multiplicar = numeroale * 100;
    const redondear = Math.floor(Multiplicar)
    const resultado = redondear + 1


    fetch(`https://pokeapi.co/api/v2/pokemon/${resultado}`)
        .then((res) => res.json())
        .then((datos) => {
            console.log(datos)
            const nuevodiv = document.createElement('div')
            nuevodiv.innerHTML += `
        
           <img class="imgpoke" src="${datos.sprites.front_default}">
           <br>
           <br>
           <h3 class="text"> Nombre: ----> - ${datos.name} -</h3>
           <h3 class="text"> HP:---->  ${datos.stats[0].base_stat}</h3>
           <h3 class="text"> Ataque:---->  ${datos.stats[1].base_stat}</h3>
           <h3 class="text"> Defensa:---->  ${datos.stats[2].base_stat} </h3>
           <h3 class="text"> Velocidad:---->  ${datos.stats[5].base_stat} </h3>
            `;


            if (contpokemon.childElementCount === 0) {

                contpokemon.append(nuevodiv)
            } else {

                contpokemon.replaceChildren(nuevodiv)
            }




        })


})


figth.addEventListener('click', () => {
    
    const numeroale = Math.random()
    const Multiplicar = numeroale * 100;
    const redondear = Math.floor(Multiplicar)
    const resultado = redondear + 1

    fetch(`https://pokeapi.co/api/v2/pokemon/${resultado}`)
        .then((res) => res.json())
        .then((datos) => {

            const divcpu = document.createElement('div')
            divcpu.innerHTML = `
        
            
               <img class="imgpoke" src="${datos.sprites.front_default}">
               <br>
               <br>
               <h3 class="text"> Nombre: ----> - ${datos.name} -</h3>
               <h3 class="text"> HP:---->  ${datos.stats[0].base_stat}</h3>
               <h3 class="text"> Ataque:---->  ${datos.stats[1].base_stat}</h3>
               <h3 class="text"> Defensa:---->  ${datos.stats[2].base_stat} </h3>
               <h3 class="text"> Velocidad:---->  ${datos.stats[5].base_stat} </h3>
                `;


            //cpupoke.append(divcpu)

            if (cpupoke.childElementCount === 0) {
                cpupoke.append(divcpu)
            } else {

                cpupoke.replaceChildren(divcpu)
            }
        })
})


// numero ramdom

function numrandom() {

    const numeroale = Math.random()
    const Multiplicar = numeroale * 100;
    const redondear = Math.floor(Multiplicar)
    const resultado = redondear + 1

    return resultado
}