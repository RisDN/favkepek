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
}