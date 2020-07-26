let texto = prompt('Ingrese un texto: ');

let caracter = prompt('Ingrese un caracter: ');

let cantidad = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == caracter) {
        cantidad++;
    }
}
console.log(`La  cantidad de veces del caracter repetidos en el texto es: ${cantidad}`);
