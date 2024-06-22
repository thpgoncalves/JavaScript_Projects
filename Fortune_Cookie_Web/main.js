// Variables
const btnReset = document.querySelector("#btnReset")
const btnOpen = document.querySelector("#btnOpen")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const frasesBiscoitoSorte = [
  "Acredite em si mesmo e tudo será possível.",
  "A felicidade está dentro de você.",
  "Siga seus sonhos e nunca desista.",
  "O melhor ainda está por vir.",
  "Cada dia é uma nova oportunidade.",
  "Seja grato pelo que você tem.",
  "Ajude os outros e você será ajudado.",
  "O amor é a força mais poderosa do universo.",
  "Perdoe aqueles que te machucaram.",
  "Viva o presente ao máximo.",
  "Confie na sua intuição.",
  "Os desafios te tornam mais forte.",
  "Nunca deixe de aprender.",
  "O tempo cura todas as feridas.",
  "A vida é uma jornada, aproveite cada passo.",
  "Você é capaz de realizar grandes coisas.",
  "Tenha fé em si mesmo.",
  "Não tenha medo de mudar.",
  "Seja positivo e otimista.",
  "Abra seu coração para o amor.",
  "Faça a diferença no mundo.",
  "Deixe sua marca.",
  "Viva a vida com paixão.",
  "Seja feliz!",
  "A sorte está do seu lado.",
  "Você encontrará o sucesso.",
  "Acredite nos seus sonhos.",
  "Tudo é possível se você acreditar.",
  "Nunca desista dos seus sonhos.",
  "Lute pelos seus objetivos.",
  "Você é capaz de conquistar tudo o que deseja.",
  "Tenha força e perseverança.",
  "Nunca perca a esperança.",
  "O futuro é brilhante para você.",
  "Acredite em si mesmo e você alcançará grandes coisas.",
];
let fraseAleatoria = frasesBiscoitoSorte[Math.round(Math.random() * frasesBiscoitoSorte.length)];


// Events
btnReset.addEventListener('click', handleResetClick)
btnOpen.addEventListener('click', handleOpenClick)


// Functions
function handleOpenClick() {
  toggle()

  screen2.querySelector("p").innerText = fraseAleatoria
}

function handleResetClick() {
  toggle()

  fraseAleatoria = frasesBiscoitoSorte[Math.round(Math.random() * frasesBiscoitoSorte.length)];
}

function toggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}