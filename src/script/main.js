var cvSecondary = document.querySelector(".cvSecondary");
var morePlus = document.querySelectorAll(".more");
var copyText = document.querySelector(".email").innerText;
var tooltip = document.querySelectorAll(".tooltipText");

function showMore() {

    if (cvSecondary.style.display === "none") {
        cvSecondary.style.display = "block";
        for (let i = 0; i < morePlus.length; i++) {
            const element = morePlus[i];
            element.classList.add("moreChange");
        }

    } else {
        cvSecondary.style.display = "none";
        for (let i = 0; i < morePlus.length; i++) {
            const element = morePlus[i];
            element.classList.remove("moreChange");;
        }
    }
}

function copyToClipboard() {

    navigator.clipboard.writeText(copyText);

    for (let i = 0; i < tooltip.length; i++) {
        const element = tooltip[i];
        element.innerHTML = "e-mail copied!";
    }
}

function resetTooltip() {
    for (let i = 0; i < tooltip.length; i++) {
        const element = tooltip[i];
        element.innerHTML = "copy e-mail";
    }
}