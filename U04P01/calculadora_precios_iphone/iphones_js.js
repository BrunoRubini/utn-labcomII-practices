var precios = {
        '128': 150000,
        '256': 165000,
        '512': 180000,
    }
var imagenes = {
            'grafito': 'img/grafito.jpg',
            'sierra': 'img/sierra.jpg',
            'silver': 'img/silver.jpg',
            'gold': 'img/gold.jpg'
        };
function calculatePrice(){
        opcion_gb = document.getElementById('selector-gb') // traigo la opcion de los GBs del selector
        cantidad = document.getElementById('cantidad_telefonos') // traigo la cantidad de telefonos ingresados
        resultado = document.getElementById('resultado') // elemento p donde muestro resultado
        if (validar_cantidad(cantidad) && validar_select(opcion_gb)) {
                var precio_iphone = precios[opcion_gb.value];
                var precio_total = cantidad.value * precio_iphone;
                resultado.textContent = 'El precio total es: $' + precio_total;
            }
}
function validar_cantidad(cantidad){
    if (cantidad.value <= 0 || cantidad.value > 10) {
        resultado.textContent = 'Error: La cantidad debe ser mayor que 0 y menor/igual a 10'
        return false;
    }
    return true;
}
function validar_select(opcion_gb){
    if(opcion_gb.value == 0){
        resultado.textContent = 'Error: Por favor seleccione la capacidad del telefono'
        return false;
    }
    return true;
}
function changeProductImage(){
    var imagen = document.getElementById('imagen-producto');
    var selectorColor = document.getElementById('selector-color');    
    imagen.src = imagenes[selectorColor.value];           
}
