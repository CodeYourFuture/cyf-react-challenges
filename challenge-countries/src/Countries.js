import "stop-runaway-react-effects/hijack";
import React, {useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import DropDown from './DropDown.js'
// import countriesAll from "./countriesAll.json";

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [countriesAll, setCountriesAll] = useState([]);

  useEffect(() => {
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        
        setCountries(data);

        setCountriesAll(data);
      });
  }, []);
  
  function search (searchValue) {
    setCountries(countriesAll.filter ((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    ))
  }


  function regionsVal () { 
    
  }

  return (
    <div className="App-content">
      <Search searchFn = {search} />
      < DropDown region = {regionsVal} />
      <div className="container">
        < SearchResults results = {countries} />
      </div>
    </div>
  );
}

  export default Countries;


