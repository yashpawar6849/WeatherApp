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
       
const getStaticWethearShanghai = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        cloud_pct_shanghai.innerHTML = response.cloud_pct
        temp_shanghai.innerHTML = response.temp
        feels_like_shanghai.innerHTML = response.feels_like
        humidity_shanghai.innerHTML = response.humidity
        min_temp_shanghai.innerHTML = response.min_temp
        max_temp_shanghai.innerHTML = response.max_temp
        wind_speed_shanghai.innerHTML = response.wind_speed
        wind_degrees_shanghai.innerHTML = response.wind_degrees
        sunrise_shanghai.innerHTML = response.sunrise
        sunset_shanghai.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
    

const getStaticWethearBoston = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        cloud_pct_boston.innerHTML = response.cloud_pct
        temp_boston.innerHTML = response.temp
        feels_like_boston.innerHTML = response.feels_like
        humidity_boston.innerHTML = response.humidity
        min_temp_boston.innerHTML = response.min_temp
        max_temp_boston.innerHTML = response.max_temp
        wind_speed_boston.innerHTML = response.wind_speed
        wind_degrees_boston.innerHTML = response.wind_degrees
        sunrise_boston.innerHTML = response.sunrise
        sunset_boston.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
    


const getStaticWethearLucknow = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        cloud_pct_Lucknow.innerHTML = response.cloud_pct
        temp_Lucknow.innerHTML = response.temp
        feels_like_Lucknow.innerHTML = response.feels_like
        humidity_Lucknow.innerHTML = response.humidity
        min_temp_Lucknow.innerHTML = response.min_temp
        max_temp_Lucknow.innerHTML = response.max_temp
        wind_speed_Lucknow.innerHTML = response.wind_speed
        wind_degrees_Lucknow.innerHTML = response.wind_degrees
        sunrise_Lucknow.innerHTML = response.sunrise
        sunset_Lucknow.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
    
getStaticWethearLucknow()
getStaticWethearBoston()
getStaticWethearShanghai()      