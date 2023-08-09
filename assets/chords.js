const acordesMayores = ["Do M", "Re M", "Mi M", "Fa M", "Sol M", "La M", "Si M"];

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    actualizarAcorde(); // Generar el acorde al cargar la página

    setInterval(function() {
        actualizarAcorde(); // Generar un nuevo acorde cada 10 segundos
    }, generarIntervalo()); // 10000 milisegundos = 10 segundos
});

function generarAcordeAleatorio() {
    const indice = Math.floor(Math.random() * acordesMayores.length);
    return acordesMayores[indice];
}

function actualizarAcorde() {
    const acordeGenerado = generarAcordeAleatorio();
    $('#acorde').text(acordeGenerado);
}

function generarIntervalo() {
    return Math.floor(Math.random() * 5000) + 5000; // Entre 5 y 10 segundos en milisegundos
}