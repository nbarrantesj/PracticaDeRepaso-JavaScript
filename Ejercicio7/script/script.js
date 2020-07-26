let texto = prompt('Ingrese una frase');

let sinEspacios = '';

for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) != ' ') {
     sinEspacios += texto.charAt(i);    
    }
}
console.log(sinEspacios);