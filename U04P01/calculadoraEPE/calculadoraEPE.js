
    const costo_servicio = 102;
    

    let btn_calcular = document.getElementById('btn-calcular')
    btn_calcular.addEventListener('click',function calcular(){
        let tipo_radio1 = document.getElementById("Residencial");
    let tipo_radio2 = document.getElementById("Industrial");
    let iva;
    let tipo_propiedad;
    if (tipo_radio1.checked) {
      tipo_propiedad = "Residencial";
      iva = 0.21;
    } else {
      tipo_propiedad = "Industrial";
      iva = 0.27;
    }
    console.log(iva);

    let opcion_seleccionada = document.getElementById("Zonas");
    let precio_kwh;
    switch (opcion_seleccionada.value) {
      case '0':
        precio_kwh = 5.8;
        break;
      case '1':
        precio_kwh = 5.4;
        break;
      case '2':
        precio_kwh = 5.35;
        break;
      case '3':
        precio_kwh = 5.6;
        break;
    }
    console.log(opcion_seleccionada.value);
    console.log(precio_kwh);

    let cantidad_kwh = document.getElementById('kwh');
    cantidad_kwh = parseInt(cantidad_kwh.value)
    console.log(cantidad_kwh);
        let precio_final = costo_servicio + (cantidad_kwh * precio_kwh) * ( 1 + iva);
        console.log("kWh: " + cantidad_kwh)
        console.log(precio_kwh)
        console.log(iva)
        console.log(precio_final)
        alert(precio_final + "$")
    })
