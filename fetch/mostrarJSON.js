export default function mostrarJSON(elemHTML) {

    console.log("vamos bien")
    fetch("datos.json")
    .then(respuesta => respuesta.json())
    .then((datos) => {
        console.table(datos);
        dibujarfilas(elemHTML, datos);
    })
    .catch((error) =>
    console.error("se ha consumido todo el JSON", error.message)
    )
    .finally(() => console.log("se ha termiando el JSON"))
}



function dibujarfilas(elemHTML, datos) {
    let tabla = "";
    for(let dato of datos) {
        tabla+= `
        <tr>
            <td>${dato.Nombre}</td>
            <td>${dato.Team}</td>
            <td class="valedad">${dato.Edad}</td>
            <td class="tdimg">
                     <img src=${dato.Sexo === "F" ? "mujer.png" : 
            "hombre.png"} class="imgsexo">
            </td>
            
        </tr>

        `;

        
    }
    elemHTML.innerHTML = tabla;
}