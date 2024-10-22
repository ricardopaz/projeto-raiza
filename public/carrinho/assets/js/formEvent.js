async function handleFormSubmit(event) {
  event.preventDefault(); // Impede o comportamento padrão do form

  // Coletar os dados do formulário
  const formData = new FormData(event.target);
  /*
  try {
    // Enviar os dados para o outro arquivo PHP
    const response = await fetch("processa_form.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.text(); // Pode ser .json() se o PHP retornar JSON
      alert("Resposta do servidor: " + result);
    } else {
      alert("Erro ao enviar o formulário!");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
    */
}
