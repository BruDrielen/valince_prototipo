// Função para criar botão de escolha
function createChoiceButton(parentId, choiceText, recommendation) {
    var button = document.createElement("button");
    button.textContent = choiceText;
    button.classList.add("box");
    button.addEventListener("click", function() {
      showRecommendation(parentId, recommendation);
    });
    document.getElementById(parentId).appendChild(button);
  }
  
  // Função para mostrar recomendação
  function showRecommendation(parentId, recommendation) {
    // Limpa o conteúdo do container
    var container = document.getElementById(parentId);
    container.innerHTML = '';
  
    // Adiciona a recomendação
    var recommendationBox = document.createElement("div");
    recommendationBox.textContent = recommendation;
    recommendationBox.classList.add("box");
    container.appendChild(recommendationBox);
  }
  
  // Adiciona ouvinte de eventos à primeira caixa
  document.getElementById("box1").addEventListener("click", function() {
    // Não faz nada, apenas uma pergunta
  });
  
  // Adiciona ouvinte de eventos à caixa 1
  document.getElementById("box2").addEventListener("click", function() {
    // Mostra as opções após a escolha da box 1
    document.getElementById("box1").textContent = "Escolha uma opção:";
    createChoiceButton("container", "Opção 1", "Recomendação 1");
    createChoiceButton("container", "Opção 2", "Recomendação 2");
  });
  
  // Adiciona ouvinte de eventos à caixa 2
  document.getElementById("box3").addEventListener("click", function() {
    // Mostra as opções após a escolha da box 2
    createChoiceButton("container", "Opção 3", "Recomendação 3");
  });
  
  // Adiciona ouvinte de eventos à caixa 2
  document.getElementById("box2").addEventListener("click", function() {
    // Mostra as opções após a escolha da box 2
    createChoiceButton("container", "Opção 3", "Recomendação 3");
  });
  
  // Adiciona ouvinte de eventos à caixa 3
  document.getElementById("box3").addEventListener("click", function() {
    // Mostra as opções após a escolha da box 3
    createChoiceButton("container", "Opção 4", "Recomendação 4");
  });
  