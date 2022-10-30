const CountryList = ({ countries, onClick }) => {
  return (
    <div>
      {
        countries.map((country, idx) => <p key={idx}>{country.name.common} <button value={country.name.common} onClick={(e) => onClick(e)}>Show</button> </p>)
      }
    </div>
  )
}

export default CountryList