// Escriba una función que reciba una array y solo imprima los
//  valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
//  función imprimirá '6,23,33,100'.
let resultado = document.getElementById('resultado');
var array =[3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
let repetidos = []
for (let i = 0; i < array.length; i++) {
    var element1 = array[i];
    for (let j = i+1 ; j < array.length; j++) {
        var element2 = array[j];
        if (element1 === element2 && !repetidos.includes(element1)) {
            repetidos.push(element1);
        }
    }
}
console.log(repetidos);
repetidos.sort((a, b) => a - b);
resultado.innerText = repetidos;