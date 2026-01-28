//Filtrar usuários ativos ≥ 18 e retornar apenas os nomes

const usuarios = [
  { nome: "Ana", idade: 20, ativo: true },
  { nome: "Carlos", idade: 17, ativo: true },
  { nome: "João", idade: 30, ativo: false },
  { nome: "Maria", idade: 22, ativo: true }
];

const usuariosAtivos  = usuarios.filter(usuario => usuario.ativo && usuario.idade >=  18).map(usuario  => usuario.nome)

console.log(usuariosAtivos);
