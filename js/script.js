/* ==========================================
   Animate Social Buttons
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".social-btn");

    buttons.forEach((button, index) => {

        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";

        setTimeout(() => {

            button.style.transition = "all .5s ease";
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";

        }, 150 * index);

    });

});


/* ==========================================
   Ripple Effect
========================================== */

const socialButtons = document.querySelectorAll(".social-btn");

socialButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* ==========================================
   Card Tilt Effect (Desktop Only)
========================================== */

if (window.innerWidth > 768) {

    const card = document.querySelector(".card-box");

    document.addEventListener("mousemove", (e) => {

        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;

        const rotateY = ((e.clientX - x) / x) * 4;
        const rotateX = -((e.clientY - y) / y) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

}


/* ==========================================
   Smooth Hover Scale
========================================== */

const card = document.querySelector(".card-box");

card.addEventListener("mouseenter", () => {

    card.style.transition = "transform .2s ease";

});


/* ==========================================
   Console Greeting
========================================== */

console.log(`
======================================
 Youth English Society
======================================
`);