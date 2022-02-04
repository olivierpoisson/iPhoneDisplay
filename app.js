//! Pin the first section (parallax)
const timelinePin = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    },
});

const timelineFadeIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-40%",
        end: "40%",
    },
});

timelineFadeIn.fromTo(
    ".highlight",
    { color: "rgba(255, 255, 255, 0.4)" },
    { color: "rgba(255, 255, 255, 1)", stagger: 1 }
);
const timelineFadeOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-20%",
        end: "60%",
    },
});

timelineFadeOut.to(".highlight", {
    color: "rgba(255, 255, 255, 0.4)",
    stagger: 1,
});

//! Section 3
const timelineSplit = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-25%",
        end: "20%",
        scrub: true,
    },
});
timelineSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
timelineSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
timelineSplit.fromTo(
    ".product-text-left",
    { x: "50%", opacity: 0 },
    { opacity: 1, x: 0 },
    "<"
);
timelineSplit.fromTo(
    ".product-text-right",
    { x: "-50%", opacity: 0 },
    { opacity: 1, x: 0 },
    "<"
);
const timelineSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%",
    },
});

//! Carousel
const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;
    swatch.addEventListener("click", (e) => {
        let swatchName = e.target.getAttribute("swatch");
        let closeUp = document.querySelector("." + swatchName);

        //* Check if we are already on the swatch
        if (currentSwatch === swatchName) {
            return;
        }

        gsap.set(closeUp, { zIndex: topIndex });
        gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

        //* Gallery
        gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });

        //? Increment zindex
        topIndex++;
        //? Set currentSwatch
        currentSwatch = swatchName;
    });
});

const timelineVideo = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-page",
        start: "0%",
        end: "150%",
        scrub: true,
        pin: true,
        pinSpacing: false,
    },
});
timelineVideo.fromTo(
    ".product-video",
    { currentTime: 0 },
    { currentTime: 3, duration: 1 }
); //? 3 because we know the video lasts 3 seconds
timelineVideo.fromTo(
    ".product-info-container h3",
    { opacity: 0 },
    { opacity: 1, stagger: 0.25, duration: 0.5 },
    "<"
);

//! Last section
const timelineParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".sixth-page",
        start: "-25%",
        end: "50%",
        scrub: true,
    },
});

timelineParallax.fromTo(".photo-description", { y: 0 }, { y: -80 });
timelineParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
timelineParallax.fromTo(".phone-video", { y: 0 }, { y: -200 }, "<");
