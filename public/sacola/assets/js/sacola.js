let valueItemCard = parseInt(localStorage.getItem("cartItems"))
  ? parseInt(localStorage.getItem("cartItems"))
  : 0;

const sectionBagEmpty = document.getElementById("section-bag-empty");
const sectionBagFull = document.getElementById("section-bag-full");

if (valueItemCard > 0) {
  sectionBagEmpty.style.display = "none";
  sectionBagFull.style.display = "flex";
} else {
  sectionBagEmpty.style.display = "block";
  sectionBagFull.style.display = "none";
}

itemsBag(valueItemCard);

// Atualiza o valor inicial do carrinho na página

const buttonsRemove = document.querySelectorAll(".remove-item");

buttonsRemove.forEach((button) => {
  button.addEventListener("click", function () {
    valueItemCard--;
    document.getElementById("item-bag").innerText = valueItemCard; // Atualiza o valor no HTML
    localStorage.setItem("cartItems", valueItemCard); // Salva o novo valor no localStorage
    location.reload();
  });
});

function itemsBag(valueItemCard) {
  const productsBag = document.getElementById("productsBag");
  const productsBagSpan = document.getElementById("productsBagSpan");

  if (valueItemCard > 1) {
    productsBag.innerText = `Sacola (${valueItemCard} produtos)`;
    productsBagSpan.innerText = `(${valueItemCard} itens)`;
  } else {
    productsBag.innerText = `Sacola (${valueItemCard} produto)`;
    productsBagSpan.innerText = `(${valueItemCard} item)`;
  }
}
