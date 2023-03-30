const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e41b09ad0mshb780d9f9e546dd0p1ca36fjsn753bc3a54865',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => { 
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp+ ' ℃'
		main_temp.innerHTML = response.temp+ ' ℃'
		feels_like.innerHTML = response.feels_like+ ' ℃'
		humidity.innerHTML = response.humidity
		humidity_main.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp+ ' ℃'
		max_temp.innerHTML = response.max_temp+ ' ℃'
		wind_speed.innerHTML = response. wind_speed+ ' Km/hr'
		wind_speed_main.innerHTML = response. wind_speed+ ' Km/hr'
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")