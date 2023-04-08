import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
      <div className=''>
        <div className="flex flex-col gap-10 justify-between container mx-auto mt-10 navbar bg-base-100">
          <div className="">
            <a className="btn btn-ghost normal-case text-2xl">
              rest <span className='text-green-500 text-3xl'>Countries</span>
            </a>
          </div>
          <div className="flex gap-10">
            
              
                <Link to='./' className='text-lg font-semibold'>Home</Link>
              
              
                <Link to='./details' className='text-lg font-semibold'>
                  Country details
                  
                </Link>
                
              
              
                <Link className='text-lg font-semibold'>Feedback</Link>
              
            
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Header;