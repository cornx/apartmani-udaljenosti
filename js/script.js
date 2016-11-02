var plazaInput = document.querySelector("#plaza-input"),
    mjenjacnicaInput = document.querySelector("#mjenjacnica-input"),
    trznicaInput = document.querySelector("#trznica-input"),
    trgovinaInput = document.querySelector("#trgovina-input"),
    centarInput = document.querySelector("#centar-input"),
    // polja za upis
    plaza = document.querySelector("#plaza"),
    mjenjacnica = document.querySelector("#mjenjacnica"),
    trznica = document.querySelector("#trznica"),
    trgovina = document.querySelector("#trgovina"),
    centar = document.querySelector("#centar"),

    // button 
    upisi = document.querySelector("#upisi");

upisi.addEventListener("click", function() {
    plaza.textContent = plazaInput.value.trim();
    mjenjacnica.textContent = mjenjacnicaInput.value.trim();
    trznica.textContent = trznicaInput.value.trim();
    trgovina.textContent = trgovinaInput.value.trim();
    centar.textContent = centarInput.value.trim();
});


// funkcija za stvaranje slike 
function uslikaj() {
    html2canvas(document.querySelector(".slika")).then(function(canvas) {
        document.body.appendChild(canvas);
        document.querySelector("canvas").className = "uslikano";
        document.querySelector("canvas").prepend = "Slika. Desnim klikom je spremi";
    });
}
document.querySelector("#uslikaj").onclick = uslikaj;