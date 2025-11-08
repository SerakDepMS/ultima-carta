// Crear corazones flotantes
function createHearts() {
  const heartsContainer = document.getElementById("hearts-container");
  const heartCount = 25;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 15 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.color = `rgba(232, 67, 147, ${Math.random() * 0.5 + 0.3})`;

    heartsContainer.appendChild(heart);
  }
}

// Crear pétalos de rosa flotantes
function createPetals() {
  const petalsContainer = document.getElementById("petals-container");
  const petalCount = 15;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 12 + "s";
    petal.style.fontSize = Math.random() * 15 + 10 + "px";

    petalsContainer.appendChild(petal);
  }
}

// Efecto de confeti
function createConfetti() {
  const colors = [
    "#e84393",
    "#0984e3",
    "#00b894",
    "#fdcb6e",
    "#6c5ce7",
    "#a29bfe",
  ];
  const confettiCount = 200;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 8 + "px";
    confetti.style.height = Math.random() * 10 + 8 + "px";
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

    document.body.appendChild(confetti);

    // Eliminar el confeti después de que termine la animación
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.remove();
      }
    }, 5000);
  }
}

// Control de música mejorado
function setupMusicPlayer() {
  const audio = document.getElementById("love-song");
  const playBtn = document.getElementById("play-btn");
  const muteBtn = document.getElementById("mute-btn");
  let isPlaying = false;

  playBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      audio.play().catch((e) => {
        console.log("La reproducción automática fue bloqueada: ", e);
        alert(
          "Por favor, haz clic en cualquier parte de la página para permitir la reproducción de música."
        );
      });
      playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  });

  muteBtn.addEventListener("click", function () {
    if (audio.muted) {
      audio.muted = false;
      muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      audio.muted = true;
      muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });

  // Actualizar información de la canción
  updateSongInfo();
}

// Actualizar información de la canción
function updateSongInfo() {
  // Aquí puedes personalizar el título y artista
  document.getElementById("song-title").textContent = "Star Shopping";
  document.getElementById("song-artist").textContent = "Lil Peep";
}

// Efecto cuando hace clic en "Sí"
function setupYesButton() {
  const yesBtn = document.getElementById("yes-btn");

  yesBtn.addEventListener("click", function () {
    createConfetti();

    // Cambiar el contenido de la página
    setTimeout(() => {
      document.querySelector(".header h1").innerHTML =
        '¡TE AMO! <span class="heart">❤</span>';
      document.querySelector(".header p").textContent =
        "Eres la mejor decisión de mi vida";
      document.querySelector(".final-message .message-bubble").innerHTML = `
                <p>¡Gracias por darnos otra oportunidad!</p>
                <p>Prometo que este nuevo comienzo será lleno de amor, respeto y felicidad.</p>
                <p class="question">TE AMO MÁS QUE A NADA EN ESTE MUNDO</p>
            `;

      // Cambiar los botones
      yesBtn.innerHTML = '<i class="fas fa-heart"></i><span>TE AMO</span>';
      yesBtn.style.background = "linear-gradient(to right, #e84393, #d63031)";

      const noBtn = document.getElementById("no-btn");
      noBtn.style.display = "none";

      // Crear más corazones
      createHearts();
    }, 500);

    // Mostrar mensaje romántico
    setTimeout(() => {
      alert(
        "¡Gracias, mi amor! Eres la persona más importante en mi vida y prometo hacerte feliz cada día. Te amo con todo mi corazón."
      );
    }, 1000);
  });
}

// Efecto cuando hace clic en "Necesito pensarlo"
function setupNoButton() {
  const noBtn = document.getElementById("no-btn");

  noBtn.addEventListener("click", function () {
    // Crear un efecto de tristeza
    const container = document.querySelector(".container");
    container.style.transform = "scale(0.95)";
    container.style.opacity = "0.9";

    setTimeout(() => {
      container.style.transform = "scale(1)";
      container.style.opacity = "1";
    }, 300);

    // Mostrar mensaje
    alert(
      "Entiendo y respeto tu decisión. Tomate el tiempo que necesites, estaré aquí esperando porque sé que nuestro amor vale la pena. Te amo."
    );
  });
}

// Inicializar la página cuando se carga
document.addEventListener("DOMContentLoaded", function () {
  createHearts();
  createPetals();
  setupMusicPlayer();
  setupYesButton();
  setupNoButton();

  // Permitir la reproducción de música con un clic en cualquier parte
  document.body.addEventListener(
    "click",
    function () {
      const audio = document.getElementById("love-song");
      // Solo intentar reproducir si no está ya reproduciendo
      if (audio.paused) {
        audio.play().catch((e) => {
          console.log("La reproducción automática fue bloqueada");
        });
      }
    },
    { once: true }
  );
});
