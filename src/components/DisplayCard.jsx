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
     <div className="grid grid-cols-[1fr_3fr] w-full items-center gap-2 md:gap-5">
       <img src={pixelize(hour?.condition?.icon)} alt="" className="rounded-full w-[64px] sm:w-[120px]"/>
      <div className="text-violet-900 dark:text-violet-200">
        <div className="grid grid-cols-[1fr_2fr] align-middle items-center gap-3">
          <div className="items-center">
            <p className="text-2xl sm:text-4xl">{hour?.temp_c}&deg;C</p>
            <p className="text-small sm:text-lg">{hour?.condition?.text}</p>
          </div>
          <div className="items-center">
            <p className="flex items-center text-small sm:text-lg"> <WiHumidity className="text-2xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiHumidity>Humidity:{hour?.humidity}</p>
            <p className="flex items-center text-small sm:text-lg"> <WiRain className="text-2xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiRain>Precipitation: {hour?.precip_in}</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default DisplayCard;
