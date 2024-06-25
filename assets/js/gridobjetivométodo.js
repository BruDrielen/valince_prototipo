
    let currentIndex = 0;

    function scrollCards(direction) {
        const cards = document.querySelectorAll('.card');
        const cardContainer = document.querySelector('.grid-container');

        currentIndex += direction;

        // Garante que o índice permaneça dentro dos limites
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        } else if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        const cardWidth = cards[0].offsetWidth + 20; // Largura do card mais espaçamento

        cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }