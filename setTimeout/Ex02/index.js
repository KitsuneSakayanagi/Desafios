const timeout = setTimeout(() => {
  console.log("Olá mundo");
}, 3000);

// cancelando antes de executar
clearTimeout(timeout);
console.log("Ação cancelada");
