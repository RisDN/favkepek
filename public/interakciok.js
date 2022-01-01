function kepTorles(id) {
    let adatok = JSON.parse(localStorage.getItem("favkepek"))
    let vissza = []
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].id != id) {
            vissza.push(adatok[i])
        }
    }
    localStorage.setItem("favkepek", JSON.stringify(vissza))
    if (localStorage.getItem("favkepek") == "[]") {
        window.location.reload()
    }
    document.getElementById(id).remove()
    $('#interakciok').modal('hide')
}

function kepTorlesMenu(id, nev) {
    document.getElementById("szerkesztes-footer").className = "inaktiv"
    document.getElementById("torles-footer").className = "aktiv"
    document.getElementById("szerkesztes-cim").innerHTML = `„${nev}” törlése`
    document.getElementById("szerkesztes-cim").className = "modal-title text-danger"
    document.querySelector("#torles-gomb").onclick = function() { kepTorles(id) }
    $('#interakciok').modal('show')
    document.getElementById("szerkesztes-body").innerHTML = "<p style='text-align: center;'>Biztosan kiszeretnéd törölni ezt a képet? <br>Ez a művelet nem visszafordítható!</p>"
}

function kepSzerkesztesMenu(id, nev, leiras, src) {
    document.getElementById("szerkesztes-footer").className = "aktiv"
    document.getElementById("torles-footer").className = "inaktiv"
    document.getElementById("szerkesztes-cim").innerHTML = `„${nev}” szerkesztése`
    document.getElementById("szerkesztes-cim").className = "modal-title text-primary"
    document.querySelector("#szerkesztes-gomb").onclick = function() { kepSzerkesztes(id) }
    $('#interakciok').modal('show')
    document.getElementById("szerkesztes-body").innerHTML =
        `
        <input value="${nev}" type="text" name="" id="szerkesztes-menu-nev">
        <input value="${leiras}" type="text" name="" id="szerkesztes-menu-leiras">
        <input value="${src}" type="text" name="" id="szerkesztes-menu-src">
        `
}


function kepSzerkesztes(id) {
    let = szerkesztett_nev = document.querySelector("#szerkesztes-menu-nev").value
    let = szerkesztett_leiras = document.querySelector("#szerkesztes-menu-leiras").value
    let = szerkesztett_src = document.querySelector("#szerkesztes-menu-src").value
    let mentettek = JSON.parse(localStorage.getItem("favkepek"))
    for (let i = 0; i < mentettek.length; i++) {
        if (mentettek[i].id == id) {
            mentettek[i].nev = szerkesztett_nev
            mentettek[i].leiras = szerkesztett_leiras
            mentettek[i].src = szerkesztett_src
        }
    }
    localStorage.setItem("favkepek", JSON.stringify(mentettek))
}