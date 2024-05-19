
        var cotizaciones = {
            dolar : 1150, euro : 1200,
        }
        function validar_campos_cotizacion(cantidadPesos,moneda){
            if (cantidadPesos ===''){
                alert('Por favor complete la cantidad de pesos a convertir')
                return false;
            }else if(moneda ===''){
                alert('Por favor seleccione una moneda')
                return false;
            }else{
                return true;
            }
        }
        function calcularConversion() {
            var cantidadPesos = document.getElementById('cantidad_pesos').value; // traigo el valor del campo de texto numero cantidad de pesos
            var moneda = document.getElementById('monedas').value; // Con esto traigo dolar,euro, etc
            let resultado = 0;

            if (validar_campos_cotizacion(cantidadPesos,moneda)){
                var valorCotizacion = cotizaciones[moneda]
                resultado = cantidadPesos * valorCotizacion
                //document.getElementById('resultado').innerText = `Resultado: ${resultado} ${moneda}`;
                document.getElementById('resultado').innerText = 'Resultado: ' + resultado +" "+ moneda;
            }
        }

        function agregarMoneda() {
        const nombreMoneda = document.getElementById('nombre_moneda').value;
        const costoConversion = document.getElementById('costo_conversion').value;

        if (nombreMoneda === '' || costoConversion === '') {
            alert('Por favor completa todos los campos para agregar la moneda.');
            return;
        }
        const select = document.getElementById('monedas');
        const option = document.createElement('option');
        option.value = nombreMoneda;
        option.text = nombreMoneda;
        select.add(option);
        /* Agregar la moneda al arreglo de objetos*/
        cotizaciones[nombreMoneda] = costoConversion;
        /* esto es lo mismo para agregar una option a un select
        monedas.options.add(new Option(nombreMoneda,nombreMoneda))
        */
        alert(`La moneda ${nombreMoneda} ha sido agregada exitosamente.`);
        
        // Reinicio los campos para agregar otra y no tener que borrar lo anterior
        document.getElementById('nombre_moneda').value = '';
        document.getElementById('costo_conversion').value = '';
    }
    