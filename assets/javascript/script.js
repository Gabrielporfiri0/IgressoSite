document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".filme-banner");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let index = 0;
    const total = slides.length;
    const intervalTime = 10000; // 5 segundos
  
    // Função para atualizar a posição do carrossel
    function updateCarousel() {
      const offset = -index * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }
  
    // Botão próximo
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      updateCarousel();
    });
  
    // Botão anterior
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      updateCarousel();
    });
  
    // Auto-play
    setInterval(() => {
      index = (index + 1) % total;
      updateCarousel();
    }, intervalTime);
  });
  
 

document.addEventListener("DOMContentLoaded", () => {
  const assentos = document.querySelectorAll(".assento:not(.indisponivel)");
  const listaAssentos = document.getElementById("assentos-selecionados");
  const valorTotal = document.getElementById("valor-total");
  const confirmarBtn = document.getElementById("confirmar-compra");

  let assentosSelecionados = [];
  const precoIngresso = 20.0;

  assentos.forEach((assento) => {
    assento.addEventListener("click", () => {
      const nome = assento.getAttribute("aria-label");

      if (assento.classList.contains("selecionado")) {
        assento.classList.remove("selecionado");
        assentosSelecionados = assentosSelecionados.filter((a) => a !== nome);
      } else {
        assento.classList.add("selecionado");
        assentosSelecionados.push(nome);
      }

      atualizarResumo();
    });
  });

  function atualizarResumo() {
  const resumoSelecionados = document.getElementById("resumo-selecionados");

  if (assentosSelecionados.length === 0) {
    listaAssentos.textContent = "Nenhum assento selecionado";
    valorTotal.textContent = "0,00";
  } else {
    listaAssentos.textContent = assentosSelecionados.join(", ");
    valorTotal.textContent = (assentosSelecionados.length * precoIngresso)
      .toFixed(2)
      .replace(".", ",");
  }

  resumoSelecionados.textContent = `Assentos selecionados: ${assentosSelecionados.length}`;
}


  confirmarBtn.addEventListener("click", () => {
    if (assentosSelecionados.length === 0) {
      alert("Selecione pelo menos um assento antes de confirmar.");
      return;
    }

    alert(
      `Compra confirmada!\nAssentos: ${assentosSelecionados.join(", ")}\nTotal: R$ ${(
        assentosSelecionados.length * precoIngresso
      )
        .toFixed(2)
        .replace(".", ",")}`
    );

    // Simulação de reset
    assentos.forEach((a) => a.classList.remove("selecionado"));
    assentosSelecionados = [];
    atualizarResumo();
  });
});

