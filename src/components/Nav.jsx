
import React from 'react';

const Nav = ({isOpen})  => {

    return  (
     <div>
        <ul  className={ `px-5 z-10 md:mr-4 md:open absolute md:relative py-28 md:py-0 top-16 left-0 md:top-0  w-full md:w-auto h-screen  md:h-auto flex flex-col md:flex-row justify-between bg-white ${ isOpen ? 'open' : 'closed'}`} >
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