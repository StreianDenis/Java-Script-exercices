function result() {
  var nombre1 = document.getElementById("nombre1").value;
  var nombre2 = document.getElementById("nombre2").value;

  if (nombre1 === "" || isNaN(nombre1) || nombre2 === "" || isNaN(nombre2)) {
    alert("Veuillez saisir les deux champs.");
  } else {
    var resultat = parseFloat(nombre1) + parseFloat(nombre2);

    alert("Résultat : " + resultat);
  }
}
