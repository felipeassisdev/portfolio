const frases = [
    "Olá! Tudo bem?",
    "Desenvolvedor Front-End",
    "Transformando ideias em experiências visuais.",
    "Criando interfaces com alma e propósito.",
    "Apaixonado por design limpo e funcional.",
    "Fazendo mágica com HTML, CSS e JAVASCRIPT",
    "Sempre aprendendo, sempre construindo.",
    "Minimalismo com impacto? Tô dentro.",
    "Código com estilo, sites com identidade.",
    "Criatividade é meu framework favorito!",
    "Desenvolvimento com visão e personalidade."
];

const elemento = document.querySelector("#typed");
let fraseIndex = 0;
let i = 0;
let apagando = false;

function digitarOuApagar() {
    const texto = frases[fraseIndex];

    if (!apagando) {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            apagando = true;
            setTimeout(digitarOuApagar, 1000);
            return;
        }
    } else {
        if (i > 0) {
            elemento.innerHTML = texto.substring(0, i - 1);
            i--;
        } else {
            apagando = false;
            fraseIndex = (fraseIndex + 1) % frases.length;
        }
    }

    setTimeout(digitarOuApagar, 50);
}

digitarOuApagar();
