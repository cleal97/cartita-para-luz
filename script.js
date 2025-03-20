function abrirCarta() {
    document.getElementById("carta").style.display = "block";
    document.querySelector(".sobre").style.display = "none";
}

function enviarEleccion(eleccion) {
    fetch("http://localhost:3000/guardar-eleccion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ eleccion }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

function respuestaSi() {
    alert("¡Gracias por decir que sí! Te amo mas de lo que las propias palabras puedan expresar, en serio... Sos el amor de mi vida por siempre y para siempre. 💖");
    enviarEleccion("Sí"); // Enviar elección al servidor
}

function moverBoton() {
    const btnNo = document.getElementById("btnNo");
    const maxX = window.innerWidth - btnNo.offsetWidth; // Límite horizontal
    const maxY = window.innerHeight - btnNo.offsetHeight; // Límite vertical

    // Cambiar a posición fija y mover el botón
    btnNo.style.position = "fixed";
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Generar corazones de fondo
function crearCorazones() {
    const fondoCorazones = document.getElementById("fondo-corazones");
    const numCorazones = 20; // Número de corazones

    for (let i = 0; i < numCorazones; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = `${Math.random() * 100}vw`;
        corazon.style.top = `${Math.random() * 100}vh`;
        corazon.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria
        fondoCorazones.appendChild(corazon);
    }
}

// Activar audio después de la interacción del usuario
document.addEventListener("click", function () {
    const audio = document.getElementById("audio");
    audio.muted = false;
    audio.play();
});

// Asignar eventos a los botones
document.addEventListener("DOMContentLoaded", function () {
    const btnSi = document.querySelector(".botones button:first-child");
    const btnNo = document.getElementById("btnNo");

    btnSi.addEventListener("click", respuestaSi);
    btnNo.addEventListener("click", respuestaNo);
});

// Crear corazones al cargar la página
window.onload = crearCorazones;
