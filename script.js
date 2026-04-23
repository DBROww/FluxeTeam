const revelar = ScrollReveal({
    origin: 'bottom', // Origem da animação
    distance: '50px', // Distância da animação
    duration: 1000,   // Duração em milissegundos
    reset: false      // Se a animação repete ao scrollar de volta
});

revelar.reveal('.box', {
    delay: 400
});


revelar.reveal('.imageBox', {
    delay: 600
});