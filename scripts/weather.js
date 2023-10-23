
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const descript = document.querySelector('#descript');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-22.2855&lon=-114.1577&appid=a11f26bf5918aba94ef2fcd8b391fc4b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
    image = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    image.setAttribute('src', `${iconsrc}`);
    image.setAttribute('alt', `${desc}`);
    weatherIcon.appendChild(image);
}
apiFetch();
