const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");
const letterPage = document.getElementById("letterPage");

const closeButton = document.getElementById("closeButton");

const music = document.getElementById("music");


// =========================
// OPEN LETTER
// =========================

openButton.addEventListener("click", () => {

    envelope.classList.add("open");

    // Small delay for the envelope animation
    setTimeout(() => {

        opening.classList.add("hide");

        letterPage.classList.add("show");

    }, 900);


    // Try to start music
    music.play().catch(() => {
        // Browser may block autoplay.
        // That's okay.
    });

});


// =========================
// CLOSE LETTER
// =========================

closeButton.addEventListener("click", () => {

    letterPage.classList.remove("show");

    setTimeout(() => {

        opening.classList.remove("hide");

        envelope.classList.remove("open");

    }, 700);

});


// =========================
// FLOATING PARTICLES
// =========================

const particleContainer =
    document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        5 + Math.random() * 7 + "s";

    particle.style.width =
        3 + Math.random() * 5 + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(particle);
}
