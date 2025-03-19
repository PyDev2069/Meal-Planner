let timer;
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");    
    navbar.style.backgroundColor = "black";   
    clearTimeout(timer);   
    timer = setTimeout(() => {
        navbar.style.backgroundColor = "white";       
    }, 300);
});