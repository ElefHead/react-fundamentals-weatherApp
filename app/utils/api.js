const key = '' //Enter key here
const params = `&type=accurate&APPID=${key}&cnt=5`

function handleError(err) {
	console.warn(err)
	return null
}

export async function getWeather(city){
	const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast?q=${city}${params}`)
	const response = await fetch(encodedURI)
		.catch(handleError)
	return response.json()
}