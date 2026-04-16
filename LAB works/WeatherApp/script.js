const apiKey = "c60ee86ed5d0aef9978f0a8d353fd151";

// Arrow Function + Async/Await
const getWeather = async () => {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const data = await fetchWeather(city);

        if (data.cod !== "200") {
            alert("City not found or API issue");
            return;
        }

        displayWeather(data);
        drawGraph(data);

    } catch (error) {
        console.log("Error:", error);
    }
};

// Promise Example
const fetchWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

// Callback Example
const displayWeather = (data, callback = () => {}) => {
    const cityName = data.city.name;
    const temp = data.list[0].main.temp;
    const humidity = data.list[0].main.humidity;
    const condition = data.list[0].weather[0].description;

    document.getElementById("result").innerHTML = `
        <h3>${cityName}</h3>
        <p>Temperature: ${temp} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${condition}</p>
    `;

    callback();
};

// Graph using Chart.js
const drawGraph = (data) => {
    const temps = data.list.slice(0, 8).map(item => item.main.temp);
    const labels = data.list.slice(0, 8).map(item => item.dt_txt);

    const ctx = document.getElementById('weatherChart').getContext('2d');

    if (window.weatherChart) {
        window.weatherChart.destroy();
    }

    window.weatherChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                borderWidth: 2,
                fill: false
            }]
        }
    });
};