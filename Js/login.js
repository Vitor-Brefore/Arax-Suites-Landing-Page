document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  // Adiciona um event listener para o link de Registro
  registerLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que o link faça ação padrão (navegar para o href)
    wrapper.classList.add("active"); // Ativa o wrapper
  });

  // Adiciona um event listener para o link de Login
  loginLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que o link faça ação padrão (navegar para o href)
    wrapper.classList.remove("active"); // Desativa o wrapper
  });

  // Event listener para fechar o formulário de registro (opcional)
  const closeIcon = document.querySelector(".icon-close");
  closeIcon.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });

  // Event listener para fechar o formulário de registro se clicar fora dele (opcional)
  document.addEventListener("click", function (event) {
    if (!wrapper.contains(event.target)) {
      wrapper.classList.remove("active");
    }
  });

  // Função para fechar o formulário de registro se clicar no botão "X"
  closeIcon.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });
});
