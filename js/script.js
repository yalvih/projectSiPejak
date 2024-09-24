// Carousel
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("images");

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";

    }
    
    if(slideIndex==slides.length){
        slideIndex=0;
    }
    slides[slideIndex].style.display="block";
    slideIndex++;
    setTimeout(showSlides,3000);
}

// FormLogin
var RegForm = document.getElementById("RegForm");
var LoginForm = document.getElementById("LoginForm");
var Indicator = document.getElementById("Indicator");

function register(){
    LoginForm.style.transform = "translateX(300px)";
    RegForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

function login(){
    LoginForm.style.transform = "translateX(0px)";
    RegForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function addedItem(){
    alert("Item has been added to cart")
}

