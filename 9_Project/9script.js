let slideIndex = 1;

// Open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Change slides (next/previous)
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Display the appropriate slide
function showSlide(n) {
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex - 1].style.display = 'block';  
}
