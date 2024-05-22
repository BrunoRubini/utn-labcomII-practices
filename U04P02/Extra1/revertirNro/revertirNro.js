// escriba una función de JavaScript que invierta un número.
//  Por ejemplo, si x = 32443, la salida debería ser 34423.

const resultado = document.getElementById('resultado');
const btn_aceptar = document.getElementById('btn-aceptar');
const num = document.getElementById('number');

function revertirNro(num) {
    let res = "";
    while (num > 0) {
        // Obtenemos el último dígito y lo añadimos al resultado como string
        res += (num % 10).toString();
        // lo convierto en entero para quitar el decimal
        num = parseInt(num / 10);
    }
    return (res);
}
btn_aceptar.onclick = function (e) {
    let rta = revertirNro(parseInt(num.value));
    console.log(rta);
    resultado.innerText = rta;
}