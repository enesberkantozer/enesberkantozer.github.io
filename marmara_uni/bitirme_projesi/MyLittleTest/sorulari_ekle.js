
var tiklandimi = document.getElementById("gizli2");
var sayi = 0;
function soruekle() { // Başlık oluşturup aynı zamanda soruların geleceği yeri hazırlıyor
    if (sayi == 0) {
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let bilgi_div = document.createElement("div");
        let soru_tablo = document.createElement("div");
        let div_left = document.createElement("div");
        let div_right = document.createElement("div");

        div.id = "page1";
        div_left.id = "worddivleft1";
        div_right.id = "worddivright1";
        soru_tablo.id = "SoruTablosu1";

        h4.id = "Baslik";
        bilgi_div.id = "Bilgiler";

        h4.style = "text-align: center; margin-left: 15%; margin-right: 15%;";
        soru_tablo.style = "width: 100%; display: flex;"
        div_left.style = "width: 50%;  padding-right: 4px;";
        div_right.style = "width: 49%; padding-left: 4px;"

        var OkulAdi = document.getElementById("OkulAdi");
        var BolumVeProgramAdi = document.getElementById("BolumVeProgramAdi");
        var Donem = document.getElementById("Donem");
        var SinavinTuru = document.getElementById("SinavinTuru");
        var OgretmenAdi = document.getElementById("OgretmenAdi");
        var dersadiselect = document.getElementById("DersAdiSelect");
        var derstext = dersadiselect.options[dersadiselect.selectedIndex].text;

        h4.innerHTML = OkulAdi.value + " " + BolumVeProgramAdi.value + " " + Donem.value + " " + derstext + " " + SinavinTuru.value;

        soru_tablo.appendChild(div_left);
        soru_tablo.appendChild(div_right);

        div.appendChild(h4);
        div.appendChild(bilgi_div);
        div.appendChild(soru_tablo);
        document.getElementById("ToWord").appendChild(div);
    }
}
function InformationAdding() { // Öğrenci Adı-Soyadı v.b bilgileri başlığın altına ekler
    var info = document.getElementById("Bilgiler");
    info.innerHTML = "";
    var infotable = document.createElement("table");
    var infotr1 = document.createElement("tr");
    var infotr2 = document.createElement("tr");
    var infotd1 = document.createElement("td");
    var infotd2 = document.createElement("td");
    var infotd3 = document.createElement("td");
    var infotd4 = document.createElement("td");
    infotd4.style.paddingRight = "15%";
    infotable.style.width = "95%";
    infotable.style.fontWeight = "bold";
    infotd2.style.textAlign = "right";
    infotd4.style.textAlign = "right";
    infotd1.innerHTML = "Ad-Soyad:";
    infotd2.innerHTML = "Öğretmen Adı:" + OgretmenAdi.value;
    infotd3.innerHTML = "Numara:";
    infotd4.innerHTML = "Not:";
    infotr1.appendChild(infotd1);
    infotr1.appendChild(infotd2);
    infotr2.appendChild(infotd3);
    infotr2.appendChild(infotd4);
    infotable.appendChild(infotr1);
    infotable.appendChild(infotr2);
    info.appendChild(infotable);
}
function soruekle1() {
    if (tiklandimi == null) {
        soruekle();
        InformationAdding();
        sayi++;
    }
}
