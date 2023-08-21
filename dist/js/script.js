function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.offsetX - radius}px`;
    circle.style.top = `${event.offsetY - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.querySelector(".ripple");
    if (ripple) ripple.remove();

    button.appendChild(circle);
}

const buttons = document.querySelectorAll("button[data-ripple]");
for (const button of buttons) {
    if (!button.classList.contains("tooltip")) button.addEventListener("click", createRipple);
}