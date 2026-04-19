import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries}) => {

const [visited,setVisited] = useState(false);

const handleVisited = () => {
          // if(visited){
          //           setVisited(false)
          // }
          // else{
          //           setVisited(true)
          // }

          setVisited(!visited)
          handleVisitedCountries(country)
}
          
          return (
                    <div className={`country ${visited && 'country-visited'}`}>
                              <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                              <h3>Name:{country.name.common}</h3>
                              <p>Area:{country.area.area}</p>
                              <button className='btn' onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
                    </div>
          );
};

export default Country;