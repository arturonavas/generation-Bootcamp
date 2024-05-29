//<-- funcion que escucha el form, cuando se le de click al boton convertir actua
document.getElementById('temperatureForm').addEventListener('submit', function(event) { 
    event.preventDefault(); // <-- previene que el form se envie antes de darle click a submit
    
    let celsiusInput = document.getElementById('celsius').value; // <-- toma el numero puesto en el input
    let celsius = parseFloat(celsiusInput); //<--parseo el input para que sea estrictamente un numero flotante (decimal)
    
    if (isNaN(celsius)) { //<-- si no es un numero devuelve un error en el html
        document.getElementById('results').innerHTML = "<p style='color: red;'>por favor, ingrese un numero</p>";
        return;
    }else{ //<-- de otro modo si es un numero empieza los calculos
    //calculo matematico del convertidor
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    //retorna el resultado del calculo insertando un pedazo de html en "results" y convirtiendo el resultado a un String
    document.getElementById('results').innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p> 
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
    }
});
