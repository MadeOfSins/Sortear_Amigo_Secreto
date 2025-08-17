//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a 
// lógica para resolver o problema.

let nomesAmigos = [];

adicionarAmigo()
sortearAmigo()


//Função para adicionar um amigo na lista

function adicionarAmigo() {
    let nome = document.querySelector("input").value;

    // Caso esteja vazio o campo ao apertar o botão alertar para inserir um nome
    if (nome == "") {
        alert("Por favor, insira um nome.");

        
    } else {
        //Entrando aqui significa que não está vazio, então adicionar a lista e apagar o valor do campo
        nomesAmigos.push(nome);
        nome.value = "";
    }

    
}
    
    

