//Filtrar apenas valores numéricos:

const valuesNumbers = [10, "20", 30, null, 40];

const onlyNumbers = valuesNumbers.filter((values)=>  typeof values === "number" && !Number.isNaN(values))

console.log(onlyNumbers);



