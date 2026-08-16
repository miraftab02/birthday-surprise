/* =================================
   BIRTHDAY SURPRISE — JAVASCRIPT
   ================================= */

document.addEventListener("DOMContentLoaded", () => {
  const type = (element, text, speed = 45) => {
    if (!element) return;
    let i = 0;
    const write = () => {
      if (i < text.length) {
        element.textContent += text[i++];
        setTimeout(write, speed);
      }
    };
    write();
  };

  type(
    document.getElementById("homeTyping"),
    "Some things are easier to say when you build a little birthday world for them. 💗",
    38
  );

  type(
    document.getElementById("birthdayTyping"),
    "I hope today gives you a hundred reasons to smile. Thank you for being someone whose presence can make ordinary moments feel special. Happy Birthday — now make a wish, because this little surprise is only the beginning. 🎂",
    28
  );

  /* ---------- Candle blowing / celebration ---------- */
  const confettiBtn = document.getElementById("confettiBtn");
  const cake = document.getElementById("birthdayCake");
  const nextBtn = document.getElementById("nextSurpriseBtn");
  const blowNote = document.getElementById("blowNote");

  if (confettiBtn && cake && nextBtn) {
    confettiBtn.addEventListener("click", () => {
      if (cake.classList.contains("cake-blown")) return;

      cake.classList.add("cake-blown");
      confettiBtn.classList.add("blowing");
      confettiBtn.textContent = "🎉 Wish Made!";
      blowNote.textContent = "The candles are out! Your next surprise is unlocked. 💕";
      nextBtn.classList.add("unlocked");

      createCelebrationConfetti();
      createHearts();

      setTimeout(() => {
        confettiBtn.classList.remove("blowing");
      }, 700);
    });
  }

  /* ---------- Gallery lightbox ---------- */
  const cards = document.querySelectorAll(".photo-card");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const close = document.getElementById("lightboxClose");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!lightbox) return;
      const img = card.querySelector("img");
      if (!img || !lightboxImage || !lightboxTitle) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = card.dataset.title || "Memory";
      lightboxTitle.textContent = card.dataset.title || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };

  close?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  /* ---------- YES-only proposal ---------- */
  const yesBtn = document.getElementById("yesBtn");
  const answer = document.getElementById("answer");

  yesBtn?.addEventListener("click", () => {
    if (yesBtn.disabled) return;

    answer.textContent = "Yay! 💖 You said YES — opening our little journey... ✨";
    createHearts();
    createCelebrationConfetti();

    yesBtn.disabled = true;
    yesBtn.textContent = "Opening the next surprise… 💗";

    setTimeout(() => {
      window.location.href = "journey.html";
    }, 1800);
  });

  function createCelebrationConfetti() {
    let layer = document.getElementById("confettiLayer");

    if (!layer) {
      layer = document.createElement("div");
      layer.id = "confettiLayer";
      layer.setAttribute("aria-hidden", "true");
      document.body.appendChild(layer);
    }

    const pieces = ["#ff7899", "#ffd166", "#ffdbe4", "#ffffff", "#c99ab0"];

    for (let i = 0; i < 120; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.setProperty("--x", (Math.random() * 280 - 140) + "px");
      piece.style.animationDelay = Math.random() * 0.65 + "s";
      piece.style.background = pieces[Math.floor(Math.random() * pieces.length)];
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      layer.appendChild(piece);
      setTimeout(() => piece.remove(), 3600);
    }
  }

  function createHearts() {
    const layer = document.getElementById("heartLayer");
    if (!layer) return;

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("span");
      heart.className = "heart";
      heart.textContent = ["♥", "♡", "✦"][Math.floor(Math.random() * 3)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDelay = Math.random() * .8 + "s";
      heart.style.fontSize = (16 + Math.random() * 20) + "px";
      layer.appendChild(heart);
      setTimeout(() => heart.remove(), 4500);
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
