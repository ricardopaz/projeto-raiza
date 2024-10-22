const toggleButton = document.getElementById("toggleButton");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

// Função para animar a saída de um conteúdo e entrada de outro
function toggleContent() {
  if (text1.style.display !== "none") {
    // Animação de saída para o primeiro conteúdo
    gsap.to(text1, {
      duration: 0.5,
      opacity: 0,
      x: -100,
      onComplete: () => {
        text1.style.display = "none";
        text2.style.display = "block";

        // Animação de entrada para o segundo conteúdo
        gsap.fromTo(
          text2,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  } else {
    // Animação de saída para o segundo conteúdo
    gsap.to(text2, {
      duration: 0.5,
      opacity: 0,
      x: 100,
      onComplete: () => {
        text2.style.display = "none";
        text1.style.display = "block";

        // Animação de entrada para o primeiro conteúdo
        gsap.fromTo(
          text1,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  }
}

// Adiciona evento de clique ao botão
toggleButton.addEventListener("click", toggleContent);
