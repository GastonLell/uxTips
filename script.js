let slideIndex = 0;

showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("mySlides");
    let i;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    } 
    
    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex -1].style.display = "block";

    setTimeout(showSlides,10000);

}

function moverSlider(valor){

    let slides = document.getElementsByClassName("mySlides");
    let i;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    } 
    if(valor < 0){
        if(slideIndex === 0){
            slideIndex = slides.length - 1
        } else {
            slideIndex--
        }
        slides[slideIndex].style.display = "block";
    }   
    if(valor > 0){
        if(slideIndex >= slides.length -1){
            slideIndex = 0;
        } else {
            slideIndex++
        }
        slides[slideIndex].style.display = "block";
    }

}
