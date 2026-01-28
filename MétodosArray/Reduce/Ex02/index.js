//Multiplicar todos os números.

const numeros = [2, 3, 4];

const multiplicar = numeros.reduce((acc, atual) =>{
return acc * atual
}, 1)

console.log(multiplicar);
