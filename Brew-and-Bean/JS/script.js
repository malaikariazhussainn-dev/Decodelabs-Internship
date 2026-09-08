/* =========================================
   BREW & BEAN
   Interactive Coffee Showcase
========================================= */


/* =========================================
   COFFEE DATA
========================================= */

const coffees = [

    {
        name: "Velvet Espresso",

        price: "PKR 420",

        image: "images/coffee/espresso.jpg",

        alt:
            "Velvet espresso served in a dark ceramic cup",

        description:
            "Dark chocolate, caramel and toasted almond with a smooth, lingering finish.",

        tags: [
            "ESPRESSO",
            "MEDIUM ROAST"
        ]
    },


    {
        name: "Honey Latte",

        price: "PKR 520",

        image: "images/coffee/latte.jpg",

        alt:
            "Creamy honey latte with delicate latte art",

        description:
            "Silky milk, wild honey and roasted hazelnut balanced with a gentle sweetness.",

        tags: [
            "MILK COFFEE",
            "LIGHT ROAST"
        ]
    },


    {
        name: "Origin Pour-Over",

        price: "PKR 580",

        image: "images/coffee/pour-over.jpg",

        alt:
            "Hand brewed pour-over coffee in a glass server",

        description:
            "Bright citrus, delicate florals and stone fruit with a clean, elegant finish.",

        tags: [
            "POUR-OVER",
            "SINGLE ORIGIN"
        ]
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const coffeeButtons =
    document.querySelectorAll(".coffee-select");

const coffeeImage =
    document.querySelector("#coffeeImage");

const coffeeImageLabel =
    document.querySelector("#coffeeImageLabel");

const coffeeName =
    document.querySelector("#coffeeName");

const coffeePrice =
    document.querySelector("#coffeePrice");

const coffeeDescription =
    document.querySelector("#coffeeDescription");

const coffeeTags =
    document.querySelector("#coffeeTags");

const coffeeImageContainer =
    document.querySelector(".coffee-image");


/* =========================================
   UPDATE COFFEE
========================================= */

function updateCoffee(index) {

    const coffee = coffees[index];

    if (!coffee) {
        return;
    }


    /* Remove active state */

    coffeeButtons.forEach(button => {

        button.classList.remove("active");

    });


    /* Activate selected button */

    coffeeButtons[index]
        ?.classList.add("active");


    /* Trigger image animation */

    coffeeImageContainer
        ?.classList.remove("is-changing");


    /*
        Force browser reflow so the
        animation can restart.
    */

    void coffeeImageContainer?.offsetWidth;


    coffeeImageContainer
        ?.classList.add("is-changing");


    /* Update image */

    coffeeImage.src =
        coffee.image;

    coffeeImage.alt =
        coffee.alt;


    /* Update image label */

    coffeeImageLabel.textContent =
        `SIGNATURE ${String(index + 1).padStart(2, "0")}`;


    /* Update name */

    coffeeName.textContent =
        coffee.name;


    /* Update price */

    coffeePrice.textContent =
        coffee.price;


    /* Update description */

    coffeeDescription.textContent =
        coffee.description;


    /* Update tags */

    coffeeTags.innerHTML =
        coffee.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

}


/* =========================================
   BUTTON EVENTS
========================================= */

coffeeButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const index =
                Number(
                    button.dataset.coffee
                );

            updateCoffee(index);

        }
    );

});


const backTop = document.getElementById("backTop");

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================
   SCROLL REVEAL SYSTEM
========================================= */

const revealElements = document.querySelectorAll(
    ".philosophy-main, .coffee-showcase-grid, .story-content, .visit-main, .footer-main"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                requestAnimationFrame(() => {
                    entry.target.classList.add("active");
                });

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   MENU REVEAL
========================================= */

const menuItems = document.querySelectorAll(".menu-item");

const menuObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                menuObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);

menuItems.forEach((item) => {
    menuObserver.observe(item);
});


/* =========================================
   SCROLL PROGRESS
========================================= */

const scrollProgress =
    document.getElementById("scrollProgress");

function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
    }
}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();



/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        menuToggle.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            menuToggle.classList.remove("active");

        });

    });

}


/* =========================================
   HEADER SCROLL STATE
========================================= */

const header = document.querySelector(".site-header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll(
    "section[id], footer[id]"
);

const navigationLinks = document.querySelectorAll(
    ".nav-link"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const currentId = entry.target.id;

            navigationLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${currentId}`
                ) {
                    link.classList.add("active");
                }

            });

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================================
   PAGE LOADER
========================================= */

const pageLoader =
    document.getElementById("pageLoader");

window.addEventListener("load", () => {

    setTimeout(() => {

        if (pageLoader) {
            pageLoader.classList.add("loaded");
        }

        document.body.classList.add("page-ready");

    }, 500);

});

