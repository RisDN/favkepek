function menuAlap() {
    document.querySelector("#uj-leiras").value = null
    document.querySelector("#uj-link").value = null
    document.querySelector("#uj-nev").value = null
    menuAllitas(1)
}




function befejezes() {
    let nev = document.querySelector("#uj-nev").value
    let leiras = document.querySelector("#uj-leiras").value
    let link = document.querySelector("#uj-link").value
    if (nev != "") {
        if (leiras != "") {
            if (link != "") {
                console.log(nev, leiras, link)
                befejezesKepernyo(nev, leiras, link)
            } else { hiba("Adj meg egy linket!") }
        } else { hiba("Adj meg egy leírást!") }
    } else { hiba("Adj meg egy nevet!") }

}

function befejezesVegleg() {
    let nev = document.querySelector("#uj-nev").value
    let leiras = document.querySelector("#uj-leiras").value
    let link = document.querySelector("#uj-link").value
    let id = new Date().getTime()
    kepBetoltes({
        id: id,
        nev: nev,
        src: link,
        leiras: leiras
    })
    $('#myModal').modal('hide')
    let mentettek = JSON.parse(localStorage.getItem('favkepek'))
        //console.log(mentettek)
    mentettek.push({
            id: id,
            nev: nev,
            src: link,
            leiras: leiras
        })
        //console.log(mentettek)
    localStorage.setItem('favkepek', JSON.stringify(mentettek));
}


function befejezesKepernyo(kep_nev, kep_leiras, kep_src) {
    document.querySelector("#uj-befejezes").innerHTML = ""
    let uj_kep_doboz = document.createElement("div")
    uj_kep_doboz.className = "kep-doboz-befejezes"
    uj_kep_doboz.innerHTML =
        `
            <div class="kep-body-befejezes">

                <div class="kep-cim-befejezes">
                    <p>${kep_nev}</p>
                </div>

            <img width="200" height="200" src="${kep_src}" alt="${kep_nev}">

            <div class="kep-leiras-befejezes">
                <p>${kep_leiras}</p>
            </div>

        `
    document.querySelector("#uj-befejezes").appendChild(uj_kep_doboz)
    menuAllitas(4)
}



function menuAllitas(melyik) {

    if (melyik == 1) {
        document.querySelector("#uj-befejezes").className = "inaktiv"
        document.querySelector("#uj-3").className = "inaktiv"
        document.querySelector("#uj-2").className = "inaktiv"
        document.querySelector("#uj-1").className = "aktiv"

        document.querySelector("#uj-3-kovi-befejezes").className = "inaktiv"
        document.querySelector("#uj-3-kovi").className = "inaktiv"
        document.querySelector("#uj-2-kovi").className = "inaktiv"
        document.querySelector("#uj-1-kovi").className = "aktiv"

    }
    if (melyik == 2) {
        document.querySelector("#uj-befejezes").className = "inaktiv"
        document.querySelector("#uj-3").className = "inaktiv"
        document.querySelector("#uj-2").className = "aktiv"
        document.querySelector("#uj-1").className = "inaktiv"

        document.querySelector("#uj-3-kovi-befejezes").className = "inaktiv"
        document.querySelector("#uj-3-kovi").className = "inaktiv"
        document.querySelector("#uj-2-kovi").className = "aktiv"
        document.querySelector("#uj-1-kovi").className = "inaktiv"

    }
    if (melyik == 3) {
        document.querySelector("#uj-befejezes").className = "inaktiv"
        document.querySelector("#uj-3").className = "aktiv"
        document.querySelector("#uj-2").className = "inaktiv"
        document.querySelector("#uj-1").className = "inaktiv"

        document.querySelector("#uj-3-kovi-befejezes").className = "inaktiv"
        document.querySelector("#uj-3-kovi").className = "aktiv"
        document.querySelector("#uj-2-kovi").className = "inaktiv"
        document.querySelector("#uj-1-kovi").className = "inaktiv"

    }
    if (melyik == 4) {

        document.querySelector("#uj-befejezes").className = "aktiv"
        document.querySelector("#uj-3").className = "inaktiv"
        document.querySelector("#uj-2").className = "inaktiv"
        document.querySelector("#uj-1").className = "inaktiv"

        document.querySelector("#uj-3-kovi-befejezes").className = "aktiv"
        document.querySelector("#uj-3-kovi").className = "inaktiv"
        document.querySelector("#uj-2-kovi").className = "inaktiv"
        document.querySelector("#uj-1-kovi").className = "inaktiv"

    }
}