
const botao = document.querySelector("#curtir");

botao.addEventListener("click", function() {

    const contador = botao.querySelector("span");

    // Aumenta o número de curtidas
    contador.textContent = Number(contador.textContent) + 1;

    // Reinicia a animação
    botao.classList.remove("clicado");

    void botao.offsetWidth;

    // Executa a animação
    botao.classList.add("clicado");

});

// ANIMAÇÃO AO DESCER A PÁGINA

const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visivel");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {

    observador.observe(elemento);

});
