import axios from 'axios'
import { useState, useEffect } from 'react';
import Display from './components/display';


const App = () => {
  const [newCountry, setNewCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [weatherData, setWeatherData] = useState({})


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleCountryChange = (event) => {
    const name = event.target.value
    const countryList = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(name.toLowerCase())
    })
    setNewCountry(name)
    setFilteredCountries(countryList)
  }

  useEffect(() => {
    const getData = async () => {
      if (filteredCountries.length === 1) {
        const url = 'http://api.openweathermap.org/'
        // get geolocation
        const response = await axios.get(`${url}geo/1.0/direct?q=${filteredCountries[0].capital[0]}&limit=1&appid=${process.env.REACT_APP_WEATHER_API}`)
        // get weather data
        const weatherResponse = await axios.get(`${url}data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${process.env.REACT_APP_WEATHER_API}`)

        // format weather data 
        const temp = (Number(weatherResponse.data.main.temp) - 273.15).toFixed(2)
        const windSpeed = weatherResponse.data.wind.speed + 'm/s'
        const icon = weatherResponse.data.weather[0].icon
        setWeatherData({ temp, windSpeed, icon })
      }
    }
    getData()
  }, [filteredCountries])
  return (
    <div>
      <form>
        find countries: <input value={newCountry} onChange={handleCountryChange} />
      </form>
      <Display countries={filteredCountries} onClick={handleCountryChange} weather={weatherData} />
    </div>
  )
}
export default App;
