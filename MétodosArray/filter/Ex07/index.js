const dados = [10, "20", null, undefined, 30, NaN, 0, "abc"];


const numerosValidos =  dados.filter(numero =>  typeof numero === "number" && !Number.isNaN(numero))

console.log(numerosValidos);
