const produtos = [
  { nome: "Mouse", preco: 90 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 }
]


const produtosCaros= produtos.filter(produto => produto.preco >  100)

console.log(produtosCaros);
