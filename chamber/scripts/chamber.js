
function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


let lastModifiedString = new Date(document.lastModified);
oLastModif = lastModifiedString.toUTCString();
document.getElementById('lastModified').innerHTML = `Last modified: ${oLastModif}`;

let d = new Date();
let currentYear = d.getFullYear();
document.getElementById('copyRight').innerHTML = `&copy ${currentYear} William Keel &#127482;&#127480`;


/* discover.html-page*/

<script>
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
}

    function currentSlide(n) {
        showSlides(slideIndex = n);
}

    function showSlides(n) {
        let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
</script>