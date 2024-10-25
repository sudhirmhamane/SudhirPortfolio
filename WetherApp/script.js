const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body')

 async function checkWeather(city){
    const api_key = "69812d5d8ba3680f84c6613fd3c39596";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(responce => responce.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    console.log(weather_data);
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Cloud' : 
            weather_img.src = "img/cloud.png";
            break;
        case 'Clear' : 
            weather_img.src = "img/clear.png";
            break;
        case 'Rain' : 
            weather_img.src = "img/rain.png";
            break;
        case 'Mist' : 
            weather_img.src = "img/mist.png";
            break;
        case 'Snow' : 
            weather_img.src = "img/snow.png";
        break;
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});


// ----------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx------------


// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById('searchBtn');
// const temperature = document.querySelector('.temperature');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');
// const location_not_found = document.querySelector('.location-not-found');
// const weather_body = document.querySelector('.weather-body');

// async function checkWeather(city) {
//     const api_key = '0c54c3cbad7757470e288655c38c26c2';
//     const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`;
    
//     const weather_data = await fetch(url).then(response => response.json());

//     if (!weather_data || !weather_data.location) {
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         return;
//     }
    
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";

//     // Display weather data from the 'current' object
//     temperature.innerHTML = `${weather_data.current.temperature}°C`;
//     humidity.innerHTML = `${weather_data.current.humidity}%`;
//     wind_speed.innerHTML = `${weather_data.current.wind_speed} Km/H`;

//     switch(weather_data.weather[0].main){
//         case 'Cloud' : 
//             weather_img.src = "img/cloud.png";
//             break;
//         case 'Clear' : 
//             weather_img.src = "img/clear.png";
//             break;
//         case 'Rain' : 
//             weather_img.src = "img/rain.png";
//             break;
//         case 'Mist' : 
//             weather_img.src = "img/mist.png";
//             break;
//         case 'Snow' : 
//             weather_img.src = "img/snow.png";
//         break;
//     }
// }

// searchBtn.addEventListener('click', () => {
//     checkWeather(inputBox.value);
// });
