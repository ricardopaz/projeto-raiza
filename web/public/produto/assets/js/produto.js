let valueItemCard = parseInt(localStorage.getItem("cartItems"))
  ? parseInt(localStorage.getItem("cartItems"))
  : 0;

const buttonBuy = document.getElementById("buttonBuy");

buttonBuy.addEventListener("click", function () {
  valueItemCard++;
  document.getElementById("item-bag").innerText = valueItemCard; // Atualiza o valor no HTML
  localStorage.setItem("cartItems", valueItemCard); // Salva o novo valor no localStorage
});

$(document).ready(function () {
  $("#buttonBuy").click(function (event) {
    const product_id = $(this).attr("data-id");
    
    $.post("/produtos/carrinho", {
      "product"   : product_id,
      "quantity"  : 1,
    }, function (data) {
      console.log(data)
      if (data == "ok") {
        alert("Produto adicionado a sacola!");
      }
    });
  
  })
})