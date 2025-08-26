// Archivo exclusivo de funciones

export function sumar(n1, n2) {
    console.log(n1 + n2)
}

function restar(a, b) {
    console.log(a - b);
}

let datoUsuario = document.querySelectorAll(".textForm")
console.log(datoUsuario.classList)

let tituloHome = document.querySelector(".titulos")
tituloHome.addEventListener("click", function() {
    tituloHome.textContent="Hiciste click"
});