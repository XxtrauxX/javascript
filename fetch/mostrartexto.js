export default function mostrartexto(elemHTML) {
    console.log("funcion mostrar texto");
    fetch("datos.csv")
        .then(Response => Response.text())
        .then(data => {
            console.table(data);
            elemHTML.innerHTML = data;
        })
        .catch(error =>
            console.error("error en la petición del archivo\n",error.message)
            
            
        )
        .finally ( () => 
        console.log("HA terminado el consumo del API por parte del FETCH")

        )



}