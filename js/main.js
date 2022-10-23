// add random imgs to localStorage
let intervalbg;
let random_option = true;
let bgs_btns = document.querySelectorAll(".setting-box .setting-container .random-bg .btns button");
if (localStorage.getItem("backgroung_random")) {
    bgs_btns.forEach((bg_btn) => {
        if(bg_btn.getAttribute("data-bg") === localStorage.getItem("backgroung_random")) {
            bgs_btns.forEach((bg_btn) => {
                bg_btn.classList.remove("active");
            })
            bg_btn.classList.add("active");
        }
        if (localStorage.getItem("backgroung_random") ===  "yes") {
            random_option = true;
            random_imgs();
        }
        else{
            random_option = false;
            clearInterval(intervalbg)
        }
    })
}
// end random imgs to localStorage
// start random background ///////////////////////////////////////////////////////////////////////////////////////
let imgs_len = 15;
let landing = document.querySelector(".landing");
function random_imgs() {
    if (random_option === true) {
        intervalbg =  setInterval(() => {
            let random_index = parseInt(Math.random()*imgs_len);
            let img = random_index < 10 ? "0"+random_index :  random_index;
            landing.style.setProperty("background-image", `url("../imgs/${img}.jpg")`);
        }, 30000) 
    }
}
random_imgs();
// end random background ///////////////////////////////////////////////////////////////////////////////////////
bgs_btns.forEach((bg_btn) => {
    bg_btn.onclick = function () {
        localStorage.setItem("backgroung_random", this.getAttribute("data-bg"))
        if (this.getAttribute("data-bg") === "yes") {
            random_option = true;
            random_imgs();
        }
        else{
            random_option = false;
            clearInterval(intervalbg)
        }
        bgs_btns.forEach((bg_btns) => {
            bg_btns.classList.remove("active");
        });
        this.classList.add("active")
    };
});
// end random backgrounds  ///////////////////////////////////////////////////////////////////////////////////////
// start text effect ///////////////////////////////////////////////////////////////////////////////////////
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
// end text effect  ///////////////////////////////////////////////////////////////////////////////////////
// start setting box  ///////////////////////////////////////////////////////////////////////////////////////
let gear = document.querySelector(".setting-box .icon-container");
let setting_box = document.querySelector(".setting-box");
gear.onclick = function () {
    setting_box.classList.toggle("open");
}
// end setting box  ///////////////////////////////////////////////////////////////////////////////////////
// start switch color  ///////////////////////////////////////////////////////////////////////////////////////
let lis_color = document.querySelectorAll(".setting-box .setting-container .option-box ul li");
if (localStorage.getItem("main-color")) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));
    lis_color.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("data-color") === localStorage.getItem("main-color")) {
            li.classList.add("active")
        }
    })
}
lis_color.forEach(li => {
    li.onclick = function () {
        lis_color.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
        document.documentElement.style.setProperty("--main-color", li.getAttribute("data-color"));
        localStorage.setItem("main-color", li.getAttribute("data-color"));
    };
});
// end switch color  ///////////////////////////////////////////////////////////////////////////////////////
// start about
let about_text = document.querySelector(".about .container .text");
let about_img = document.querySelector(".about .container .img");
animation_scroll(about_text);
animation_scroll(about_img);
// end about
// start skills
let skills_prog = document.querySelectorAll(".skills .container .one-skill .prog span");
let skills_section = document.querySelector(".skills .container");
window.addEventListener("scroll", () => {
    if (window.scrollY >= skills_section.offsetTop - 600) {
        skills_prog.forEach((prog) => {
            prog.style.width = `${prog.getAttribute("data-goal")}%`;
        })
    }
})
// end skills
// start gallery
let gallery_img = document.querySelectorAll(".gallery img");
gallery_img.forEach((img) => {
    img.onclick = function () {
        let overlay_popup = document.createElement("div");
        let div_img = document.createElement("div");
        let img_popuo = document.createElement("img");
        overlay_popup.classList = "overlay";
        div_img.classList = "img";
        img_popuo.src = img.src;
        div_img.append(img_popuo);
        overlay_popup.append(div_img);
        document.body.append(overlay_popup);
        let close = document.createElement("span");
        close.classList = "close";
        close.append(document.createTextNode("X"));
        div_img.append(close);
    }
});
document.addEventListener("click", function (e) {
    if (e.target.className === "close") {
        document.querySelector(".overlay").remove();
    }
})
window.onkeydown = function (e) {
    if(e.key === "Escape" && document.querySelector(".overlay")) {
        document.querySelector(".overlay").remove();
    }
}
// start gallery
// start bullets
let bullets = document.querySelectorAll(".bullets-nav .one-bullets .bullet");
bullets.forEach((bullet) => {
    bullet.onclick = function () {
        document.querySelector(bullet.getAttribute("data-section")).scrollIntoView({
            behavior: "smooth"
        });
    }
});
// end bullets
// start show bullets
let bullets_btns = document.querySelectorAll(".setting-box .show-bullets .btns button")
let nav_bullets =  document.querySelector(".bullets-nav");
if (localStorage.getItem("show-bullets")) {
    bullets_btns.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-show") === localStorage.getItem("show-bullets")) {
            btn.classList.add("active")
        }
    })
    if (localStorage.getItem("show-bullets") === "no") {
        nav_bullets.style.display = "none";
    }
    else{
        nav_bullets.style.display = "block";
    }
}
bullets_btns.forEach((btn) => {
    btn.onclick = function () {
        bullets_btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        if (btn.getAttribute("data-show") === "no") {
            nav_bullets.style.display = "none";
        }
        else{
            nav_bullets.style.display = "block";
        }
        localStorage.setItem("show-bullets", btn.getAttribute("data-show"))
    }
})
// end show bullets
// start reset
document.querySelector(".setting-box .reset").onclick = function () {
    localStorage.clear();
    window.location.reload();
}
// end reset
// start toggle menu
let bars = document.querySelector(".navbar .container .icon-containerr");
let ul_links = document.querySelector(".navbar .container ul");
bars.onclick = function (e) {
    // bars.stopPropagation();
    e.stopPropagation();
    this.classList.toggle("menu-active");
    ul_links.classList.toggle("open");
}
document.addEventListener("click", function (e) {
    if (e.target !== bars && e.target !== ul_links) {
        if (ul_links.classList.contains("open")) {
            bars.classList.toggle("menu-active");
            ul_links.classList.toggle("open");
        }
    }
})
ul_links.onclick = function (e) {
    e.stopPropagation();
}
// end toggel menu



function animation_scroll(ele) {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= ele.parentElement.offsetTop - 600) {
            ele.style.transform = "translateX(0)";
            ele.style.opacity = "1";
        }
    })
}