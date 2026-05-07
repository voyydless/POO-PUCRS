/* Considere os números de matrícula trabalhados nas dinâmicas
D5 e D7. A diferença é que agora os dois primeiros dígitos indicam o
nível de acesso do funcionário aos setores da empresa. Atualmente
os níveis de acesso possíveis são: 01, 21, 35, 66, 67 e 88.
Escreva uma função que recebe por parâmetro um número
pertencente ao intervalo [0;9999] e o nível de acesso de um
funcionário e retorna o número de matrícula do funcionário. Como
normalmente o nível de acesso dos funcionários é “21”, assuma
este valor como default. */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

function nivelAcessoOk(nivelAcesso) {
    switch(nivelAcesso) {
        case '01':
            return true;
        case '21':
            return true;
        case '35':
            return true;
        case '66':
            return true;
        case '67':
            return true;
        case '88':
            return true;
        default:
            return false;
    }
}

function acrescentaVerificador(numeroMatricula, nivelAcesso = 21) {
    let digitos = numeroMatricula;
    let soma = 0;

    while (digitos.length != 1) {
        for (let i = 0; i < digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma)
        soma = 0;
    }

    return nivelAcesso + numeroMatricula + '-' + digitos;
}

let nivelAcesso = prompt("Insira seu nível de acesso: ");
let numeroMatricula = prompt("Insira seu número de matrícula sem o dígito verificador: ");

if (nivelAcessoOk(nivelAcesso) == true) {
    let matriculaCompleta = acrescentaVerificador(numeroMatricula, nivelAcesso);
    console.log(`Número de mátricula com dígito verificador:  ${matriculaCompleta}`);
} else {
    console.log("Nível de acesso inválido.");
}
