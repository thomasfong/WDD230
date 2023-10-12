
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const descript = document.querySelector('#descript');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-27.59&lon=-48.52&appid=154755306c2db4e5311c3ced5b758d2c';

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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', `${desc}`);
}
apiFetch();
