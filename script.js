const caixaprincipal = document.querySelector('.caixa-principal')
const caixaperguntas = document.querySelector('.caixa-perguntas')
const caixaalternativas = document.querySelector('.caixa-alternativas')
const caixaresultados = document.querySelector('.caixa-resultado')
const textoresultados = document.querySelector('.texto-resultado')

const perguntas = [

    {
        enunciado: "no ambito social, voce prefere:",
        alternativas:
            [

                {
                    texto: "ter tudo o que voce sempre quis na vida em troca de 20 anos de vida",
                    afirmação: "afirmação1 ",
                },

                {
                    texto: "ganhar 20 anos de vida mas não terá tudo que deseja alcançar na vida",
                    afirmação: "afirmação2 ",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: "acabar com o desmatamento na amazonia porem haveria 1 ano de extrema seca no brasil",
                    afirmação: "afirmação1 ",
                },

                {
                    texto: "chover no nordeste porem o desmatamento da amazonia avançaria 2 vezes mais",
                    afirmação: "afirmação2 ",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: "a tecnologia avançar em um nível as pessoas não precisem fazer esforços físicos porém todos os seus dados e vida pessoal serão expostos ",
                    afirmação: "afirmação1 ",
                },

                {
                    texto: "A tecnologia encontrar a cura para todas as doenças porém começaram a ser criados robôs para exilar a humanidade ",
                    afirmação: "afirmação2 ",
                }]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaalternativas.appendChild(botaoAlternativa);

    }

}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmação;
    historiaFinal += afirmacoes + '';
    atual++;
    mostraPerguntas();
}

function mostraResultado() {
    caixaperguntas.textContent = 'em resumo, voce escolheu...';
    textoresultados.textContent = historiaFinal;
    caixaalternativas.textContent = '';
}

mostraPerguntas();