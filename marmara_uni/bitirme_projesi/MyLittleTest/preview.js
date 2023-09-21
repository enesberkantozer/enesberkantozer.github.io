const image = document.getElementById("soru-img");
const image2 = document.getElementById("sik-imgA");
const image3 = document.getElementById("sik-imgB");
const image4 = document.getElementById("sik-imgC");
const image5 = document.getElementById("sik-imgD");
const image6 = document.getElementById("sik-imgE");
const imgbtn = document.getElementById("formFileSm1");
const imgbtn2 = document.getElementById("formFileSm2");
const imgbtn3 = document.getElementById("formFileSm3");
const imgbtn4 = document.getElementById("formFileSm4");
const imgbtn5 = document.getElementById("formFileSm5");
const imgbtn6 = document.getElementById("formFileSm6");
const sorubtn = document.getElementById("soruUp");
const abtn = document.getElementById("cevapAUp");
const bbtn = document.getElementById("cevapBUp");
const cbtn = document.getElementById("cevapCUp");
const dbtn = document.getElementById("cevapDUp");
const ebtn = document.getElementById("cevapEUp");

imgbtn.addEventListener("change", function () { // UploadPage.html ekranındaki soru kısmı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image.style.display = "block";
		sorubtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image.style.display = "none";
		sorubtn.style.display = "none";
		image.setAttribute("src", "");
	}
})
imgbtn2.addEventListener("change", function () { // UploadPage.html ekranındaki A şıkkı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image2.style.display = "block";
		abtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image2.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image2.style.display = "none";
		abtn.style.display = "none";
		image2.setAttribute("src", "");
	}
})
imgbtn3.addEventListener("change", function () {// UploadPage.html ekranındaki B şıkkı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image3.style.display = "block";
		bbtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image3.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image3.style.display = "none";
		bbtn.style.display = "none";
		image3.setAttribute("src", "");
	}
})
imgbtn4.addEventListener("change", function () { // UploadPage.html ekranındaki C şıkkı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image4.style.display = "block";
		cbtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image4.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image4.style.display = "none";
		cbtn.style.display = "none";
		image4.setAttribute("src", "");
	}
})
imgbtn5.addEventListener("change", function () {// UploadPage.html ekranındaki D şıkkı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image5.style.display = "block";
		dbtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image5.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image5.style.display = "none";
		dbtn.style.display = "none";
		image5.setAttribute("src", "");
	}
})
imgbtn6.addEventListener("change", function () { // UploadPage.html ekranındaki E şıkkı fotoğraf seçme

	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		image6.style.display = "block";
		ebtn.style.display = "inline-block";

		reader.addEventListener("load", function () {

			image6.setAttribute("src", this.result);
		})
		reader.readAsDataURL(file);
	}
	else {
		image6.style.display = "none";
		ebtn.style.display = "none";
		image6.setAttribute("src", "");
	}
})