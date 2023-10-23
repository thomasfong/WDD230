const baseURL = "https://thomasfong.github.io/wdd230/";

const membersLink = "https://thomasfong.github.io/wdd230/chamber/data/members.json";

const cardSection = document.querySelector('.grid');

async function getMembers() {
    const response = await fetch(membersLink);
    const data = await response.json();
    console.log(data.members)
    displayMembers(data.members);
}


function displayMembers(members) {

    members.forEach(member => {
        const div = document.createElement('section');
        const img = document.createElement('img');
        const address = document.createElement('h3');
        const phone = document.createElement('h4');
        const level = document.createElement('p');
        const website = document.createElement('a');
        img.setAttribute('src', `${member.logo}`);
        img.setAttribute('alt', `${member.name} Logo`);
        address.innerHTML = `${member.address}`
        phone.innerHTML = `${member.phone}`
        website.innerHTML = `${member.website}`
        level.innerHTML = `${member.level}`
        website.setAttribute('href', `${member.website}`);
        div.appendChild(img)
        div.appendChild(address)
        div.appendChild(phone)
        div.appendChild(website)
        div.appendChild(level)
        cardSection.appendChild(div)




    });

}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


getMembers();