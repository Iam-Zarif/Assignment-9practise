import React from 'react';
import { Outlet } from 'react-router-dom';
import BDImage from '../../media/bd-flag.jpg';
import IranImage from '../../media/iran-flag.jpg';
import JapanImage from '../../media/Japan-flag.jpg';
import SaudiImage from '../../media/saudi-flag.jpg';
const Home = () => {
    return (
      <div className="mt-20 container mx-auto ">
        <div className="container mx-auto carousel w-4/5 h-2/5 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={BDImage} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={JapanImage} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={SaudiImage} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={IranImage} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
            
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Home;