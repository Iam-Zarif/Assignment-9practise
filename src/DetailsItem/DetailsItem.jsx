import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DetailsItem = ({ details, quantity }) => {
  let { flags, name, region, area, population } = details;
  return (
    <div>
      <div>
        <div>
          <div className="border p-5 rounded-2xl">
            <img className="" src={flags.svg} alt="" />
            <p className="text-3xl text-center mt-5 font-bold">
              {name.official}
            </p>
            <p className="text-lg text-center mt-10 font-bold">
              <span className="text-green-500">Continent</span> : {region}
            </p>
            <p className="text-lg text-center mt-5 font-bold">
              <span className="text-green-500">Area</span> : {area} Square KM
            </p>
            <p className="text-lg text-center mt-5 font-bold">
              <span className="text-green-500">Population</span> : {population}
            </p>
            <section className="text-center mt-10">
              <button
                onClick={() => quantity()}
                className="text-lg border rounded-2xl px-4 py-2 hover:border-lime-500"
              >
                Select
              </button>
              <br />
              <br />
              <Link to="./moreDetails">
                <button
                  
                  className="font-semibold inline-block text-lg border rounded-2xl px-4 py-2 hover:border-lime-500"
                >
                  More details...
                </button>
              </Link>
            </section>
          </div>
        </div>
        {/*  */}
      </div>
      {/* <div>
          <p>i am Zarif</p>
        </div> */}
      <Outlet></Outlet>
    </div>
  );
};

export default DetailsItem;