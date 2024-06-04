document.addEventListener("DOMContentLoaded", function () {
  const bulle = document.getElementById("bulleBD");
  bulle.classList.remove("hidden");

  // Ajouter l'événement pour fermer la bulle
  document.querySelector(".close").addEventListener("click", function () {
    bulle.classList.add("hidden");
  });
});
