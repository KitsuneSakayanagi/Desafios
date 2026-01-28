//Calcular o total do carrinho:

const carrinho = [
  { produto: "Mouse", preco: 100, quantidade: 2 },
  { produto: "Teclado", preco: 200, quantidade: 1 },
  { produto: "Monitor", preco: 900, quantidade: 1 }
];

const valorTotal = carrinho.reduce((acc, atual)=>{
    if(typeof atual.preco !== "number" || typeof atual.quantidade !== "number"){
        return acc;
    }

    return  acc + atual.preco * atual.quantidade
}, 0)

console.log(valorTotal);
