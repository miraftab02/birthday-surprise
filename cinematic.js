/* Small, dependency-free animations for the final journey page. */
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".journey-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
});
