//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a 
// lógica para resolver o problema.

let nomesAmigos = [];

adicionarAmigo()
sortearAmigo()


//Função para adicionar um amigo na lista
function adicionarAmigo() {
    //Armazenando valor do input
    let nome = document.querySelector("input");
    let listaNomes = nome.value;

    // Caso esteja vazio o campo ao apertar o botão alertar para inserir um nome
    if (listaNomes == "") {
        alert("Por favor, insira um nome.");   
    } else {
        //Entrando aqui significa que não está vazio, então adicionar a lista e apagar o valor do campo
        nomesAmigos.push(nome);
        
        // Atualiza a lista na tela
        let lista = document.querySelector("#listaAmigos");
        let li = document.createElement("li");
        li.textContent = listaNomes;
        lista.appendChild(li);

        //Limpando o input
        nome.value = "";
    }
}
    
    

