const Details = (({ country, weather }) => {

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <p><b>languages:</b></p>
      <ul>
        {Object.entries(country.languages).map((val) => <li key={val[0]}>{val[1]}</li>)}
      </ul>
      <img src={country.flags.png} alt="country flag" />

      <h2>Weather</h2>
      <p>temperature {weather.temp} Celsius</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt='weather' />
      <p>wind {weather.windSpeed}</p>
    </div>
  )
})

export default Details