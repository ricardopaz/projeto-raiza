document.getElementById("buttonMenu").addEventListener("click", function () {
  const boxSearch = document.getElementById("boxSearch");
  const boxList = document.getElementById("boxList");
  const iconMenu = document.getElementById("iconMenu");
  iconMenu.classList.add("hidden");
  const styleBoxSearch = window.getComputedStyle(boxSearch);
  if (styleBoxSearch.display === "none") {
    boxSearch.style.display = "block";
    boxList.classList.remove("box-list-open");
    boxList.classList.add("box-list");
    setTimeout(() => {
      if (iconMenu.classList.contains("bi-list")) {
        iconMenu.classList.remove("bi-list");
        iconMenu.classList.add("bi-x-lg");
      } else {
        iconMenu.classList.remove("bi-x-lg");
        iconMenu.classList.add("bi-list");
      }
      iconMenu.classList.remove("hidden");
    }, 300); // Tempo igual à duração da transição
  } else {
    //Aparece a lista e some a barra de pesquisa
    boxSearch.style.display = "none";

    boxList.classList.remove("box-list");
    boxList.classList.add("box-list-open");
    setTimeout(() => {
      if (iconMenu.classList.contains("bi-list")) {
        iconMenu.classList.remove("bi-list");
        iconMenu.classList.add("bi-x-lg");
      } else {
        iconMenu.classList.remove("bi-x-lg");
        iconMenu.classList.add("bi-list");
      }
      iconMenu.classList.remove("hidden");
    }, 200);
  }
});

document.getElementById("inputSearch").addEventListener("input", function () {
  const letra = document.getElementById("inputSearch").value;

  const icon = document.getElementById("iconSearch");
  if (letra.trim() !== "") {
    icon.classList.remove("bi");
    icon.classList.remove("bi-search");
  }
  if (
    letra.trim() === "" &&
    !icon.classList.contains("bi") &&
    !icon.classList.contains("bi-search")
  ) {
    icon.classList.add("bi");
    icon.classList.add("bi-search");
  }
});

function verificarLarguraTela() {
  var largura = window.innerWidth;
  const boxList = document.getElementById("boxList");
  const iconMenu = document.getElementById("iconMenu");
  const boxSearch = document.getElementById("boxSearch");

  // Aqui você pode adicionar sua lógica específica
  if (largura > 991) {
    console.log("oi");
    if (boxList.classList.contains("box-list-open")) {
      boxSearch.style.display = "block";
      boxList.classList.remove("box-list-open");
      boxList.classList.add("box-list");
      iconMenu.classList.remove("bi-x-lg");
      iconMenu.classList.add("bi-list");
    }
    boxList.style.display = "block";
  }
}

// Chame a função ao carregar a página
window.onload = verificarLarguraTela;
window.onresize = verificarLarguraTela;

let counter = localStorage.getItem("cartItems")
  ? parseInt(localStorage.getItem("cartItems"))
  : 0;

// Atualiza o valor inicial do carrinho na página
document.getElementById("item-bag").innerText = counter;

const buttons = document.querySelectorAll(".productBag");
const boxItemBag = document.getElementById("box-item-bag");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    counter++; // Incrementa o valor do contador
    document.getElementById("item-bag").innerText = counter; // Atualiza o valor no HTML
    localStorage.setItem("cartItems", counter); // Salva o novo valor no localStorage
    displayBoxItemBag();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  });
});

$(document).ready(function () {
  console.log("Jquery ready")
  $(".productBag").click(function () {
    const product_id = $(this).attr("data-id");
    // Sending data the the PHP server
    $.post("produtos/carrinho", {
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

if (counter > 0) {
  boxItemBag.style.display = "flex";
} else {
  console.log("tou aq");
  boxItemBag.style.display = "none";
}

function displayBoxItemBag() {
  if (counter > 0) {
    boxItemBag.style.display = "flex";
  } else {
    console.log("euu");
    boxItemBag.style.display = "none";
  }
}
