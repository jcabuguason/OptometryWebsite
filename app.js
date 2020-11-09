/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Hide navigation bar when scrolling
var prevScrollpos = window.pageYOffset;
var navBar = document.getElementById("navbar");
window.onscroll = function() {
    
// navigation bar hidden on scroll down
var currentScrollPos = window.pageYOffset;

if(window.matchMedia("(min-width: 601px)").matches){
        if (prevScrollpos > currentScrollPos) {
          navBar.style.display = "flex";
          navBar.style.top = "0";
        } else {
          navBar.style.top = "-110px";
        }
        if(currentScrollPos < 10){
            navBar.style.boxShadow = "none";
        }
        else{
            navBar.style.boxShadow = "0.5px 0.5px 50px 5px rgba(0,0,0,0.5)";
        }
        prevScrollpos = currentScrollPos;
      }
};


var navBarButton = document.getElementById("navbar-button");


var checkClick = 0;
navBarButton.onclick = function(){
    if(checkClick ===  0){
        navBar.style.display = "flex";
        checkClick = 1;
    }
    else{
        navBar.style.display = "none";
        checkClick = 0;
    }
};




var banner1 = document.getElementById("banner1");
var bannerImages =document.getElementsByClassName("banner-imgs");
var bannerLinks = document.getElementsByClassName("dot");

document.querySelectorAll('.dot').forEach(item => {

    item.addEventListener('click', event => {
        
    });
 });

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {
      slideIndex = 1;
   }  
  
    if (n < 1) {
        slideIndex = slides.length;
    }
    
  
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}