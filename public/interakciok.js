function kepTorles(id) {
    let adatok = JSON.parse(localStorage.getItem("favkepek"))
    let vissza = []
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].id != id) {
            vissza.push(adatok[i])
        }
    }
    localStorage.setItem("favkepek", JSON.stringify(vissza))
    document.getElementById(id).remove()
    $('#interakciok').modal('hide')
}

function kepTorlesMenu(id, nev) {
    document.getElementById("szerkesztes-footer").className = "inaktiv"
    document.getElementById("torles-footer").className = "aktiv"
    document.getElementById("szerkesztes-cim").innerHTML = `„${nev}” törlése`
    document.querySelector("#torles-gomb").onclick = function() { kepTorles(id) }
    $('#interakciok').modal('show')
    document.getElementById("szerkesztes-body").innerHTML = "<p>Biztosan kiszeretnéd törölni ezt a képet? <br>Ez a művelet nem visszafordítható!</p>"
}

function kepSzerkesztesMenu(id, nev, leiras, src) {
    document.getElementById("szerkesztes-footer").className = "aktiv"
    document.getElementById("torles-footer").className = "inaktiv"
    document.getElementById("szerkesztes-cim").innerHTML = `„${nev}” szerkesztése`
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

}