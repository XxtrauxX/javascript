

function capturar() {
    let eurores= document.getElementById("euro").value;
    

    
    
    
}



fetch("https://cdn.dinero.today/api/latest.json")
.then((res) => res.json())
.then((datos) => {

    console.log(datos)

   

})