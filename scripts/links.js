const baseURL = "https://thomasfong.github.io/wdd230/";
const linksURL = "https://thomasfong.github.io/wdd230/data/links.json";

const ul = document.querySelector('.links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}


function displayLinks(weeks) {

    weeks.forEach(link => {
        const li = document.createElement('li');
        const links = link.links;

        li.innerHTML = `${link.week}: `
        links.forEach(url => {
            const a = document.createElement('a');
            a.innerHTML = ` ${url.title} `
            a.setAttribute('href', `${url.url}`);
            console.log(url);
            li.appendChild(a);

        });


        ul.appendChild(li)


    });

}


getLinks();







