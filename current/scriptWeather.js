$(document).ready(function () {
    const apiKey = "ddaddd18844f7bd60fff29e31d5a96f5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    let city1=localStorage.getItem("city");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather1").style.display = "none";
        }

        else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".description").innerHTML = " ("+data.weather[0].description+")";  
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            document.querySelector(".weather1").style.display = "block";

            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather1").style.display = "block";
        }
    
    }
    checkWeather("Delhi");
    if(city1=="")
    checkWeather("Delhi");
else
    checkWeather(city1);


})