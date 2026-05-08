/* Escreva um programa JavaScript que cria um array com 100
números aleatórios sorteados entre -100 e 100. Em seguida o
programa deve chamar funções para:
a) Multiplicar todas as posições negativas do arranjo por -2.
b) Retornar o menor valor do arranjo
c) Retornar um string com uma representação formatada do arranjo.
Ex: [10][-2][80][30] */

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function multiplicarNegativos(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            numeros[i] = numeros[i] * -2;
        }
    }
    return numeros;
}

function menorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (menorNumero > numeros[i]) {
            menorNumero = numeros[i]
        }
    }
    return menorNumero;
}

function arranjoToString(numeros) {
    let string = '';
    for (let num of numeros) {
        string = string + '[' + num + ']';
    }
    return string;
}

let numeros = new Array(10);
for (let i = 0; i < 10; i++) {
    numeros[i] = randomInt(-100, 100)
}

console.log(numeros)
console.log(arranjoToString(multiplicarNegativos(numeros)))
console.log(menorNumero(numeros))
console.log(arranjoToString(numeros))
