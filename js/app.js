var centar = document.getElementById("centar"),
    mjenjacnica = document.getElementById("mjenjacnica"),
    plaza = document.getElementById("plaza"),
    trgovina = document.getElementById("trgovina"),
    trznica = document.getElementById("trznica"),
    akreditacija = document.getElementById("akreditacija"),
    vizitke = document.getElementById("vizitke"),
    papir = document.getElementById("papir"),
    restoran = document.getElementById("restoran"),
    caj = document.getElementById("caj"),
    hrana = document.getElementById("hrana"),
    sok = document.getElementById("sok"),
    sladoledKornet = document.getElementById("sladoled-kornet"),
    sladoledStapic = document.getElementById("sladoled-stapic"),
    plivanje = document.getElementById("plivanje"),
    ronjenje = document.getElementById("ronjenje"),
    lopta = document.getElementById("lopta"),
    bajk = document.getElementById("bajk"),
    kava = document.getElementById("kava"),
    wifi = document.getElementById("wifi"),
    centar = document.getElementById("centar");





// dodavanje
function dodaj() {
    var ikonica = window.event.target;
    document.querySelector(".prikaz-ikonica").append(ikonica);
};

function sakrij() {
    window.event.target.className = "skriven";
    //i.className = "skriven";
};

// micanje
function makni() {
    var ikonica = window.event.target;
};

// button 
var upisi = document.querySelector("#upisi");

upisi.addEventListener("click", function() {
    document.querySelector(".icon-plaza").append(plaza.value.trim());
    /*    plaza.textContent = plazaInput.value.trim();
        mjenjacnica.textContent = mjenjacnicaInput.value.trim();
        trznica.textContent = trznicaInput.value.trim();
        trgovina.textContent = trgovinaInput.value.trim();
        centar.textContent = centarInput.value.trim();*/
    console.log("klik na upiši");
});









// funkcija za stvaranje slike 
function uslikaj() {
    document.getElementById("naslov").style.display = "none";
    html2canvas(document.querySelector(".slika")).then(function(canvas) {
        document.body.appendChild(canvas);
        document.querySelector("canvas").className = "uslikano";
        document.querySelector("canvas").prepend = "Slika. Desnim klikom je spremi";
    });
}
document.querySelector("#uslikaj").onclick = uslikaj;