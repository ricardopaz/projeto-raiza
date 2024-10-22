const toggleButton = document.getElementById("buttonFinish");
const buttonAdvance = document.getElementById("buttonAdvance");
const buttonBack = document.getElementById("buttonBack");

const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");
const thirdScreen = document.getElementById("third-screen");

const borderBoxIcon = document.getElementById("box-second-icon");
const borderThirdIcon = document.getElementById("box-third-icon");
const borderFourthIcon = document.getElementById("box-fourth-icon");

const secondIcon = document.getElementById("second-icon");
const thirdIcon = document.getElementById("third-icon");
const fourthIcon = document.getElementById("fourth-icon");

const secondHr = document.getElementById("second-hr");
const thirdHr = document.getElementById("third-hr");

// Função para animar a saída de um conteúdo e entrada de outro

function backPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Adiciona um efeito de rolagem suave
  });
  if (
    firstScreen.style.display === "none" &&
    secondScreen.style.display === "block"
  ) {
    gsap.to(secondScreen, {
      duration: 0.5,
      opacity: 0,
      x: 100,
      onComplete: () => {
        secondScreen.style.display = "none";
        firstScreen.style.display = "flex";
        buttonBack.style.display = "none";

        // Animação de entrada para o primeiro conteúdo
        gsap.fromTo(
          buttonBack,
          { autoAlpha: 1 }, // autoAlpha controla opacidade + visibilidade
          { autoAlpha: 0, duration: 0.3 }
        );

        gsap.fromTo(
          firstScreen,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );

        gsap.fromTo(
          borderBoxIcon,
          { borderColor: "transparent" },
          { borderColor: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          secondIcon,
          { color: "#7fd8e7" },
          { color: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          secondHr,
          { backgroundColor: "#7fd8e7" },
          { backgroundColor: "#ccc", duration: 0.3 }
        );

        gsap.fromTo(
          borderThirdIcon,
          { borderColor: "#ff69b4" },
          { borderColor: "transparent", duration: 0.3 }
        );

        gsap.fromTo(
          thirdIcon,
          { color: "#ff69b4" },
          { color: "#d7d7d7", duration: 0.3 }
        );
      },
    });
  } else {
    gsap.to(thirdScreen, {
      duration: 0.5,
      opacity: 0,
      x: 100,
      onComplete: () => {
        thirdScreen.style.display = "none";
        secondScreen.style.display = "block";

        // Animação de entrada para o segundo conteúdo
        gsap.fromTo(
          secondScreen,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );

        gsap.fromTo(
          borderThirdIcon,
          { borderColor: "transparent" },
          { borderColor: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          thirdIcon,
          { color: "#7fd8e7" },
          { color: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          borderFourthIcon,
          { borderColor: "#ff69b4" },
          { borderColor: "transparent", duration: 0.3 }
        );

        gsap.fromTo(
          thirdHr,
          { backgroundColor: "#7fd8e7" },
          { backgroundColor: "#ccc", duration: 0.3 }
        );

        gsap.fromTo(
          fourthIcon,
          { color: "#ff69b4" },
          { color: "#d7d7d7", duration: 0.3 }
        );
      },
    });
  }
}

function toggleContent() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Adiciona um efeito de rolagem suave
  });
  if (
    firstScreen.style.display === "none" &&
    secondScreen.style.display === "block"
  ) {
    gsap.to(secondScreen, {
      duration: 0.5,
      opacity: 0,
      x: -100,
      onComplete: () => {
        secondScreen.style.display = "none";
        thirdScreen.style.display = "flex";

        // Animação de entrada para o segundo conteúdo
        gsap.fromTo(
          thirdScreen,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );

        gsap.fromTo(
          borderThirdIcon,
          { borderColor: "#ff69b4" },
          { borderColor: "transparent", duration: 0.3 }
        );

        gsap.fromTo(
          thirdIcon,
          { color: "#ff69b4" },
          { color: "#7fd8e7", duration: 0.3 }
        );

        gsap.fromTo(
          borderFourthIcon,
          { borderColor: "transparent" },
          { borderColor: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          thirdHr,
          { backgroundColor: "#ccc" },
          { backgroundColor: "#7fd8e7", duration: 0.3 }
        );

        gsap.fromTo(
          fourthIcon,
          { color: "#d7d7d7" },
          { color: "#ff69b4", duration: 0.3 }
        );
      },
    });
    redirectSecond();
    return;
  }

  if (firstScreen.style.display !== "none") {
    // Animação de saída para o primeiro conteúdo
    gsap.to(firstScreen, {
      duration: 0.5,
      opacity: 0,
      x: -100,
      onComplete: () => {
        firstScreen.style.display = "none";
        secondScreen.style.display = "block";
        buttonBack.style.display = "block";
        itemsBag();

        // Animação de entrada para o segundo conteúdo
        gsap.fromTo(
          secondScreen,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );

        gsap.fromTo(
          buttonBack,
          { autoAlpha: 0 }, // autoAlpha controla opacidade + visibilidade
          { autoAlpha: 1, duration: 0.3 }
        );

        gsap.fromTo(
          borderBoxIcon,
          { borderColor: "#ff69b4" },
          { borderColor: "transparent", duration: 0.3 }
        );

        gsap.fromTo(
          secondIcon,
          { color: "#ff69b4" },
          { color: "#7fd8e7", duration: 0.3 }
        );

        gsap.fromTo(
          secondHr,
          { backgroundColor: "#ccc" },
          { backgroundColor: "#7fd8e7", duration: 0.3 }
        );

        gsap.fromTo(
          borderThirdIcon,
          { borderColor: "transparent" },
          { borderColor: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          thirdIcon,
          { color: "#d7d7d7" },
          { color: "#ff69b4", duration: 0.3 }
        );
      },
    });
  } else {
    // Animação de saída para o segundo conteúdo
    gsap.to(secondScreen, {
      duration: 0.5,
      opacity: 0,
      x: 100,
      onComplete: () => {
        secondScreen.style.display = "none";
        firstScreen.style.display = "flex";

        // Animação de entrada para o primeiro conteúdo
        gsap.fromTo(
          firstScreen,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );

        gsap.fromTo(
          borderBoxIcon,
          { borderColor: "transparent" },
          { borderColor: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          secondIcon,
          { color: "#7fd8e7" },
          { color: "#ff69b4", duration: 0.3 }
        );

        gsap.fromTo(
          secondHr,
          { backgroundColor: "#7fd8e7" },
          { backgroundColor: "#ccc", duration: 0.3 }
        );

        gsap.fromTo(
          borderThirdIcon,
          { borderColor: "#ff69b4" },
          { borderColor: "transparent", duration: 0.3 }
        );

        gsap.fromTo(
          thirdIcon,
          { color: "#ff69b4" },
          { color: "#d7d7d7", duration: 0.3 }
        );
      },
    });
  }
}

// Adiciona evento de clique ao botão
toggleButton.addEventListener("click", toggleContent);
buttonAdvance.addEventListener("click", toggleContent);
buttonBack.addEventListener("click", backPage);
function redirectSecond() {
  const textSeconds = document.getElementById("textSeconds");
  let counter = 10; // Valor inicial do contador

  // Define o intervalo para diminuir o contador a cada segundo
  const interval = setInterval(function () {
    textSeconds.innerText = counter; // Atualiza o valor no HTML
    counter--; // Diminui o valor do contador

    // Para o contador quando chegar a zero
    if (counter < 0) {
      clearInterval(interval); // Cancela o intervalo
      textSeconds.innerText = "Se você não foi redirecionado clique aqui"; // Exibe uma mensagem
    }
  }, 1000); // A cada 1000 ms (1 segundo)
}

function itemsBag() {
  let items = localStorage.getItem("cartItems")
    ? parseInt(localStorage.getItem("cartItems"))
    : 0;
  const amountItem = document.getElementById("amountItem");
  const amountItemSpan = document.getElementById("amountItemSpan");

  if (items > 1) {
    amountItem.innerText = `(${items} itens)`;
  } else {
    amountItem.innerText = `(${items} item)`;
  }
  amountItemSpan.innerText = `(${items})`;
}

$(document).ready(function () {
  $("#wipe").click(function () {
    localStorage.clear();

    $.post("/carrinho/wipe", function (data) {
      console.log(data);
    });
  })
})