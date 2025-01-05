const button = document.querySelector('.button')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const listContainer = document.querySelector('.list-container')


form.addEventListener('submit', handleSubmit)

mensajes()

function mensajes () {


    const h3= document.createElement('h3');
    h3.textContent= listContainer.firstElementChild ? 'tareas por hacer' : 'no hay tareas aun'

    listContainer.before(h3)
}

function handleSubmit(e) {

    e.preventDefault();

    const inputValue = input.value;


    console.log(input.value)


    createTask(inputValue);

    this.reset()
}


function createTask (value) {

    const newLi = document.createElement('li');
    newLi.textContent = value;
    console.log(newLi)

    listContainer.appendChild(newLi)

    addeventos(newLi)

}


function addeventos (e) {

        e.addEventListener('dblclick', function() {

            e.remove()
        })

}