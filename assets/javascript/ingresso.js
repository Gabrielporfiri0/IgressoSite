document.addEventListener('DOMContentLoaded', () => {
  const assentos = document.querySelectorAll('.assento:not(.indisponivel)');

  assentos.forEach((assento) => {
    assento.addEventListener('click', () => {
      assento.classList.toggle('selecionado');
    });
  });
});
