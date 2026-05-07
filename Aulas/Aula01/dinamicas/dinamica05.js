/* Em uma empresa a matrícula de um funcionário é composta por uma sequencia de
dígitos (0-9) organizados em 2 campos: <nnnnnn>-<v>
O significado/formato desses campos é o que segue:
<nnnnnn> → um número sequencial de 6 dígitos (completado com zeros a esquerda)
<v> → um dígito verificador calculado da seguinte forma: somam-se todos os dígitos da
matrícula. Se a soma tiver mais de um dígito somam-se seus dígitos e assim sucessivamente
até que se obtenha um único dígito.
Exemplo: 21004537-4
Conferindo o dígito verificador: 2+1+0+0+4+5+3+7 = 22 → 2+2 = 4
Escreva um programa que solicita ao usuário um número de matrícula sem o dígito
verificador e imprime na tela o número de matrícula com o dígito verificador. */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let numeroMatricula = prompt("Insira seu número de matrícula sem o dígito verificador: ");
let digitos = numeroMatricula;
let soma = 0;

while (digitos.length != 1) {
    for (let i = 0; i < digitos.length; i++) {
        soma = soma + Number(digitos.at(i));
    }
    digitos = String(soma)
    soma = 0;
}

numeroMatricula = numeroMatricula + '-' + digitos;
console.log(`Número de mátricula com dígito verificador:  ${numeroMatricula}`)