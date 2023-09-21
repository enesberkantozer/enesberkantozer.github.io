function printFunc2() { // PDF indirme fonksiyonu
    let ToWord = document.getElementById("ToWord");
    let hrs=ToWord.querySelectorAll("hr");
    let page_deger=document.getElementById("gizli3").outerText;
    for (let page = 1; page <= page_deger; page++) {
        let page_div_ = document.getElementById("page" + page);
        let viewheight = window.innerHeight * 10;
        let pageheight = page_div_.offsetHeight;
        let marginhesap = viewheight - pageheight;
        page_div_.style.marginBottom = marginhesap + "px";
        page_div_.style.maxHeight = "1000vh";
    }
    for(let t=0; t<hrs.length; t++){
        hrs[t].style.display="none";
    }
    let printexceptdiv = document.getElementById("printexceptdiv");
    let printexcept = document.getElementById("printexcept");
    printexcept.style.display = "none";
    let body_overflow = document.getElementsByTagName("body");
    let div = document.getElementById("printdiv");
    div.appendChild(ToWord);
    body_overflow[0].style.overflow = "auto";
    body_overflow[0].appendChild(div);
    window.print();
    for (let page = 1; page <= page_deger; page++) {
        let page_div_ = document.getElementById("page" + page);
        page_div_.style.marginBottom = "0%";
    }
    for(let t=0; t<hrs.length; t++){
        hrs[t].style.display="block";
    }
    printexcept.style.display = "inline-block";
    body_overflow[0].style.overflow = "hidden";
    printexceptdiv.appendChild(ToWord);
}
function printFunc(element, filename = "") { // Word İndirme Fonksiyonu
    let ToWord = document.getElementById("ToWord");
    let hrs=ToWord.querySelectorAll("hr");
    for(let t=0; t<hrs.length; t++){
        hrs[t].style.display="none";
    }
    let printexcept = document.getElementById("printexcept");
    let body_overflow = document.getElementsByTagName("body");
    let div = document.getElementById("printdiv");
    printexcept.style.display = "none";
    div.appendChild(ToWord);
    body_overflow[0].style.overflow = "auto";
    body_overflow[0].appendChild(div);
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    filename = filename ? filename + '.doc' : 'document.doc';
    var downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
    GoOld();
}
function GoOld() { // Word'de indirtikten sonra Html sayfasını eski haline getirme
    let ToWord = document.getElementById("ToWord");
    let hrs=ToWord.querySelectorAll("hr");
    let printexceptdiv = document.getElementById("printexceptdiv");
    let printexcept = document.getElementById("printexcept");
    let body_overflow = document.getElementsByTagName("body");
    printexcept.style.display = "inline-block";
    body_overflow[0].style.overflow = "hidden";
    printexceptdiv.appendChild(ToWord);
}

