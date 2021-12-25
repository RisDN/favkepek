const LEIRAS_MAX_KARAKTER = 84

const teszt = [{
        id: 12312312,
        nev: "Macska",
        leiras: "Ez a kép egy igazan aranyos macskarol szol, sosem lattam meg ilyen aranyos macskat",
        src: "https://www.pet4you.hu/img/big/1048.jpg"
    },
    {
        id: 12312333,
        nev: "Kutya",
        leiras: "A kutyakat nem szeretjuk fuj kutya",
        src: "https://www.purina.hu/proplan/sites/default/files/styles/nppe_article_listing_image_and_description/public/2020-11/GondosGazdik_blog_oregkutya5.jpg%20%201_2.jpg?itok=tHFTiHx7"
    },
    {
        id: 331232123,
        nev: "Papagáj geci",
        leiras: "csipogogeci",
        src: "https://www.zooplus.hu/magazin/wp-content/uploads/2018/11/A-Nimfapapag%C3%A1jok-768x768.jpg"
    },
    {
        id: 321123332,
        nev: "budosbogar",
        leiras: "budos geci aki bemaszik es megijeszt ejszaka",
        src: "https://ripost.hu/wp-content/uploads/kepadatbazis/thumbs/2017-10-11/3ddf240ae8cbfa5f4b428234ffafc2a7/620x0.jpg"
    }
]

function mentettKepekHozzaadasa() {
    teszt.forEach(kep => { kepBetoltes(kep) });
}

function kepBetoltes(kepadat) {
    let kep_id = kepadat.id
    let kep_nev = kepadat.nev
    let kep_leiras = kepadat.leiras
    let kep_src = kepadat.src

    let uj_kep_doboz = document.createElement("div")
    uj_kep_doboz.className = "kep-doboz"
    uj_kep_doboz.innerHTML =
        `
        <div class="kep-body">

            <div class="kep-cim">
                <p>${kep_nev}</p>
            </div>

        <img width="200" height="200" src="${kep_src}" alt="${kep_nev}">

        <div class="kep-interakciok">
            <i onclick="kepSzerkesztes(${kep_id})" class="fa fa-pencil-square-o text-info" title="„${kep_nev}” szerkesztése" style="float: left;"></i>
            <i onclick="kepTorles(${kep_id})" class="fa fa-trash text-danger" title="„${kep_nev}” törlése" style="float: right;"></i>
        </div>

        <div class="kep-leiras">
            <p>${kep_leiras}</p>
        </div>

    `
    document.querySelector(".kepek").appendChild(uj_kep_doboz)

}


mentettKepekHozzaadasa()