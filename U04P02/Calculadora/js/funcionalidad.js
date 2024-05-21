//Declaramos variables
var operandoa;
var operandob;
var operacion;
function init() {
    //variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    let arreglo_botones = [
        uno,
        dos,
        tres,
        cuatro,
        cinco,
        seis,
        siete,
        ocho,
        nueve,
        cero,
    ];
    let num1 = null;
    let num2 = "";
    let operador = null;
    // agregar el numero y operando en la pantalla
    arreglo_botones.forEach((boton) => {
        boton.onclick = function (e) {
            if (resultado.textContent != 'Math Error') {
                if (num1 == null) {
                    num1 = boton.textContent;
                } else {
                    if (operador == null) {
                        num1 += boton.textContent;
                    } else {
                        num2 += boton.textContent;
                    }
                }
                resultado.textContent += boton.textContent;
                console.log("Num1: ", num1);
                console.log("Num2: ", num2);
                console.log(operador)
            }
        };

    });

    suma.onclick = function (e) {
        if (num1 != null) {
            if (operador == null) {
                operador = "+";
                resultado.textContent += "+";
            }
        }

    }
    resta.onclick = function (e) {
        if (num1 != null) {
            if (operador == null) {
                operador = "-";
                resultado.textContent += "-";
            }
        }
    }
    multiplicacion.onclick = function (e) {
        if (num1 != null) {
            if (operador == null) {
                operador = "*";
                resultado.textContent += "*";
            }
        }

    }
    division.onclick = function (e) {
        if (num1 != null) {
            if (operador == null) {
                operador = "/";
                resultado.textContent += "/";
            }
        }

    }
    reset.onclick = function (e) {
        resultado.textContent = '';
        num1 = null;
        operador = null;
        num2 = "";
    }
    igual.onclick = function (e) {
        let res;
        switch (operador) {
            case "+":
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                if (parseFloat(num2) == 0) {
                    res = 'Math Error';
                    break;
                }
                res = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                res = num1;
                break;
        }
        resultado.textContent = res;
        if (res == 'Math Error') {
            console.log("enmtree");
            num1 = null;
        }else{
            num1 = res;
            num2 = '';
            operador = null;
        }
    }

    function Suma(num1, num2) {
        return num1 + num2;
    }
}
