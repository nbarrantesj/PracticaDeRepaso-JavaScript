let numero = 0;

const secreto = 15;

let condicion = 1;

let mensaje = "Falló";

while (condicion != 0 ) {
    numero = parseInt(prompt('Adivina un número del 1 al 100: '));
    if (numero == 0 || numero == secreto) {
        condicion = 0;
        if (numero == secreto) {
            console.log('Ganaste');
        }else{
            console.log('Abandonaste');
        }       
    }else if(numero > secreto){
        console.log(mensaje, 'El número que ingresó es mayor');
        condicion++;
    }else if(numero < secreto){
        console.log(mensaje, 'El número que ingresó es menor');
        condicion++;
    }
}

