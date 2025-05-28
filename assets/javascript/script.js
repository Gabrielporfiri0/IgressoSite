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
  