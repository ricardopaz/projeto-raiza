const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const cardText = card.querySelector(".card-text"); // Seleciona o elemento de texto dentro do card
  const btnBuy = card.querySelector(".btn-buy"); // Seleciona o botão dentro do card

  //Inicialmente, esconda o botão

  // Evento mouseover
  card.addEventListener("mouseover", function () {
    cardText.style.display = "none"; // Esconde o texto
    btnBuy.style.display = "block"; // Mostra o botão
    card.style.cursor = "pointer"; // Muda o cursor para pointer
  });

  // Evento mouseout
  card.addEventListener("mouseout", function () {
    cardText.style.display = "block"; // Mostra o texto novamente
    btnBuy.style.display = "none"; // Esconde o botão
  });
});

// Alterar valor do carrinho
