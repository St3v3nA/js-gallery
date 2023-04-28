var currentIndex = 1;
displayslides(currentIndex);

function setSlides(num) {
    displayslides(currentIndex += num);
}

function displayslides(num) {
    var x;
    var slides = document.getElementsByClassName("imageslides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}