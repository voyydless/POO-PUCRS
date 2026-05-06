/* Escrever um programa JavaScript que solicita a quantidade de
sucos e sanduíches consumidos pelos clientes de uma mesa de
uma lanchonete e exibe o recibo com os valores parciais e o total
final a pagar */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;

let qtdSuco = Number(prompt("Quantos sucos foram pedidos? "));
let qtdSanduiche = Number(prompt("Quantos sanduíches foram pedidos? "));

let totalSuco = qtdSuco * valorSuco;
let totalSanduiche = qtdSanduiche * valorSanduiche;
let total = totalSuco + totalSanduiche;

console.log(`Recibo: 
    Suco: R$${valorSuco} | Quantidade: ${qtdSuco} | Total: R$${totalSuco}
    Sanduiche: R$${valorSanduiche} | Quantidade: ${qtdSanduiche} | Total: R$${totalSanduiche}
    Custo total a pagar: R$${total}`);
