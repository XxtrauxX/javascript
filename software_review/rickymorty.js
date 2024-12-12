
const opstion = {

    method: "GET"

}



fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {
    console.table(data)
})

