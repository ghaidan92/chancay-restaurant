// nav-bar sticky
window.onscroll = function() {
    myFunction()
    scrollFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        // document.getElementById("nav").style.padding = "30px 10px";
        document.getElementById("logo").style.width = "14rem";
        document.getElementById("logo").style.height = "8rem";
        document.getElementById("logo").style.marginTop = "0rem";
        document.querySelector(".list").style.fontSize = "1rem";
        document.querySelector(".list").style.marginTop = "4.2rem";
        document.querySelector(".list2").style.marginTop = "4.2rem";
        document.querySelector(".list3").style.marginTop = "4.2rem";
        document.querySelector(".list4").style.marginTop = "4.2rem";
    } else {
        document.getElementById("logo").style.width = "29rem";
        document.getElementById("logo").style.height = "15rem";
        document.querySelector(".list").style.fontSize = "1rem";
        document.querySelector(".list").style.marginTop = "8rem";
        document.querySelector(".list2").style.marginTop = "8rem";
        document.querySelector(".list3").style.marginTop = "8rem";
        document.querySelector(".list4").style.marginTop = "8rem";
    }
}

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// menu tags
function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}