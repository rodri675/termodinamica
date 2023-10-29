document.addEventListener("DOMContentLoaded", function () {
    const textoAnimado = document.querySelector(".encabezado h4");
    const textoOriginal = "Comprendiendo los principios termodinámicos";
    textoAnimado.textContent = "";

    let indice = 0;

    function escribirTexto() {
        if (indice < textoOriginal.length) {
            textoAnimado.textContent += textoOriginal.charAt(indice);
            indice++;
            setTimeout(escribirTexto, 70);
        }
    }
    escribirTexto();
});
