const LEIRAS_MAX_KARAKTER = 84


const adat = localStorage.getItem("favkepek")
if (adat == null) {
    localStorage.setItem("favkepek", "[]")
} else if (adat == "[]") {
    console.log("üres")
} else {
    mentettKepekHozzaadasa()
}


function mentettKepekHozzaadasa() {
    let adatok = JSON.parse(localStorage.getItem("favkepek"))
    for (let i = 0; i < adatok.length; i++) { kepBetoltes(adatok[i]) }
}

function kepBetoltes(kepadat) {
    //console.log(kepadat)
    let kep_id = kepadat.id
    let kep_nev = kepadat.nev
    let kep_leiras = kepadat.leiras
    let kep_src = kepadat.src

    let uj_kep_doboz = document.createElement("div")
    uj_kep_doboz.className = "kep-doboz"
    uj_kep_doboz.id = kep_id
    uj_kep_doboz.innerHTML =
        `
        <div class="kep-body">

            <div class="kep-cim">
                <p>${kep_nev}</p>
            </div>

        <img width="200" height="200" src="${kep_src}" alt="${kep_nev}">

        <div class="kep-interakciok">
            <i onclick="kepSzerkesztesMenu(${kep_id}, '${kep_nev}', '${kep_leiras}', '${kep_src}')" class="fa fa-pencil-square-o text-info" title="„${kep_nev}” szerkesztése" style="float: left;"></i>
            <i onclick="kepTorlesMenu(${kep_id}, '${kep_nev}')" class="fa fa-trash text-danger" title="„${kep_nev}” törlése" style="float: right;"></i>
        </div>

        <div class="kep-leiras">
            <p>${kep_leiras}</p>
        </div>

    `
    document.querySelector(".kepek").appendChild(uj_kep_doboz)

}