import React from 'react';

const CountryCalc = ({ countryQuantity }) => {
    console.log(countryQuantity)
  return (
    <div>
      <div className="border rounded-2xl p-5">
        <p>Selected Countries : {countryQuantity.length}</p>
        <div className="border rounded-xl p-3 mt-5">
          {/* {
            countryQuantity.map(id => <p>Name : {}</p>)
          } */}
        </div>
      </div>
    </div>
  );
};

export default CountryCalc;