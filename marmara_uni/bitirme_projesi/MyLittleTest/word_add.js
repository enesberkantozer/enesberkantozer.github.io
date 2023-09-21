var id_saydir = document.getElementById("gizli2").textContent;
var zorlukselect = document.getElementById("ZorlukSelect");
var cevapselect = document.getElementById("CevapSelect");
var zorarray = [];
var idarray = [];

function genis(zor, cevap, id) { // Genişlet Butonunun İşlevi

    if (document.getElementById("gbutton" + zor + cevap + id).innerHTML == "Genişlet") {
        document.getElementById("tablo" + zor + cevap + id).style.display = "inline-block";
        document.getElementById("gbutton" + zor + cevap + id).innerHTML = "Daralt";
    }
    else if (document.getElementById("gbutton" + zor + cevap + id).innerHTML = "Daralt") {
        document.getElementById("tablo" + zor + cevap + id).style.display = "none";
        document.getElementById("gbutton" + zor + cevap + id).innerHTML = "Genişlet";
    }
}
var gizli5 = document.getElementById("gizli5");
var yan_sayfa = gizli5.outerText;
var page_nu = document.getElementById("gizli3").textContent;

function ekle(zor, cevap, id) { // Ekle Butonunun İşlevi

    document.getElementById("CevapSelect").disabled = true;

    var id_saydir = document.getElementById("gizli2").textContent;
    var wordleft = document.getElementById("worddivleft" + page_nu);
    var wordright = document.getElementById("worddivright" + page_nu);
    var soruTablo = document.getElementById("SoruTablosu" + page_nu);
    var page_div = document.getElementById("page" + page_nu);
    page_div.style.maxHeight = "1000vh";
    let soru_div = document.getElementById("randomdiv" + zor + cevap + id);
    var a4size = 29.7;

    document.getElementById("tablo" + zor + cevap + id).style.display = "inline-block";
    document.getElementById("outdiv" + zor + cevap + id).style.border = "";
    document.getElementById("outerdiv" + zor + cevap + id).style.display = "none";

    document.getElementById("span" + zor + cevap + id).innerHTML = id_saydir + "-)";
    zorarray.push(zor);
    idarray.push(id);

    let bolen=35;
    if (window.devicePixelRatio==1) {
        bolen=29.7;
    }

    if ((page_div.offsetHeight / bolen) < a4size && yan_sayfa == "false") {
        wordleft.appendChild(soru_div);
        if ((page_div.offsetHeight / bolen) > a4size) {
            wordright.appendChild(soru_div);
            yan_sayfa = "true";
            gizli5.innerHTML = yan_sayfa;
        }
    }
    else if ((page_div.offsetHeight / bolen) < a4size && yan_sayfa == "true") {
        wordright.appendChild(soru_div);
        if ((page_div.offsetHeight / bolen) > a4size) {
            yan_sayfa = "false";
            gizli5.innerHTML = yan_sayfa;
            page_nu++;
            document.getElementById("gizli3").innerHTML = page_nu;
            let left_ = document.createElement("div");
            let right_ = document.createElement("div");
            let sorutablo_ = document.createElement("div");
            let page_ = document.createElement("div");
            let hr_ = document.createElement("hr");
            left_.id = "worddivleft" + page_nu;
            right_.id = "worddivright" + page_nu;
            sorutablo_.id = "SoruTablosu" + page_nu;
            page_.id = "page" + page_nu;
            sorutablo_.style = "width: 100%; display: flex;";
            left_.style = "width: 50%; padding-right: 4px;";
            right_.style = "width: 49%; padding-left: 4px;";
            sorutablo_.appendChild(left_);
            sorutablo_.appendChild(right_);
            page_.appendChild(sorutablo_);
            document.getElementById("ToWord").appendChild(hr_);
            document.getElementById("ToWord").appendChild(page_);
            left_.appendChild(soru_div);
        }
    }
    id_saydir++;
    document.getElementById("gizli2").innerHTML = id_saydir;
}