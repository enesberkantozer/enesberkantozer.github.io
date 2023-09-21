function getParams() { // Sitenin URL'sinden bir önceki HTML sayfasında şeçilen özellikler ayrıştırılır
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}
params = getParams();
dgkders = unescape(params["Dersinadi"]);
sikSayisi = unescape(params["SikSayisi"]);
zorluk = unescape(params["Zorluk"]);
var isim = dgkders.split("+");
var sikisim = sikSayisi.split("+");
var sikadi = sikisim[0];
var dersAdi = isim[0];
for (var i = 1; i < isim.length; i++) {
    dersAdi += " " + isim[i];
}
for (var j = 1; j < sikisim.lenght; j++) {
    sikadi += " " + sikisim[j];
}
if (sikSayisi == "3Sikli") {
    document.getElementById("kutu7").style.display = "none";
    document.getElementById("kutu10").style.display = "none";
}
if (sikSayisi == "4Sikli") {
    document.getElementById("kutu10").style.display = "none";
}
if (sikSayisi == "5Sikli") {
}
if (isim.length > 1) {
    document.getElementById("dersname").innerHTML = dersAdi;
}
else {
    document.getElementById("dersname").innerHTML = dgkders;
}
if (sikisim.lenght > 1) {
    document.getElementById("sikname").innerHTML = sikadi;
}
else {
    document.getElementById("sikname").innerHTML = sikSayisi;
}

document.getElementById("zorlukname").innerHTML = zorluk;

var sorununid;

