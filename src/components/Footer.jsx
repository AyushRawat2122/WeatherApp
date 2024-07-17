import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
     <div>
           <div className = 'grid  grid-cols-3 bg-violet-900  justify-center md:mx-[10vw] lg:mx-[20vw] p-2 sm:p-1 rounded-t-lg gap-3 sm:gap-2'>
           <Link to={'/'}> <button className='w-full bg-violet-300 py-2 sm:p-2 rounded-full  sm:rounded-md hover:bg-violet-200 text-violet-800 font-bold text-xs sm:text-lg'>Current Weather</button></Link>
            <Link to={'/Astrology'}><button className='w-full bg-violet-300 py-2 sm:p-2 rounded-full sm:rounded-md hover:bg-violet-200 text-violet-800 font-bold text-xs sm:text-lg '>Astro Forecast</button></Link>
            <Link to={'/SportsEvent'}><button className='w-full bg-violet-300 py-2 sm:p-2 rounded-full  sm:rounded-md hover:bg-violet-200 text-violet-800 font-bold text-xs sm:text-lg'>Sports Event</button></Link>
        </div>
     </div>
    );
}
export default Footer;
