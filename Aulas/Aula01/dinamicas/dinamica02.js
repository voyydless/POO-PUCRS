/* ) Altere o programa desenvolvido na dinâmica D1 de maneira a
explorar os recursos de formatação de strings. Garanta que todos os
valores monetários serão exibidos com apenas duas casas
decimais. Além disso, pergunte quantos clientes irão dividir a conta
e exiba o total por pessoa */

import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;

let qtdSuco = Number(prompt("Quantos sucos foram pedidos? "));
let qtdSanduiche = Number(prompt("Quantos sanduíches foram pedidos? "));
let qtdClientes = Number(prompt("A conta será dividida entre quantas pessoas? "));

let totalSuco = qtdSuco * valorSuco;
let totalSanduiche = qtdSanduiche * valorSanduiche;
let total = totalSuco + totalSanduiche;
let totalPorCliente = total / qtdClientes;

console.log(`Recibo: 
    Suco: R$${valorSuco} | Quantidade: ${qtdSuco} | Total: R$${totalSuco.toFixed(2)}
    Sanduiche: R$${valorSanduiche} | Quantidade: ${qtdSanduiche} | Total: R$${totalSanduiche.toFixed(2)}
    Custo total a pagar: R$${total.toFixed(2)}
    Quantidade de clientes: ${qtdClientes}
    Valor por cliente: R$${totalPorCliente.toFixed(2)}`);
