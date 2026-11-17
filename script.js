
const scene = document.getElementById("envelopeScene");
const envelope = document.getElementById("openEnvelope");
const instruction = document.getElementById("instruction");
const hearts = document.getElementById("hearts");

envelope.addEventListener("click", () => {
  if (scene.classList.contains("open")) return;

  scene.classList.add("open");

  instruction.textContent = "A little dua, just for you 💗";

  const emojis = ["💗", "💕", "🌸", "✨", "🦋"];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");

      heart.className = "heart";
      heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 14 + Math.random() * 18 + "px";
      heart.style.animationDuration = 3 + Math.random() * 3 + "s";

      hearts.appendChild(heart);

      heart.addEventListener("animationend", () => heart.remove());
    }, i * 100);
  }
});
