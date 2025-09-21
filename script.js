// Animasi fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
  }, 100);
});

// Hover effect pada menu-card
const cards = document.querySelectorAll(".menu-card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "#fcecdc";
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "#fff";
  });
});