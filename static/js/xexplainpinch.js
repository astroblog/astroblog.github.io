document.addEventListener("DOMContentLoaded", function () {
    if (!window.matchMedia("(any-hover: hover)").matches) {
      let infoElement = document.createElement("i");
      infoElement.innerHTML = `<small><font color="fuchsia">(Pinch-zoom out to enlarge image.)</font></small><br>`;
  
      let target = document.getElementById("explainpinch-target"); // Placeholder div in your HTML
      if (target) {
        target.appendChild(infoElement);
      }
    }
  });
  