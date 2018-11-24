
let weatherRequest = new XMLHttpRequest();
 let urlAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=467917115c2fb1ab165e7743f138efd0";
 weatherRequest.open('GET',urlAPI, true);
 weatherRequest.send();
 weatherRequest.onload = function() {
   let weatherData = JSON.parse
   (weatherRequest.responseText);
   console.log(weatherData);
   //using main instead for array
   document.getElementById("current_temp").innerHTML = weatherData.main.temp;
   document.getElementById("humidity").innerHTML = weatherData.main.humidity;
   document.getElementById("wind_spd").innerHTML = weatherData.wind.speed;
   document.getElementById("wind_dir").innerHTML = weatherData.wind.deg;
let imagescrc = "http://openweathermap.org/img/w" + weatherData.weather[0].icon + ".png";
document.getElementById('weatherimage')
.innerHTML = imagesrc;   
}
//end of onload function