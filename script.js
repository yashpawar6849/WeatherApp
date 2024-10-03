const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd517e74c48msh635209c4a4b9182p19f0c9jsn0a8797f6627a',  // Use your API key here
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  loading.style.display = "block"; // Show loading indicator

  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct || 'N/A';
      temp.innerHTML = response.temp || 'N/A';
      feels_like.innerHTML = response.feels_like || 'N/A';
      humidity.innerHTML = response.humidity || 'N/A';
      min_temp.innerHTML = response.min_temp || 'N/A';
      max_temp.innerHTML = response.max_temp || 'N/A';
      wind_speed.innerHTML = response.wind_speed || 'N/A';
      wind_degrees.innerHTML = response.wind_degrees || 'N/A';
      sunrise.innerHTML = response.sunrise || 'N/A';
      sunset.innerHTML = response.sunset || 'N/A';
  })
  .catch(err => {
      console.error('Error fetching data: ', err);
  })
  .finally(() => {
      loading.style.display = "none"; // Hide loading indicator
  });
};


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
getStaticWeather('Kolkata', options);
getStaticWeather('Mumbai', options);
getStaticWeather('Chennai', options);
getStaticWeather('Bangalore', options);
getStaticWeather('Pune', options);
getStaticWeather('Hyderabad', options);
getStaticWeather('Jaipur', options);
  
