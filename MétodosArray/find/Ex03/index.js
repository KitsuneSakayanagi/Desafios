//Encontre o primeiro número par maior que 10
const numeros = [10, 20, 0];

const  numeroParMaior10 = numeros.find(valor => valor > 10 &&  valor % 2 === 0)

console.log(numeroParMaior10);

