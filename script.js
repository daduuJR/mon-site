function afficherSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
}
// Fonctions cookie (à ajouter dans un <script> ou fichier JS)
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let c of ca) {
    c = c.trim();
    if (c.indexOf(cname) === 0) return c.substring(cname.length);
  }
  return "";
}

// Afficher le bandeau si cookie non accepté
window.onload = () => {
  if (getCookie("cookiesAccepted") !== "true") {
    document.getElementById("cookie-banner").style.display = "block";
  }
  document.getElementById("accept-cookies").onclick = () => {
    setCookie("cookiesAccepted", "true", 365);
    document.getElementById("cookie-banner").style.display = "none";
  };
};
