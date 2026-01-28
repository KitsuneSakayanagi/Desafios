//Encontre o primeiro produto com preço maior que 100


const produtos = [
  { nome: "Mouse", preco: 90 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 }
]


const  obterProdutoMaior100 = produtos.find(produto=> produto.preco > 900)?.nome

console.log(obterProdutoMaior100);
