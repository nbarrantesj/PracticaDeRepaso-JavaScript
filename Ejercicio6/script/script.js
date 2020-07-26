let numero = parseInt(prompt('Ingrese un nummero: '));

let contador = 2;

let primo = true;

while (contador < numero) {
    if (numero % contador == 0) {
        primo = false;
    }
    contador++;
}

if (primo) {
    console.log('El número es primo');
} else {
    console.log('El número no es primo');
}