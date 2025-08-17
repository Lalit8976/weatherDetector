// index.js

const searchBox = document.getElementById("search");
const temp = document.getElementById("temp");
const ws = document.getElementById("ws");
const hmdty = document.getElementById("hmdty");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY', // यहाँ अपना सही API Key डालना
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getWeather(city) {
    try {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data); // console पर देख सकते हो पूरा data

        // HTML में data set करना
        temp.innerHTML = `${data.temp}<sup>o</sup>`;
        ws.innerText = `${data.wind_speed} km/h`;
        hmdty.innerText = `${data.humidity}%`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// पेज load होते ही Lucknow का data लोड होगा
getWeather("Lucknow");

// जब input change करके Enter दबाएंगे तो नया data आएगा
searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getWeather(searchBox.value);
    }
});
