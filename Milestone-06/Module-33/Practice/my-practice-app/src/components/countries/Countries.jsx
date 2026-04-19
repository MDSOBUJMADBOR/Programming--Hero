import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

const [visitedCountries,setVisitedCountries] = useState([]);

const handleVisitedCountries = (country) => {

const newVisitedCountries = [...visitedCountries,country]
setVisitedCountries(newVisitedCountries)
}


          const countriesData = use(countriesPromise)
//          console.log(countriesData);
          const Countries = countriesData.countries;
          
          // console.log(Countries);

          return (
                   <div >
                    <h1>Total Country: {Countries.length}</h1>
                    <h2>All Visited Country : {visitedCountries.length} </h2>
                    <p>My Project</p>

                    <div className='countries'>
                    {
                           Countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)   
                    }
                   </div>
                   </div>
          );
};

export default Countries;
