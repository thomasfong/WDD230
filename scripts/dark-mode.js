const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards_links = document.querySelectorAll(".card ul");
const card = document.querySelectorAll(".card");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const title = document.querySelector(".title");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        body.style.background = "#000";
        modeButton.textContent = "❎";
        content.style.background = "#000";
        title.style.color = "white";
        for (let i = 0; i < cards_links.length; i++) {
            cards_links[i].style.color = "white";
            cards_links[i].style.background = "black";
        }
        for (let i = 0; i < card.length; i++) {
            card[i].style.background = "black";
        }
    } else {
        main.style.background = "#DEEFE7";
        main.style.color = "black";
        body.style.background = "#DEEFE7";
        modeButton.textContent = "❎";
        content.style.background = "#DEEFE7";
        title.style.color = "#07232c";
        for (let i = 0; i < cards_links.length; i++) {
            cards_links[i].style.color = "black";
            cards_links[i].style.background = "#DEEFE7";
        }
        for (let i = 0; i < card.length; i++) {
            card[i].style.background = "#DEEFE7";
        }
        modeButton.textContent = "☑️";
    }
});