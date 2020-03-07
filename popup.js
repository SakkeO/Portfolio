document.getElementById("burlesque").addEventListener("click", e => {
    console.log("hehe")
    document.getElementById("fun").classList.add("active");
    document.body.classList.add("noscroll");
});

document.getElementById("fun").addEventListener("click", e => {
    console.log("hehe")
    if(e.target!== document.getElementById("fun")) {
        return;
    }
    document.getElementById("fun").classList.remove("active");
    document.body.classList.remove("noscroll");
});

const carousels = {
    burlesque: {
        slides: [
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


let i= 0;

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

const fwd=document.getElementById("forward");
fwd.addEventListener("click", inc.bind(null, "burlesque"));
const bck=document.getElementById("backward");
bck.addEventListener("click", dec.bind(null, "burlesque"));
