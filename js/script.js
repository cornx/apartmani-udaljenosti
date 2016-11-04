var plazaInput = document.querySelector("#plaza-input"),
    sladoledInput = document.querySelector("#sladoled-input"),
    sokInput = document.querySelector("#sok-input"),
    mjenjacnicaInput = document.querySelector("#mjenjacnica-input"),
    trznicaInput = document.querySelector("#trznica-input"),
    trgovinaInput = document.querySelector("#trgovina-input"),
    centarInput = document.querySelector("#centar-input"),
    // polja za upis
    plaza = document.querySelector("#plaza"),
    sol = document.querySelector("#sol"),
    sladoled = document.querySelector("#sladoled"),
    mjenjacnica = document.querySelector("#mjenjacnica"),
    trznica = document.querySelector("#trznica"),
    trgovina = document.querySelector("#trgovina"),
    centar = document.querySelector("#centar"),

    // button 
    upisi = document.querySelector("#upisi");

upisi.addEventListener("click", function() {
    plaza.textContent = plazaInput.value.trim();
    sok.textContent = sokInput.value.trim();
    sladoled.textContent = sladoledInput.value.trim();
    mjenjacnica.textContent = mjenjacnicaInput.value.trim();
    trznica.textContent = trznicaInput.value.trim();
    trgovina.textContent = trgovinaInput.value.trim();
    centar.textContent = centarInput.value.trim();
});

/*
var iconPlaza = document.querySelector(".icon-plaza"),
    iconMjenjacnica = document.querySelector(".icon-mjenjacnica"),
    iconTrznica = document.querySelector(".icon-trznica"),
    iconTgovina = document.querySelector(".icon-trgovina"),
    iconcentar = document.querySelector(".icon-Centar");
*/


// skrivanje pojedine ikonice kad se klikne na nju
function sakrij(i) {
    window.event.target.className = "skriven";
    i.className = "skriven";
};

// funkcija za stvaranje slike 
function uslikaj() {
    html2canvas(document.querySelector(".slika")).then(function(canvas) {
        document.body.appendChild(canvas);
        document.querySelector("canvas").className = "uslikano";
        document.querySelector("canvas").prepend = "Slika. Desnim klikom je spremi";
    });
}
document.querySelector("#uslikaj").onclick = uslikaj;