const domCarousel = document.getElementsByClassName("carousel");

const carousels = {
    burlesque: {
        slides: [
            {
                img: "https://i.imgur.com/6m7awiV.jpg",
                text: "These are the outtakes from a photo story I did for North by Northwestern magazine. The goal of the story was to feature the POC student organization B. Burlesque. For many of the members seeing themselves reflected as beautiful and empowered is a rarity, so this space becomes cherished as a place of upliftment. One of the challenges of this peice was getting access because many were uncomfortable with such photos being printed in a publication so many people would see. My workaround was to gain trust and feature shots of mostly hands and faces to show their sensuality."
            },
            {
                img: "https://i.imgur.com/Y4YALpr.jpg",
                text: "lol isnt this cute"
            },
            {
                img: "https://i.imgur.com/ZbY7s0n.jpg",
                text: "lol isnt this cuterrrr"
            },
            {
                img: "https://i.imgur.com/KahVBFe.jpg",
                text: "the best"
            },
            {
                img: "https://i.imgur.com/RyppKA0.jpg",
                text: "lul"
            },
            {
                img: "https://i.imgur.com/uyP8xDr.jpg",
                text: "haha"
            },
            {
                img: "https://i.imgur.com/B3xCBYV.jpg",
                text: "hehe"
            }
        ],
        index: 0
    },
    tanzania: {
        slides: [
            {
                img: "https://i.imgur.com/jExqxpv.jpg",
                text: "a zebra"
            },
            {
                img: "https://i.imgur.com/lCAG6WX.jpg",
                text: "an elephant"
            }
        ],
        index: 0 
    }
}

const toggleCarousel = name => {
    const carousel = document.querySelector(`[data-carousel-name='${name}']`);
    const popupContainer = carousel.parentElement.parentElement;
    popupContainer.classList.toggle('active');
    if(popupContainer.classList.contains("active")){
        document.body.classList.add("noscroll");
    }
    else{
        document.body.classList.remove("noscroll");
    }
};

const render = name => {
    const carousel = carousels[name];
    const index = carousel.index;
    const slide = carousel.slides[index];
    const popupImage = document.querySelector(`.carousel[data-carousel-name = "${name}"]`);
    const popupText = popupImage.nextElementSibling.querySelector("p.portfolio-popup");
    popupImage.style.backgroundImage = `url(${slide.img})`;
    popupText.textContent = slide.text;
};
const inc = name => {
    const carousel = carousels[name];
    carousel.index = (++carousel.index) % carousel.slides.length;
    render(name)
};
const dec = name => {
    const carousel = carousels[name];
    --carousel.index; 
    if(carousel.index < 0) {
        carousel.index += carousel.slides.length;
    }
    render(name);
};

const initPopup = el => {
    const container = el.parentElement.parentElement;
    container.addEventListener("click", e => {
        console.log("hehe")
        if(e.target!== container) {
            return;
        }
       toggleCarousel(el.dataset.carouselName);
    });

    const fwd = el.firstElementChild;
    fwd.addEventListener("click", inc.bind(null, el.dataset.carouselName));
    const bck= fwd.nextElementSibling;
    bck.addEventListener("click", dec.bind(null, el.dataset.carouselName));

    render(el.dataset.carouselName);
}

Array.from(domCarousel).forEach(initPopup);