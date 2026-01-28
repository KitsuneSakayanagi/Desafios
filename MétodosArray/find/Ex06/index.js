const usuarios = [
  { nome: "Ana", idade: 17, ativo: true },
  { nome: "Carlos", idade: 22, ativo: false },
  { nome: "Maria", idade: 25, ativo: true },
  { nome: "João", idade: 30, ativo: true }
];


function obterNomeUsuario(usuarios) {
  if (!Array.isArray(usuarios) || usuarios.length === 0) {
    return "Erro: array inválido";
  }

  const usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.ativo && usuario.idade >= 18;
  });

  return usuarioEncontrado ? usuarioEncontrado.nome : "Visitante";
}

console.log(obterNomeUsuario(usuarios));
