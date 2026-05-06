/*Altere o programa desenvolvido nas dinâmicas D1 e D2 de
maneira que, caso algum dos produtos consumidos excedam 10
unidades, seja oferecido um desconto de 20% no custo daquele
produto. */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;
let descontoSuco = 0;
let descontoSanduiche = 0;

let qtdSuco = Number(prompt("Quantos sucos foram pedidos? "));
let qtdSanduiche = Number(prompt("Quantos sanduíches foram pedidos? "));
let qtdClientes = Number(prompt("A conta será dividida entre quantas pessoas? "));

let totalSuco = qtdSuco * valorSuco;
if (qtdSuco >= 10) {
    descontoSuco = totalSuco * 0.2;
}
let totalSanduiche = qtdSanduiche * valorSanduiche;
if (qtdSanduiche >= 10) {
    descontoSanduiche = totalSanduiche * 0.2;
}
let total = (totalSuco - descontoSuco) + (totalSanduiche - descontoSanduiche);
let totalPorCliente = total / qtdClientes;

console.log('\n');
console.log('Recibo:');
if (qtdSuco >= 10) {
    console.log(`Suco: R$${valorSuco} | Quantidade: ${qtdSuco} | Valor do desconto aplicado (20%): R$${descontoSuco.toFixed(2)} | Total: R$${(totalSuco - descontoSuco).toFixed(2)}`);    
}
else {
    console.log(`Suco: R$${valorSuco} | Quantidade: ${qtdSuco} | Total: R$${totalSuco.toFixed(2)}`);
}
if (qtdSanduiche >= 10) {
    console.log(`Sanduiche: R$${valorSanduiche} | Quantidade: ${qtdSanduiche} | Valor do desconto aplicado (20%): R$${descontoSanduiche.toFixed(2)} | Total: R$${(totalSanduiche - descontoSanduiche).toFixed(2)}`);    
}
else {
    console.log(`Sanduiche: R$${valorSanduiche} | Quantidade: ${qtdSanduiche} | Total: R$${totalSanduiche.toFixed(2)}`);
}
console.log(`Custo total a pagar: R$${total.toFixed(2)}
Quantidade de clientes: ${qtdClientes}
Valor por cliente: R$${totalPorCliente.toFixed(2)}`)
