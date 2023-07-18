const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '486a052a15mshfe75718421bee3bp189022jsn0dcaf08f25a3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset        
    })
    .catch(err => console.error(err));
}

const submit = document.getElementById("submit")
submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const getStaticWeather = (city, options) => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
  
        // Update the corresponding DOM elements with the retrieved data
        document.getElementById(`cloud_pct_${city}`).innerHTML = response.cloud_pct;
        document.getElementById(`temp_${city}`).innerHTML = response.temp;
        document.getElementById(`feels_like_${city}`).innerHTML = response.feels_like;
        document.getElementById(`humidity_${city}`).innerHTML = response.humidity;
        document.getElementById(`min_temp_${city}`).innerHTML = response.min_temp;
        document.getElementById(`max_temp_${city}`).innerHTML = response.max_temp;
        document.getElementById(`wind_speed_${city}`).innerHTML = response.wind_speed;
        document.getElementById(`wind_degrees_${city}`).innerHTML = response.wind_degrees;
        document.getElementById(`sunrise_${city}`).innerHTML = response.sunrise;
        document.getElementById(`sunset_${city}`).innerHTML = response.sunset;
      })
      .catch(err => console.error(err));
  };

  getStaticWeather('shanghai', options);
  getStaticWeather('Lucknow', options);
  getStaticWeather('boston', options);
  