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
        markers: true,
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
        markers: true,
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
