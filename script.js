// Script simple : exemple d'effet sur l'envoi du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message envoyé !");
});



  // Bouton retour en haut
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

