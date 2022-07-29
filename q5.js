// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let string = 'João';

function inverteString (string) {
    let tamanho = string.length;
    let caracteres = string.split('');
    let caracteresInvertidos = [];

    for (let i = tamanho - 1; i >= 0; i--) {
        caracteresInvertidos.push(caracteres[i]);
    }

    let stringInvertida = caracteresInvertidos.join('');

    return console.log(stringInvertida)
}

inverteString(string);
