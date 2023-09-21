function buttoncheck() {// Coktan.html ekranında eksik seçim yapılınca uyarı verdiren fonksiyon
    var y = document.getElementById('Dersinadi');

    if ((document.getElementById('1').checked == true || document.getElementById('2').checked == true || document.getElementById('3').checked == true)
        && (document.getElementById('4').checked == true || document.getElementById('5').checked == true || document.getElementById('6').checked == true)
        && y.value != "Dersin Adını Seçiniz") {
        document.getElementById("Uploadform").setAttribute("action", "UploadPage.html");
    }
    else {
        alert('Lütfen Boşluk Bırakmayınız');
    }
}
