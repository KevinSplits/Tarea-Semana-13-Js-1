function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("horas").innerHTML = horas + ":";
    document.getElementById("minutos").innerHTML = minutos + ":";
    document.getElementById("segundos").innerHTML = segundos;


}
setInterval(actualizarReloj, 1);

function aumentarTL() {
    let parrafo = document.getElementById("parr");
    let fontSize = window.getComputedStyle(parrafo).fontSize;
    let p1 = fontSize.substring(0, fontSize.length - 2);
    let p1Int = parseInt(p1);
    p1Int++;
    parrafo.style.fontSize = p1Int + "px";
}
function disminuirTL() {
    let parrafo = document.getElementById("parr");
    let fontSize = window.getComputedStyle(parrafo).fontSize;
    let p1 = fontSize.substring(0, fontSize.length - 2);
    let p1Int = parseInt(p1);

    if (p1Int > 10) {
        p1Int--;
        parrafo.style.fontSize = p1Int + "px";
    }
}
function cambiarColor() {
    const colores = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const main = document.querySelector("main"); // Seleccionamos <main>
    if (main) {
        main.style.background = colorAleatorio;
    }
}

// Cambiar el fondo de <main> a un gradiente
function colorGradiante() {
    const main = document.querySelector("main"); // Seleccionamos <main>
    if (main) {
        main.style.background = "linear-gradient(to right, #2ecc71, #9b59b6)";
    }
}
// Aumentar el tamaño del texto
function aumentarTexto() {
    const elementos = document.querySelectorAll("#definicion, #aplicaciones");
    elementos.forEach(elemento => {
        const tamañoActual = window.getComputedStyle(elemento).fontSize;
        elemento.style.fontSize = `${parseFloat(tamañoActual) + 2}px`;
    });
}

// Disminuir el tamaño del texto
function disminuirTexto() {
    const elementos = document.querySelectorAll("#definicion, #aplicaciones");
    elementos.forEach(elemento => {
        const tamañoActual = window.getComputedStyle(elemento).fontSize;
        elemento.style.fontSize = `${parseFloat(tamañoActual) - 2}px`;
    });
}

// Agregar negrita al texto
function ponerNegrita() {
    const elementos = document.querySelectorAll("#definicion, #aplicaciones");
    elementos.forEach(elemento => {
        elemento.style.fontWeight = elemento.style.fontWeight === "bold" ? "normal" : "bold";
    });
}

// Agregar cursiva al texto
function ponerCursiva() {
    const elementos = document.querySelectorAll("#definicion, #aplicaciones");
    elementos.forEach(elemento => {
        elemento.style.fontStyle = elemento.style.fontStyle === "italic" ? "normal" : "italic";
    });
}
