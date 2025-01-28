import { useEffect } from "react";
import { useState } from "react";
import country from "./country/Country";
import Country from "./country/Country";

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
   
    return (
        <div>
            <h3>countries: {countries.length}</h3>
            {
                countries.map(country=> <Country country={country}>
                    
                </Country>)
            }
        </div>
    );
};

export default Countries;