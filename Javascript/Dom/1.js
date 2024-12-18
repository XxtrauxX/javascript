const body = document.body.childNodes;
// retorna primer nodo html const body = document.body.firstElementChild

const div = wrapper.children[1];


console.log(div.previousElementSibling)

const h1 = div.previousElementSibling;

h1.textContent= " ESTO ES UNA PRUEBA PERROS"


const anchor = div.children[0];


// poniendo un evento en un contenedor

/*
anchor.addEventListener('click', function(){
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "white";
})
*/
 // ver el contenedor padre 

 /*
console.log(anchor.parentNode)

*/


