const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
 {
      enunciado: "Insira o enunciado da Pergunta 1",
      alternativa: ["Alternativas 1","Alternativas 2" ]
 },
 {
    enuciado: "insira o enunciado da Pergunta 2",
    alternativas: ["Alternativas 1","Alternativas 2"]
  },
  {
    enuciado: "insira o enunciado da Pergunta 3",
    alternativas: ["Alternativas 1","Alternativas 2"]
  }
];

let atual = 0;