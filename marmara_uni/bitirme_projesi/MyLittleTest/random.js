var cevapselect = document.getElementById("CevapSelect");
var sorulararray = [];
var cevaptext = cevapselect.options[cevapselect.selectedIndex].text;

var gecici_zor_array = [];
var gecici_id_array = [];

function randomIntFromInterval(min, max) {// Random sayı atmayı sağlayan fonksiyon
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomQuestion() { // Soruların yerlerini karıştırmak için 1.adım
    let result = confirm("Soruların yerlerini karıştırmak istediğinize emin misiniz?");
    var cevaptext = cevapselect.options[cevapselect.selectedIndex].text;
    if (result == true) {
        document.getElementById("btn12").disabled=true;
        sorulararray = [];
        document.getElementById("rnddiv").innerHTML = "";


        for (let j = 0; j < zorarray.length; j++) {
            sorulararray.push("randomdiv" + zorarray[j] + cevaptext + idarray[j]);
            randomQuestion2(j);
        }

        var rndyanSayfa = "false";
        document.getElementById("gizli5").innerHTML = rndyanSayfa;
    }
}

function randomQuestion2(l) { // Soruların yerlerini karıştırmak için 2.adım
    document.getElementById("rnddiv").appendChild(document.getElementById(sorulararray[l]));
    if (l == zorarray.length - 1) {
        let timeout = setTimeout(randomQuestion3, 500);
    }
}

function randomQuestion3() { // Soruların yerlerini karıştırmak için 3.adım
    let OkulAdi = document.getElementById("OkulAdi");
    let BolumVeProgramAdi = document.getElementById("BolumVeProgramAdi");
    let Donem = document.getElementById("Donem");
    let SinavinTuru = document.getElementById("SinavinTuru");
    let OgretmenAdi = document.getElementById("OgretmenAdi");
    let dersadiselect = document.getElementById("DersAdiSelect");
    let derstext = dersadiselect.options[dersadiselect.selectedIndex].text;

    let toWord = document.getElementById("ToWord");
    toWord.innerHTML = "";
    let page_1 = document.createElement("div");
    let h4 = document.createElement("h4");
    let info = document.createElement("div");
    let info_table = document.createElement("table");
    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let soruTablosu = document.createElement("div");
    let wordLeftDiv = document.createElement("div");
    let wordRightDiv = document.createElement("div");

    page_1.id = "page1";
    h4.id = "Baslik";
    info.id = "Bilgiler";
    soruTablosu.id = "SoruTablosu1";
    wordLeftDiv.id = "worddivleft1";
    wordRightDiv.id = "worddivright1";

    h4.style = "text-align: center; margin-left: 15%; margin-right: 15%;";
    info_table.style = "width: 95%; font-weight: bold;";
    td2.style = "text-align: right;";
    td4.style = "padding-right: 15%; text-align: right;";
    soruTablosu.style.width = "100%";
    soruTablosu.style.display = "flex";
    wordLeftDiv.style.width = "50%";
    wordLeftDiv.style.paddingRight = "4px";
    wordRightDiv.style.width = "49%";
    wordRightDiv.style.paddingLeft = "4px";

    h4.innerHTML = OkulAdi.value + " " + BolumVeProgramAdi.value + " " + Donem.value + " " + derstext + " " + SinavinTuru.value;
    td1.innerHTML = "Ad-Soyad:";
    td2.innerHTML = "Öğretmen Adı:" + OgretmenAdi.value;
    td3.innerHTML = "Numara:";
    td4.innerHTML = "Not:";

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    info_table.appendChild(tr1);
    info_table.appendChild(tr2);
    info.appendChild(info_table);
    soruTablosu.appendChild(wordLeftDiv);
    soruTablosu.appendChild(wordRightDiv);
    page_1.appendChild(h4);
    page_1.appendChild(info);
    page_1.appendChild(soruTablosu);
    toWord.appendChild(page_1);
    randomQuestion4();
}

function randomQuestion4() {// Soruların yerlerini karıştırmak için 4.adım
    var cevaptext = cevapselect.options[cevapselect.selectedIndex].text;
    let gizli2nu = document.getElementById("gizli2").outerText;
    let gizli3nu = document.getElementById("gizli3").outerText;
    document.getElementById("gizli2").innerHTML = "1";
    document.getElementById("gizli3").innerHTML = "1";
    document.getElementById("gizli5").innerHTML = "false";
    let randomlimit = sorulararray.length - 1;

    for (let y = 0; y < zorarray.length; y++) {
        gecici_zor_array.push(zorarray[y]);
        gecici_id_array.push(idarray[y]);

    }


    for (let a = 0; a < sorulararray.length; a++) {
        var randdom = randomIntFromInterval(0, randomlimit);
        randomekle(gecici_zor_array[randdom], cevaptext, gecici_id_array[randdom]);
        gecici_zor_array.splice(randdom, 1);
        gecici_id_array.splice(randdom, 1);
        randomlimit--;
    }

    document.getElementById("gizli2").innerHTML = gizli2nu;
    document.getElementById("gizli3").innerHTML = gizli3nu;
}

function randomekle(rndzor, rndcevap, rndid) {// Soruların yerlerini karıştırmak için 5.adım
    let rndpage_nu = document.getElementById("gizli3").textContent;
    let rndid_saydir = document.getElementById("gizli2").textContent;
    let rndgizli5 = document.getElementById("gizli5");
    let rndyan_sayfa = rndgizli5.outerText;
    let rndwordleft = document.getElementById("worddivleft" + rndpage_nu);
    let rndwordright = document.getElementById("worddivright" + rndpage_nu);
    let rndpage_div = document.getElementById("page" + rndpage_nu);
    rndpage_div.style.maxHeight = "1000vh";
    let rndsoru_div = document.getElementById("randomdiv" + rndzor + rndcevap + rndid);
    let a4size = 29.7;
    let bolen=35;
    if (window.devicePixelRatio==1) {
        bolen=29.7;
    }
    document.getElementById("span" + rndzor + rndcevap + rndid).innerHTML = rndid_saydir + "-)";

    if ((rndpage_div.offsetHeight / bolen) < a4size && rndyan_sayfa == "false") {
        rndwordleft.appendChild(rndsoru_div);
        if ((rndpage_div.offsetHeight / bolen) > a4size) {
            rndwordright.appendChild(rndsoru_div);
            rndyan_sayfa = "true";
            rndgizli5.innerHTML = rndyan_sayfa;
        }
    }
    else if ((rndpage_div.offsetHeight / bolen) < a4size && rndyan_sayfa == "true") {
        rndwordright.appendChild(rndsoru_div);
        if ((rndpage_div.offsetHeight / bolen) > a4size) {
            rndyan_sayfa = "false";
            rndgizli5.innerHTML = rndyan_sayfa;
            rndpage_nu++;
            document.getElementById("gizli3").innerHTML = rndpage_nu;
            let rndleft_ = document.createElement("div");
            let rndright_ = document.createElement("div");
            let rndsorutablo_ = document.createElement("div");
            let rndpage_ = document.createElement("div");
            let rndhr_=document.createElement("hr");
            rndleft_.id = "worddivleft" + rndpage_nu;
            rndright_.id = "worddivright" + rndpage_nu;
            rndsorutablo_.id = "SoruTablosu" + rndpage_nu;
            rndpage_.id = "page" + rndpage_nu;
            rndsorutablo_.style = "width: 100%; display: flex;";
            rndleft_.style = "width: 50%; padding-right: 4px;";
            rndright_.style = "width: 49%; padding-left: 4px;";
            rndsorutablo_.appendChild(rndleft_);
            rndsorutablo_.appendChild(rndright_);
            rndpage_.appendChild(rndsorutablo_);
            document.getElementById("ToWord").appendChild(rndhr_);
            document.getElementById("ToWord").appendChild(rndpage_);
            rndleft_.appendChild(rndsoru_div);
        }
    }
    rndid_saydir++;
    document.getElementById("gizli2").innerHTML = rndid_saydir;
}