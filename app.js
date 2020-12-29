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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
