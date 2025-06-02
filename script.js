const exercicios = [
    "Agachamento com peso corporal",
    "Flexão de braço",
    "Prancha 30s",
    "Abdominal bicicleta",
    "Burpees",
    "Corrida estacionária",
    "Avanço alternado",
    "Mountain climbers",
    "Ponte (glute bridge)",
    "Polichinelo",
    "Salto lateral",
    "Joelho alto",
    "Prancha lateral",
    "Elevação de perna"
  ];

  const temposPermitidos = [10, 20, 30, 40, 50, 60];

  function gerarTreino() {
    const tempo = parseInt(document.getElementById("tempo").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(tempo) || tempo < 5) {
      resultado.innerHTML = "<p>⛔ Por favor, insira um tempo válido (mínimo 5 minutos).</p>";
      return;
    }

    if (!temposPermitidos.includes(tempo)) {
      resultado.innerHTML = `<p>⛔ Não há treino programado para <strong>${tempo} minutos</strong>. Tente: ${temposPermitidos.join(", ")} minutos.</p>`;
      return;
    }

    const numExercicios = Math.floor(tempo / 3);
    let treino = [];

    while (treino.length < numExercicios) {
      const aleatorio = exercicios[Math.floor(Math.random() * exercicios.length)];
      if (!treino.includes(aleatorio)) treino.push(aleatorio);
    }

    let html = `<h3>🎯 Treino do Dia (${tempo} minutos)</h3><ul>`;
    treino.forEach(ex => {
      html += `<li>${ex}</li>`;
    });
    html += `</ul>`;

    resultado.innerHTML = html;
    document.getElementById("resetar").style.display = "block";
  }

  function resetarFormulario() {
    document.getElementById("tempo").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resetar").style.display = "none";
  }