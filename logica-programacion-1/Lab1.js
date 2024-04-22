//Debe solicitar al usuario 3 números y guardarlos.
//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.
//Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
//4, 4, 2.
//4, 4, 2.
//2, 4, 4.
//4, 2, 4.
//4, 4, 2.
//2, 4, 4.
//2, 4, 4.
//4, 4, 2.
//2, 4, 4.
//Pruébalo con las combinaciones de números que se te ocurran.
//Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
//Colócalo en un repositorio llamado “logica-programacion-1”

//Pedir al usuario 3 numeros
alert("Ingresa 3 numeros");
var n1 = parseInt(prompt("Ingresa un numero"));
var n2 = parseInt(prompt("Ingresa un numero"));
var n3 = parseInt(prompt("Ingresa un numero"));

// Encontrar el número mayor, del centro y menor
function encontrarNumeros(num1,num2,num3){
    var mayor = Math.max(num1, num2, num3);
    var menor = Math.min(num1, num2, num3);
    var medio = num1 + num2 + num3 - mayor - menor;

    //Si los numeros son igualls:
    if (num1 === num2 && num1 === num3) {
        alert("Los números son iguales.");
    } else{
    //Imprimir resultado
    alert("Los números ordenados de MAYOR a menor son: "+mayor+", " + medio+", " +menor);
    alert("Los números ordenados de menor a MAYOR son: "+menor+", " + medio+", " +mayor);
    }
}
//Correr el programa
encontrarNumeros(n1,n2,n3);