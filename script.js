const messages = [
    "esti sigura?",
    "sigura sigura??",
    "pe bune?",
    "iubitaaa...",
    "te rog gandeste te!",
    "daca zici nu ma superiiii...",
    "o sa fiu suparat rau...",
    "foarte foarte foarte suparat...",
    "bine nu te mai intreb...",
    "glumesccc ahaha zii te rog daaaa! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
