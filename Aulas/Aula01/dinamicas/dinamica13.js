/* Escreva uma função que recebe um array de números por
parâmetro e retorna a média dos valores do arranjo.
OBS: use “bycontract” para verificar se os tipos dos parâmetros
estão corretos. Use “Number[]” para especificar um arranjo de
valores */

import { validate } from "bycontract";
import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

function inserirNumeros() {  
    let numeros = new Array(10);
    let cont = 0;
    for (let i = 0; i < numeros.length; i++) {
        let numero = Number(prompt(`Insira o ${cont + 1}o número: `))
        numeros[cont] = numero;
        cont++;
    }
    return numeros;
}

function calcularMedia(numeros) {
    validate(numeros, 'Number[]');
    let media = 0;
    for (let i = 0; i < numeros.length; i++) {
        media = media + numeros[i];
    }
    return media / numeros.length;
}

let numerosInseridos = inserirNumeros();
console.log(`\nNúmeros inseridos: ${numerosInseridos}
Média dos números inseridos: ${calcularMedia(numerosInseridos)}`)

