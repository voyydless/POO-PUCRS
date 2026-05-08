/*  Escreva um programa que solicita para o usuário que informe
as idades de seus colegas de turma. Uma idade negativa sinaliza
para o sistema que todas as idades já foram informadas. Em
seguida o programa deve solicitar que o usuário informe uma idade
qualquer e então exibe na tela as seguintes informações:
a) Quantas pessoas tem na turma
b) Quantas pessoas da turma tem a idade informada.
c) Quantas pessoas da turma tem mais que a idade informada */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let idades = [];
let terminou = false;
let cont = 0;

console.log('-- Informe as idades dos seus colegas de turma, ou digite um número negativo para finalizar --')

while (!terminou) {
    let idade = Number(prompt(`Idade do ${cont+1}o colega: `));
    if (Number(idade) == -1) {
        break;
    }
    idades[cont] = idade;
    cont++;
}

let idadeInformada = Number(prompt('Informe uma idade para obter dados sobre: '))
let freq = 0;
let maiores = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] == idadeInformada) {
        freq++;
    }
    if (idades[i] > idadeInformada) {
        maiores++;;
    }
}

console.log(`\nQuantidade de pessoas na turma: ${idades.length}`)
console.log(`Quantidade de colegas com ${idadeInformada} anos: ${freq}`)
console.log(`Quantidade de colegas com mais de ${idadeInformada} anos: ${maiores}`)

