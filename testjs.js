function myFunction(elemento) {
    var x = document.getElementById(elemento);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }