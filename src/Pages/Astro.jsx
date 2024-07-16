import React, { useState, useEffect } from "react";
import useStore from "../store/country";
import { fetchAstroToday } from "../Api/currentData";
import {
  WiSunrise,
  WiSunset,
  WiMoonrise,
  WiMoonset,
  WiMoonAltWaningGibbous3,
} from "react-icons/wi";
import Loading from "../components/icons/loading/Loading";
import Error from "../components/Error";
const Astro = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const country = useStore((state) => state.country);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError();
        const data = await fetchAstroToday(country);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error?.response?.data?.error);
        setLoading(false);
      }
    };
    fetchData();
  }, [country]);
  return (
  <div>
    {(loading)? <Loading/> :   <div className="mt-10 mx-2 sm:mx-16 lg:mx-40 dark:bg-slate-800 p-2">
     {(error)? <Error error={error}/> : <> <p className="text-medium text-violet-900 dark:text-violet-200">{data?.location?.name} /{data?.location?.country}</p>
      <h1 className="flex items-center text-2xl font-bold text-violet-900 dark:text-violet-200 py-5 px-3  dark:bg-slate-700 rounded-md bg-violet-50">
        <WiMoonAltWaningGibbous3 className="text-6xl" ></WiMoonAltWaningGibbous3>Moon Phase : {data?.astronomy?.astro?.moon_phase}
      </h1>
    <p className="text-medium text-violet-900 dark:text-violet-200">Last updated : {data?.location?.localtime}</p>
      <div className="mt-2 dark:bg-slate-700 rounded-md p-3 bg-violet-50">
      <h1 className=" text-2xl font-semibold text-violet-900 dark:text-violet-200 p-2 underline underline-offset-8">Astro Timings</h1>
         <div className="grid grid-cols-2 gap-2 mt-2">
         <p className="flex items-center font-semibold sm:font-normal text-lg sm:text-2xl text-violet-900 dark:text-violet-200 "><WiSunrise className="text-5xl"></WiSunrise>Sunrise :{data?.astronomy?.astro?.sunrise}</p>
        <p className="flex items-center font-semibold sm:font-normal text-lg sm:text-2xl text-violet-900 dark:text-violet-200 "><WiSunset className="text-5xl"></WiSunset>Sunset :{data?.astronomy?.astro?.sunset}</p>
        <p className="flex items-center font-semibold sm:font-normal text-lg sm:text-2xl text-violet-900 dark:text-violet-200 "><WiMoonrise className="text-5xl"></WiMoonrise>Moonrise :{data?.astronomy?.astro?.moonrise}</p>
        <p className="flex items-center font-semibold sm:font-normal text-lg sm:text-2xl text-violet-900 dark:text-violet-200 "><WiMoonset className="text-5xl"></WiMoonset>Moonset :{data?.astronomy?.astro?.moonset}</p>
         </div>
    </div></>}
    </div>}
  </div>
  );
};

export default Astro;
