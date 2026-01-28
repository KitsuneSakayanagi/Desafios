//Filtrar usuários ativos

const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "João", ativo: true }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo)

console.log(usuariosAtivos);
