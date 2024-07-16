import React from 'react';
import './loading.css'
const Loading = () => {
    return (
        <div>
            <div className="container flex justify-center">
             <div className="dash uno bg-violet-900 dark:bg-violet-200"></div>
             <div className="dash dos bg-violet-900 dark:bg-violet-200"></div>
             <div className="dash tres bg-violet-900 dark:bg-violet-200"></div>
             <div className="dash cuatro bg-violet-900 dark:bg-violet-200"></div>
        </div>
        </div>
    );
}

export default Loading;
