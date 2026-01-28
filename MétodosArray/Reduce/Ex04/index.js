//

const numeros  = [10, 5, 30, 20];

const maiorNumero = numeros.reduce((acc, atual)=>{

return atual > acc  ? atual : acc;
}, numeros[0])

console.log(maiorNumero);

