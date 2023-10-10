var valeur = 0;

function incrementer() {
  valeur++;
  afficherValeur();
}

function decrementer() {
  if (valeur > 0) {
    valeur--;
    afficherValeur();
  }
}

function afficherValeur() {
  document.getElementById("valeur").textContent = valeur;
}
