import React from "react";
import { WiRain ,WiHumidity } from "react-icons/wi";
const DisplayCard = ({ hour }) => {
  const pixelize = (url) => {
    let newUrl;
    if (url) {
      newUrl = url.replace("64x64", "128x128");
    }
    return newUrl;
  };
  return (
    <div className="bg-white rounded-md dark:bg-slate-700 flex flex-col p-3 w-full">
       <p className="text-lg underline underline-offset-2 text-violet-900 dark:text-violet-200">{hour?.time.trim('/')}</p>
     <div className="flex items-center">
       <img src={pixelize(hour?.condition?.icon)} alt="" className="rounded-full w-[64px] sm:w-[120px]"/>
      <div className="text-violet-900 dark:text-violet-200">
        <div className="flex gap-10 w-full items-center">
          <div>
            <p className="text-3xl sm:text-3xl">{hour?.temp_c}&deg;C</p>
            <p>{hour?.condition?.text}</p>
          </div>
          <div>
            <p className="flex items-center"> <WiHumidity className="text-2xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiHumidity>Humidity:{hour?.humidity}</p>
            <p className="flex items-center"> <WiRain className="text-2xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiRain>Precipitation: {hour?.precip_in}</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default DisplayCard;
