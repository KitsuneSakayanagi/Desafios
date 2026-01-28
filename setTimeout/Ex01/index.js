/*
Criar um sistema que:

Imprime imediatamente:
 "Iniciando processo"

Após 2 segundos, imprime:
 "Validando dados"

Após 4 segundos, imprime:
 "Processo concluído"
*/

function iniciarCount(){
    console.log("Iniciando processo");

setTimeout(() => {
  console.log("Validando dados");
}, 2000);

setTimeout(() => {
  console.log("Processo concluído");
}, 4000);

}

iniciarCount()