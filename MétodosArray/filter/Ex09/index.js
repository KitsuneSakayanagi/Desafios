//Filtrar usuários ativos com idade ≥ 18

const usuarios = [
  { nome: "Ana", idade: 20, ativo: true },
  { nome: "Carlos", idade: 17, ativo: true },
  { nome: "João", idade: 30, ativo: false },
  { nome: "Maria", idade: 22, ativo: true }
];

const usuariosMaiorIdade =  usuarios.filter(usuario  => usuario.ativo && usuario.idade >= 18)

console.log(usuariosMaiorIdade);
