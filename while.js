// Declarar variables
let i = 1;
let resultado = '';

while (i <= 100) {
    resultado += i + ' ';
    i++;
}

document.getElementById("resultado").innerText = resultado;
