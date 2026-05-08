let x = [1];
x [1] = 2;
x [2] = 3;

console.log(x);

x[1] = 5;

console.log(x);

// Iterações
let nros = [10,30,20,50,40];
let soma = 0;

// For
for(let i=0;i<nros.length;i++){
    soma = soma + nros[i];
    console.log(soma);
}

// While
soma = 0;
let cont = 0;
while(cont < nros.length){
    soma = soma + nros[cont];
    cont++;
    console.log(soma);
}

// For Each
soma = 0;
for(let numero of nros){
    soma = soma + numero;
    console.log(soma);
}

