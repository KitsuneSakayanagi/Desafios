//A partir do array abaixo, retorne o OBJETO inteiro do produto mais caro.

const produtos = [
  { nome: "Mouse", preco: 90 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 250 }
];

const produtoCaro=  produtos.reduce((acc, atual)=>{
return atual.preco > acc.preco ? atual: acc;

}, produtos[0])

console.log(produtoCaro);
