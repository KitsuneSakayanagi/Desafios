//Somar todos os números.

const numeros = [10,20,  30];

const soma = numeros.reduce((acumulador, total)=>{
return acumulador  + total;
},0)

console.log(soma);

