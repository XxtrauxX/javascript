document.addEventListener('DOMContentLoaded', () => {
    const tareaForm = document.getElementById('tareaForm');
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const listaTareas = document.getElementById('listaTareas');

    // Cargar tareas existentes
    cargarTareas();

    tareaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textoTarea = nuevaTareaInput.value.trim();
        if (textoTarea) {
            agregarTarea(textoTarea);
            nuevaTareaInput.value = '';
        }
    });

    async function cargarTareas() {
        try {
            const respuesta = await fetch('http://localhost:3000/tareas');
            const tareas = await respuesta.json();
            tareas.forEach(tarea => renderizarTarea(tarea));
        } catch (error) {
            console.error('Error al cargar tareas:', error);
        }
    }

    async function agregarTarea(texto) {
        try {
            const respuesta = await fetch('http://localhost:3000/tareas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ texto, completada: false })
            });
            const nuevaTarea = await respuesta.json();
            renderizarTarea(nuevaTarea);
        } catch (error) {
            console.error('Error al agregar tarea:', error);
        }
    }

    async function actualizarTarea(id, completada) {
        try {
            await fetch(`http://localhost:3000/tareas/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completada })
            });
        } catch (error) {
            console.error('Error al actualizar tarea:', error);
        }
    }

    async function eliminarTarea(id) {
        try {
            await fetch(`http://localhost:3000/tareas/${id}`, { method: 'DELETE' });
        } catch (error) {
            console.error('Error al eliminar tarea:', error);
        }
    }

    function renderizarTarea(tarea) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-2 border-b';
        li.innerHTML = `
            <span class="${tarea.completada ? 'tarea-completada' : ''}">${tarea.texto}</span>
            <div>
                <button class="completar px-2 py-1 bg-green-500 text-white rounded mr-2">Completar</button>
                <button class="eliminar px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
            </div>
        `;

        li.querySelector('.completar').addEventListener('click', async () => {
            tarea.completada = !tarea.completada;
            await actualizarTarea(tarea.id, tarea.completada);
            li.querySelector('span').classList.toggle('tarea-completada');
        });

        li.querySelector('.eliminar').addEventListener('click', async () => {
            await eliminarTarea(tarea.id);
            li.remove();
        });

        listaTareas.appendChild(li);
    }
});