function ampliarImagen() {
    var imagen = document.getElementById("imagenAmpliada");
    var tonto = document.getElementById("imagenTonto");

    if (imagen.style.width === "175px") {
        tonto.innerHTML = `<img src="../img/Prueba.png"  onclick="ampliarImagen()" id="imagenMostrada" style="width: 100%;">`;
        imagen.style.width = "176px";
    } 
    else{
        imagen.style.width = "175px"; // Restaura el tamaño original
        imagen.style.height = "110px";
        tonto.innerHTML = `<img src="../img/Prueba.png" style="width: 80%; visibility: hidden;">`;
    }
}