let frase = prompt('Escriba una frase: ');

let invertida = '';

let tamano = frase.length;

while (tamano >= 0) {
    invertida += frase.charAt(tamano);
     tamano--;
}
console.log(invertida);