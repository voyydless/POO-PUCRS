/*  Na dinâmica D5, escrevemos um programa que calcula o dígito
verificador para um número de matrícula. Tendo por base o código
já elaborado, escreva um subprograma chamado
acrescentaVerificador que recebe um número de matrícula por
parâmetro e retorna o número de matrícula com o dígito verificador
acrescentado. Lembre que o número de matrícula é composto por 6
dígitos de ‘0’ a ‘9’. */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

function acrescentaVerificador(numeroMatricula) {
    let digitos = numeroMatricula;
    let soma = 0;

    while (digitos.length != 1) {
        for (let i = 0; i < digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma)
        soma = 0;
    }

    return numeroMatricula + '-' + digitos;
}

let numeroMatricula = prompt("Insira seu número de matrícula sem o dígito verificador: ");
let matriculaCompleta = acrescentaVerificador(numeroMatricula);
console.log(`Número de mátricula com dígito verificador:  ${matriculaCompleta}`)