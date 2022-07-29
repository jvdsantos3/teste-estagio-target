// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let numero = 4;

function sequencia() {
    let sequencia = [0, 1];
    for (let i = 0; i <= numero; i++) {
        let novoNum = sequencia[i] + sequencia[i + 1];
        sequencia.push(novoNum);
    }

    return sequencia;
}

function verificaNumero (sequencia, numero) {
    if (sequencia.includes(numero)) {
        return console.log('O número pertence a sequência de Fibonacci');
    } 
        
    return console.log('O número não pertence a sequência de Fibonacci');   
}

verificaNumero(sequencia(), numero);