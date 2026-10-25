document.addEventListener("DOMContentLoaded", () => {
  const indicator = document.getElementById("scroll-indicator");

  if (!indicator) return;

  function updateIndicator() {
    const scrollPosition =
      window.scrollY + window.innerHeight;

    const documentHeight =
      document.documentElement.scrollHeight;

    const hasMoreContent =
      documentHeight - scrollPosition > 10;

    indicator.classList.toggle(
      "visible",
      hasMoreContent
    );
  }

  window.addEventListener("scroll", updateIndicator);
  window.addEventListener("resize", updateIndicator);

  updateIndicator();
});