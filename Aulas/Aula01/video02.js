import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

// condicional
let preco = 10;
let novoPreco = 0;

if (preco < 20){
    novoPreco = 50;
}
console.log(novoPreco);

// laços de repetição 
//while
console.log("\n-- While Loop --");
let limite = 100;
let n = 0;
while (n < limite){
    console.log(n)
    n += 2;
}

// do while
console.log("\n-- Do While Loop --");
limite = 100;
n = 0;
do {
    console.log(n)
    n += 2;
} while (n < limite);

// for
console.log("\n-- For Loop --");
for (n = 0; n < limite; n += 2) {
    console.log(n)
}

// Break
console.log("\n-- Break num While Loop --");
limite = 100;
n = 0;
while(n < limite) {
    console.log(n);

    if (n > 0 && n % 10 === 0) {
    let rp = prompt("Parar? (s/n)");
    if (rp === 's'){
        break;
        }
    }
    n += 2;
}

console.log("Fim")

// Continue
console.log("\n-- Continue num While Loop --");
limite = 100;
n = 0;
while(n < limite) {
    console.log(n);

    if (n > 0 && n % 10 === 0) {
        let rp = prompt("Deseja pausar? (s/n)");
        if (rp === 's') {
            continue;
        }
    }
    n += 2;
}
