import Details from "./details"
import CountryList from "./countryList"

const Display = ({ countries, onClick, weather }) => {
  if (countries.length <= 10) {
    if (countries.length === 1) {
      return (
        <Details country={countries[0]} weather={weather} />
      )
    } else {
      return <CountryList countries={countries} onClick={onClick} />
    }
  }
  else {
    return <p>Too many matches.Specify other filter.</p>
  }
}


export default Display