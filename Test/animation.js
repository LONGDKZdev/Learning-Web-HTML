document.addEventListener("mousemove", (event) => {
    const dragonHead = document.createElement("div");
    dragonHead.classList.add("dragon");
    dragonHead.style.left = `${event.pageX}px`;
    dragonHead.style.top = `${event.pageY}px`;

    document.body.appendChild(dragonHead);

    // Add dragon body parts
    for (let i = 1; i <= 5; i++) {
        const bodyPart = document.createElement("div");
        bodyPart.classList.add("dragon-body");

        bodyPart.style.left = `${event.pageX - i * 20}px`;
        bodyPart.style.top = `${event.pageY}px`;

        document.body.appendChild(bodyPart);

        setTimeout(() => {
            bodyPart.remove();
        }, 2000);
    }

    // Remove the dragon head after animation completes
    setTimeout(() => {
        dragonHead.remove();
    }, 2000);
});
