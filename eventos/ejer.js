
/*
const botonUNO = document.getElementById("boton1")
const botonDOS = document.getElementById("boton2")



function contadorbot () {
      event1 = document.querySelector("#boton1")
     enlace.addEventListener("click", (event) => {
        console.log("vamos bien")
        
    });

}

*/




    const aumentar = document.getElementById("aumentar");
    const disminuir = document.getElementById("disminuir");
    const contador = document.getElementById("contador");

    let i = 0;
    function sum () {
        i++;
        contador.textContent = `Contador: ${i}`;
    }

    function res () {
        i--;
        contador.textContent = `Contador: ${i}`;
    }

    aumentar.addEventListener("click", sum);
    disminuir.addEventListener("click", res);