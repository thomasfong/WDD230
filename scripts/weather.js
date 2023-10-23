
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-22.2855&lon=-114.1577&appid=a11f26bf5918aba94ef2fcd8b391fc4b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F `;
    const iCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iCode}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    const desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;

}