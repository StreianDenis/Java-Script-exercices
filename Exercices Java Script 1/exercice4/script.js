function afficherDonnees(event) {
  event.preventDefault();

  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var category = document.getElementById("category").value;

  alert(
    "Title: " + title + "\nContent: " + content + "\nCategory: " + category
  );
}
