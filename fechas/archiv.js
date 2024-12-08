document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculadoraForm');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fechaPactada = new Date(document.getElementById('fechaPactada').value);
        const fechaReal = new Date(document.getElementById('fechaReal').value);

       
        const diferenciaTiempo = fechaReal.getTime() - fechaPactada.getTime();
        const diasRetraso = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));

        let multa = 0;
        if (diasRetraso > 0) {
            if (diasRetraso <= 3) {
                multa = diasRetraso * 7000;
            } else {
                multa = diasRetraso * 10000 + 6000; // 
            }
        }

        
        resultadoDiv.innerHTML = `
            <h2>Resultado:</h2>
            <p>Días de retraso: ${diasRetraso}</p>
            <p>Multa a pagar: $${multa.toLocaleString()} pesos</p>
        `;
    });
});

