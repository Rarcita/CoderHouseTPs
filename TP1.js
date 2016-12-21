/*Realizar una calculadora que realize las siguientes operaciones:
sumar, restar, multiplicar y dividir:

Debera ingresar un valor mediante un prompt
Debera ingresar otro valor mediante otro prompt
Mostrar el resultado de cada operacion mediante distintos alert */

//Suma
var numeroSuma1= parseFloat (prompt ('Ingrese un numero'));
var numeroSuma2= parseFloat (prompt ('Ingrese otro numero para sumar'));
var resultadoSuma= numeroSuma1 + numeroSuma2;
alert (resultadoSuma);

//Resta
var numeroResta1= parseFloat (prompt ('Ingrese un numero'));
var numeroResta2= parseFloat (prompt ('Ingrese otro numero para restar'));
var resultadoResta= numeroResta1 - numeroResta2;
alert (resultadoResta);

//Multiplicacion
var numeroMultiplicacion1= parseFloat (prompt ('Ingrese un numero'));
var numeroMultiplicacion2= parseFloat (prompt ('Ingrese numero a multiplicar'));
var resultadoMultiplicacion = numeroMultiplicacion1 * numeroMultiplicacion2;
alert (resultadoMultiplicacion);

//Division
var numeroDivision1 = parseFloat (prompt ('Ingrese un numero'));
var numeroDivision2 =parseFloat (prompt ('Ingrese otro numero a dividir'));
var resultadoDivision =numeroDivision1 / numeroDivision2;
alert (resultadoDivision);