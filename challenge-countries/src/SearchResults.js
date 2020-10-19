import React, {useState }  from "react";


const SearchResults = ({results}) => {
    
    // console.log(countries);
    // const [countries, setCountries] = useState("");
    
  return (
    <>
      {results.map((country) => (
        <div className="country" key={country.alpha3Code}>
          <img
            src={country.flag}
            alt=""
            style={{ width: "250px", height: "220px" }}
          />
          <div> {country.name} </div>
          <div> Population: {country.population} </div>
          <div> Capital: {country.capital} </div>
          <div>Region: {country.region}</div>
        </div>
      ))}
    </>
  );  
};

export default SearchResults;