//Contar quantos elementos existem no array usando reduce.

const array = ["a", "b", "c"];

const total = array.reduce((acc, atual)=>{
   return acc + 1 
}, 0)

console.log(total);

