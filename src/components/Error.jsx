import React from 'react';
import errorImg from '../Assets/error.png'
const Error = ({error}) => {
    console.log(error);
    return (
        <div className='mt-20'>
            <div className='flex items-center flex-wrap flex-col sm:flex-row'>
            <img src={errorImg} alt=""  className='h-[256px]'/>
            <div>
            <p className='text-5xl font-bold text-violet-900 dark:text-violet-200'>Error : {error.code}</p>
            <p className='text-lg font-semibold text-violet-900 dark:text-violet-200'>{error.message}</p>
            </div>
            </div>
        </div>
    );
}

export default Error;
