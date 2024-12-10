// Função para adicionar a classe de hover e alterar o ID do body
function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

// Função para remover a classe de hover e resetar o ID do body
function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

// Função para adicionar os listeners de evento aos cards
function addEventListenersToCards() {
  const cardElements = document.querySelectorAll('.s-card');

  cardElements.forEach(card => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
}

// Adiciona os event listeners após o carregamento do DOM
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// Função para selecionar o item do carrossel com base no botão clicado
function selectCarouselItem(selectedButtonElement) {
  const selectedItemId = Number(selectedButtonElement.id);
  const carousel = document.querySelector('.s-cards-carousel');
  
  // Calcula o ângulo de rotação com base no item selecionado
  const rotateYDeg = -120 * (selectedItemId - 1);
  const currentTransform = carousel.style.transform;
  const newTransform = currentTransform.includes('rotateY')
    ? currentTransform.replace(/rotateY\((-?\d+deg)\)/, `rotateY(${rotateYDeg}deg)`)
    : `rotateY(${rotateYDeg}deg)`;

  // Aplica a nova transformação ao carrossel
  carousel.style.transform = newTransform;

  // Atualiza o botão ativo
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }
  selectedButtonElement.classList.add('s-controller__button--active');
}
