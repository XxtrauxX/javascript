document.addEventListener('DOMContentLoaded', () => {
    const entradaBusqueda = document.getElementById('entradaBusqueda');
    const botonBuscar = document.getElementById('botonBuscar');
    const divResultado = document.getElementById('resultado');

    botonBuscar.addEventListener('click', realizarBusqueda);
    entradaBusqueda.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') realizarBusqueda();
    });

    async function realizarBusqueda() {
        const consulta = entradaBusqueda.value.trim();
        if (!consulta) return;

        try {
            const respuestaDepartamento = await fetch(`https://api-colombia.com/api/v1/Department/name/${consulta}`);
            const datosDepartamento = await respuestaDepartamento.json();

            if (datosDepartamento.length > 0) {
                mostrarInfoDepartamento(datosDepartamento[0]);
            } else {
                const respuestaMunicipio = await fetch(`https://api-colombia.com/api/v1/City/name/${consulta}`);
                const datosMunicipio = await respuestaMunicipio.json();

                if (datosMunicipio.length > 0) {
                    mostrarInfoMunicipio(datosMunicipio[0]);
                } else {
                    divResultado.innerHTML = '<p class="text-red-500">No se encontró información para la búsqueda realizada.</p>';
                }
            }
        } catch (error) {
            console.error('Error:', error);
            divResultado.innerHTML = '<p class="text-red-500">Ocurrió un error al buscar la información.</p>';
        }
    }

    async function mostrarInfoDepartamento(departamento) {
        const respuestaMunicipios = await fetch(`https://api-colombia.com/api/v1/Department/${departamento.id}/cities`);
        const datosMunicipios = await respuestaMunicipios.json();

        let html = `
            <h2 class="text-xl font-bold mb-2">${departamento.name}</h2>
            <p class="mb-4">Población total: ${departamento.population}</p>
            <h3 class="text-lg font-semibold mb-2">Municipios:</h3>
            <ul class="list-disc pl-5">
        `;

        datosMunicipios.forEach(municipio => {
            html += `<li>${municipio.name}: ${municipio.population}</li>`;
        });

        html += '</ul>';
        divResultado.innerHTML = html;
    }

    function mostrarInfoMunicipio(municipio) {
        divResultado.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${municipio.name}</h2>
            <p>Población: ${municipio.population}</p>
            <p>Departamento: ${municipio.department.name}</p>
        `;
    }
});