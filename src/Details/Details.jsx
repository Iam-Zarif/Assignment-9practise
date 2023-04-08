import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsItem from '../DetailsItem/DetailsItem';
import CountryCalc from '../CountryCalc/CountryCalc';

const Details = () => {
    let details = useLoaderData();
    
    let [countryQuantity , setCountryQuantity] = useState([])
    let quantity =(id) =>{
        // console.log(id);
        const newQuantity =[...countryQuantity, id]
        setCountryQuantity(newQuantity)
    }
    
    // console.log(details);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 container mx-auto mt-20">
        {details.slice(0, 10).map((details, i) => (
          <DetailsItem
            details={details}
            key={details.cca3}
            quantity={quantity}
          ></DetailsItem>
        ))}
        <CountryCalc countryQuantity={countryQuantity}></CountryCalc>
        {/* {details.map((details, i) => console.log(details.population))} */}
      </div>
    );
};

export default Details;