//primeiro usuário ativo com idade ≥ 18

const usuarios = [
  { nome: "Ana", idade: 16, ativo: true },
  { nome: "Carlos", idade: 20, ativo: false },
  { nome: "Maria", idade: 25, ativo: true },
];

const usuariosAtivos =  usuarios.find( usuario =>  usuario.ativo && usuario.idade >= 18)?.nome

console.log(usuariosAtivos);

