window.addEventListener('load', () => {
  setTimeout(() => {
    const screen = document.getElementById('loading-screen');
    screen.classList.add('hidden');
    setTimeout(() => screen.remove(), 500);
  }, 1500);
});

const revelar = ScrollReveal({
    origin: 'bottom', // Origem da animação
    distance: '50px', // Distância da animação
    duration: 800,   // Duração em milissegundos
    reset: true      // Se a animação repete ao scrollar de volta
});

revelar.reveal('.box-sobre', {// revelar.reveal() serve para animar elementos conforme o usuário rola a página
    delay: 400
});

revelar.reveal('.box', {// revelar.reveal() serve para animar elementos conforme o usuário rola a página
    delay: 400
});

revelar.reveal('.meio-circulo', {// '.meio-circulo' são Classes que servem apenas para identificar quais elementos do HTML serão afetados.
    delay: 400 // delay tempo de espera antes da animação iniciar
})


revelar.reveal('.quadrado-amarelo', {
    delay: 400
})


revelar.reveal('.bolinhas', {
    delay: 400
})

revelar.reveal('.imageBox', {
    delay: 600
});

revelar.reveal('.circulo', {
    delay: 400
});

revelar.reveal('.idea', {
    delay: 400
})

revelar.reveal('.target', {
    delay: 600
})

revelar.reveal('.people', {
    delay: 800
})

revelar.reveal('.card', {
    delay: 400
})

revelar.reveal('.row', {
    delay: 400
})

revelar.reveal('.quadro1', {
    delay: 400
})
revelar.reveal('.quadro2', {
    delay: 600
})
revelar.reveal('.quadro3', {
    delay: 800
})
revelar.reveal('.quadro4', {
    delay: 1000
})

/* ========================= */
/* LOADING SCREEN */
/* ========================= */

document.body.classList.add("loading");

window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.classList.add("fade-out");

        document.body.classList.remove("loading");

    }, 1200);

});