
import React from 'react';

const Nav = ({isOpen})  => {

    return  (
     <div>
        <ul  className={ `px-5 z-10 md:mr-4  lg:open absolute lg:relative py-28 lg:py-0 top-20 left-0 lg:top-0 w-full lg:w-auto h-screen   flex flex-col lg:h-auto lg:flex-row justify-between bg-white ${ isOpen ? 'open' : 'closed'}`} >
          <li  className="uppercase md:mr-4">
            <a href="/">Products</a>
          </li>
          <li  className="uppercase md:mr-4">
          <a href="/">Colors</a>
          </li>
          <li  className="uppercase md:mr-4">
          <a href="/">Inspiration</a>
          </li>
          <li  className="uppercase md:mr-4">
          <a href="/">Tips</a> 
          </li>
          <li  className="uppercase md:mr-4">
          <a href="/">Find shop</a>
          </li>
        </ul>
        </div>
 )
}

export default Nav;