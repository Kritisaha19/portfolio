/* TYPING EFFECT */

var typed = new Typed("#typing", {

strings:[
"Aspiring Data Scientist",
"Machine Learning Enthusiast",
"Data Analytics Explorer"
],

typeSpeed:60,
backSpeed:40,
loop:true

});


/* SCROLL REVEAL */

ScrollReveal().reveal('.hero-content',{
delay:300,
distance:'60px',
origin:'bottom'
});

ScrollReveal().reveal('.stat-card',{
delay:200,
interval:200,
distance:'50px',
origin:'bottom'
});


/* CURSOR GLOW */

const glow = document.createElement("div")
glow.classList.add("cursor-glow")
document.body.appendChild(glow)

document.addEventListener("mousemove", e=>{
glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"
})