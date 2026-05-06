import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

const notaMin = 7.0;
let nome = "Sami";
let nota1 = Number(prompt("Qual a primeira nota? "));
let nota2 = Number(prompt("Qual a segunda nota? "));
let media = (nota1 + nota2) / 2;

console.log(`Nome: ${nome} | Média: ${media}`);
