function verifierAge() {
  var age = document.getElementById("age").value;

  if (isNaN(age) || age === "") {
    alert("Veuillez saisir un âge valide.");
  } else {
    age = parseInt(age);

    if (age >= 18) {
      alert("Vous êtes majeur.");
    } else {
      alert("Vous êtes mineur.");
    }
  }
}
