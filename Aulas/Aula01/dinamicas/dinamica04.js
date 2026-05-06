/* Uma grande empresa está patrocinando o show de um
cantor famoso. Os ingressos custam R$ 500,00 mas
existem diversas categorias de desconto. Escreva um programa
JavaScript que solicita a categoria do comprador e
exibe na tela o valor a ser pago pelo ingresso. */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let ingresso = 500;

console.log(`\nCategorias de Desconto:
    1 - Público Geral
    2 - Convidado
    3 - Idoso
    4 - Funcionário 
    5 - Funcionário Idoso
    6 - Criança`);

let desconto = Number(prompt('\nDigite o número da categoria em que você se encaixa: '));

switch(desconto) {
    case 1:
        ingresso = ingresso;
        break;
    case 2:
        ingresso = ingresso * 0.75;
        break;
    case 3:
        ingresso = ingresso * 0.5;
        break;
    case 4: 
        ingresso = ingresso * 0.5;
        break;
    case 5:
        ingresso = (ingresso * 0.5) * 0.5;
        break;
    case 6:
        ingresso = 0;
        break;
}

console.log(`\nO valor do seu ingresso acabará sendo R$${ingresso}`);