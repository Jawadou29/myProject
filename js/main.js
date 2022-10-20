// start random background
let imgs = ["imgs/1659086.jpg", "imgs/aircraft-landing-sunset.jpg", "imgs/807720.jpg", "imgs/d647b50df50e0ee12cee0d2fed61e8b5.jpg"];
let landing = document.querySelector(".landing");
setInterval(() => {
    let random_index = parseInt(Math.random()*imgs.length);
    landing.style.setProperty("background-image", `url("../${imgs[random_index]}")`);
}, 20000)
// end random background
// start text effect
let landing_h1 = document.querySelector(".landing .text h1");
let landing_p = document.querySelector(".landing .text p");
let navbar = document.querySelector(".navbar");
setInterval(() => {
    landing_h1.style.transform = "translateX(0px)";
    landing_h1.style.opacity = "1";
    landing_p.style.transform = "translateX(0px)";
    landing_p.style.opacity = "1";
    navbar.style.opacity = "1";
    navbar.style.top = "0";
}, 500)
// end text effect
