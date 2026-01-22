const perguntas = [
  {
    pergunta: "No número 405, o algarismo 0 serve para:",
    alternativas: ["Representar cinco unidades", "Indicar que não há dezenas", "Aumentar o valor do número", "Representar centenas"],
    correta: 1
  },
  {
    pergunta: "Qual número representa 3 centenas, 0 dezenas e 8 unidades?",
    alternativas: ["308", "380", "38", "3008"],
    correta: 0
  },
  {
    pergunta: "Qual figura plana possui quatro lados iguais e quatro ângulos retos?",
    alternativas: ["Triângulo", "Círculo", "Retângulo", "Quadrado"],
    correta: 3
  },
  {
    pergunta: "A figura que não possui lados nem vértices é o:",
    alternativas: ["Quadrado", "Triângulo", "Retângulo", "Círculo"],
    correta: 3
  },
  {
    pergunta: "Qual é a ordem correta, do menor para o maior número?",
    alternativas: ["450 – 320 – 610", "320 – 450 – 610", "610 – 450 – 320", "450 – 610 – 320"],
    correta: 1
  },
  {
    pergunta: "O número 732 escrito por extenso é:",
    alternativas: ["Setecentos e trinta e dois", "Setenta e três e dois", "Setecentos e vinte e três", "Seiscentos e trinta e dois"],
    correta: 0
  },
  {
    pergunta: "Quanto é 358 + 247?",
    alternativas: ["505", "595", "605", "615"],
    correta: 2
  },
  {
    pergunta: "Calcule: 800 − 356",
    alternativas: ["454", "444", "456", "544"],
    correta: 1
  },
  {
    pergunta: "Maçã: 20, Banana: 35, Laranja: 15. Qual fruta foi mais vendida?",
    alternativas: ["Maçã", "Laranja", "Banana", "Todas igualmente"],
    correta: 2
  },
  {
    pergunta: "No mesmo gráfico de frutas, qual foi a menos vendida?",
    alternativas: ["Banana", "Maçã", "Laranja", "Todas igualmente"],
    correta: 2
  }
];

let indice = 0;
let estrelas = 0;

function mostrarPergunta() {
    const atual = perguntas[indice];
    const perguntaEl = document.getElementById("pergunta");
    const alternativasEl = document.getElementById("alternativas");
    const feedbackEl = document.getElementById("feedback");
    const barra = document.getElementById("barra-progresso");
    const btnProximo = document.getElementById("btnProximo");

    if (perguntaEl) perguntaEl.innerText = atual.pergunta;
    if (feedbackEl) feedbackEl.innerHTML = "";
    if (btnProximo) btnProximo.style.display = "none";

    // Barra de progresso usando CRASE correta
    if (barra) {
        const progresso = (indice / perguntas.length) * 100;
        barra.style.width =`${progresso}%`;
    }

    if (alternativasEl) {
        alternativasEl.innerHTML = "";
        atual.alternativas.forEach((texto, i) => {
            const btn = document.createElement("button");
            btn.innerText = texto;
            btn.className = "alternativa";
            btn.onclick = () => verificar(i);
            alternativasEl.appendChild(btn);
        });
    }
}

function verificar(escolha) {
    const botoes = document.querySelectorAll(".alternativa");
    botoes.forEach(b => b.disabled = true);
    
    const feedbackEl = document.getElementById("feedback");
    const pontuacaoEl = document.getElementById("pontuacao");

    if (escolha === perguntas[indice].correta) {
        feedbackEl.innerHTML = "<b style='color:green'>Incrível! +1 Estrela 🌟</b>";
        estrelas++;
        // Pontuação usando CRASE correta
        if (pontuacaoEl) pontuacaoEl.innerText =`🌟 Estrelas: ${estrelas}`;
    } else {
        feedbackEl.innerHTML = "<b style='color:red'>Quase! Continue tentando! 💪</b>";
    }
    
    const btnProximo = document.getElementById("btnProximo");
    if (btnProximo) btnProximo.style.display = "block";
}

function proximaPergunta() {
    indice++;
    if (indice < perguntas.length) {
        mostrarPergunta();
    } else {
        const quizArea = document.getElementById("quiz");
        if (quizArea) {
            // Resultado final usando CRASE correta
            quizArea.innerHTML =`<h2>Missão Cumprida! 🚀</h2><p>Você conquistou ${estrelas} de ${perguntas.length} estrelas!</p>`;
        }
        btnProximo.innerText="Tentar Novamente";
        btnProximo.onclick=()=> location.reload();
        btnProximo.style.display="block";
    }
}

// Inicia o quiz
window.onload = mostrarPergunta;