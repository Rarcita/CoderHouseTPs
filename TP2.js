/* TP2
Debera poder ingresar un dia de la semana
Debera poder compararlo con todos los dias de la semana
Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
En caso de encontrar el dia utilizar la sentencia break y terminar el for */

//Metodo1 : 
var semana =['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
var diaIngresado = prompt ('Ingrese un dia');
for (i =0; i < semana.length;i++) {
	if (diaIngresado ==semana[5]  || diaIngresado ==semana[6] ) {
		alert ('El dia es fin de semana');
	} else {
		alert ('El dia es habil');	
	}
	break;
}



//Metodo2 (valida que el usuario ingrese un valor correcto)
var semana =['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
var diaIngresado = prompt ('Ingrese un dia');
for (i=0; i < semana.length; i++) {
	if (diaIngresado ==semana[5] || diaIngresado == semana[6]) {
		alert ('El dia es fin de semana');
		break;
	} else {
		if (diaIngresado ==semana[0] || diaIngresado ==semana[1] || diaIngresado ==semana[2] ||diaIngresado ==semana[3] || diaIngresado ==semana[4])  {
			alert ('El dia es habil');
			break;
		} else {
			alert ('El valor ingresado no es correcto. Por favor ingrese un dia de la semana.')
			break;
		}
	}
}

/*Pregunta: hay una manera mas simple que tener que declarar 
'if (diaIngresado ==semana[0] || diaIngresado ==semana[1] || diaIngresado ==semana[2] ||diaIngresado ==semana[3] || diaIngresado ==semana[4])  {'? 
intente declarar if (diaIngresado ==semana[0-4]) pero no me lo tomo */