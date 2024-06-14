const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
 {
      enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem gera imagens e audios hiper-realista. Qual o primeiro oensamento?",
      alternativa: ["Isso é assustador!","Isso é maravilhoso!" ]
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