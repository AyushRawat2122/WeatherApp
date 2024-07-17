import React, { useState, useEffect } from "react";
import useStore from "../store/country";
import { fetchCurrentData , fetchDayforecast } from "../Api/currentData";
import {
  WiHumidity,
  WiCloudy,
  WiRain,
  WiThermometerExterior,
  WiCloudyGusts,
  WiWindDeg,
  WiBarometer,
  WiWindy,
  WiDirectionUp,
  WiSandstorm,
} from "react-icons/wi";
import DisplayCard from "../components/DisplayCard";
import Loading from "../components/icons/loading/Loading";
import Error from "../components/Error";

const Home = () => {
  const country = useStore((state) => state.country);
  const [data, setData] = useState([]);
  const [dayForecast , setDayForecast] = useState([]);
  const [error , setError] = useState();
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
     try {
      setLoading(true);
      setError();
      const data = await fetchCurrentData(country);
      setData(data);
      const dayForecast = await fetchDayforecast(country);
      setDayForecast(dayForecast);
      setLoading(false);
     } catch (error) {
      setError(error?.response?.data?.error);
      setLoading(false);
     }
    };
    fetchData();
  }, [country]);

  const pixelize = (url) => {
    let newUrl;
    if (data.length != 0) {
      newUrl = url.replace("64x64", "128x128");
    }
    return newUrl;
  };
  return (
    <div>
      {(!loading)?
       <div className="mx-2 sm:mx-16 lg:mx-40">
        {
          (!error)? 
          <div>
                  <div className="px-4 bg-violet-50 py-5  lg:mt-16 rounded-md dark:bg-slate-800">
        <p className="text-sm font-normal text-violet-900 dark:text-violet-200 md:text-normal">
          {data?.location?.name} / {data?.location?.country}
        </p>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col gap sm:border-none border-violet-200 border-b pb-5">
            <div className="flex item-center justify-between md:gap-5">
              <img
                className="md:h-52"
                src={pixelize(data?.current?.condition?.icon)}
                alt=""
              />
              <div className="py-2 md:py-11">
                <p className="text-violet-950 font-extrabold text-4xl md:text-5xl lg:text-6xl dark:text-white">
                  {data?.current?.temp_c}&deg;C{" "}
                  <span className="text-medium font-medium dark:text-violet-200">
                    / {data?.current?.temp_f}&deg;F
                  </span>{" "}
                </p>
                <p className="text-violet-900 dark:text-violet-200 md:text-xl">
                  {data?.current?.condition?.text}
                </p>
                <p className="text-violet-900 dark:text-violet-200 md:text-xl">
                  feel's like : {data?.current?.feelslike_c}&deg;C /{" "}
                  {data?.current?.feelslike_f}&deg;F
                </p>
              </div>
            </div>
            <p className="text-sm font-normal text-violet-900 dark:text-violet-200 md:text-normal">
              Last updated : {data?.current?.last_updated}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-stretch">
            <p className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
              <WiHumidity className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiHumidity>
              Humidity : {data?.current?.humidity}
            </p>
            <p className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
              <WiCloudy className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiCloudy>
              Clouds : {data?.current?.cloud}
            </p>
            <p className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
              <WiRain className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiRain>
              Precipitation : {data?.current?.precip_in} in
              <span className="font:normal"> (inches)</span>
            </p>
            <p className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
              <WiThermometerExterior className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiThermometerExterior>
              Heat Index : {data?.current?.heatindex_c}&deg;C
            </p>
          </div>
        </div>
      </div>
      <h1 className="mt-7 lg:mt-14 text-3xl sm:text-2xl text-violet-900 dark:text-violet-200  font-semibold">Wind Statistics</h1>
      <div className=" bg-violet-50 dark:bg-slate-800 grid align-middle sm:justify-items-center gap-5 p-4 sm:grid-cols-3 rounded-md">
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiCloudyGusts className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiCloudyGusts>
          Wind Gusts :{data?.current?.gust_kph} km/hr
        </div>
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiWindDeg className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiWindDeg>
          Wind Degree :{data?.current?.wind_degree}
        </div>
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiBarometer className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiBarometer>
          Wind Pressure :{data?.current?.pressure_mb}mb
        </div>
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiWindy className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiWindy>
          Wind Speed :{data?.current?.wind_kph} km/hr
        </div>
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiDirectionUp className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiDirectionUp>
          Wind Direction :{data?.current?.wind_dir}
        </div>
        <div className="flex items-center text-violet-900 dark:text-violet-200 font-medium">
          <WiSandstorm className="text-4xl text-violet-900 dark:text-violet-200 sm:text-5xl"></WiSandstorm>
           Wind Chill :{data?.current?.windchill_c}&deg;C
        </div>
      </div>
      <h1 className="mt-7 lg:mt-14 text-3xl sm:text-2xl text-violet-900 dark:text-violet-200 font-semibold">Daily ForeCast</h1>
      <div className="bg-violet-50 dark:bg-slate-800 p-3 grid gap-3 xl:grid-cols-2">
        {
          dayForecast.map((dayForecast)=>{
            return( <DisplayCard key={dayForecast?.time} hour={dayForecast}/>)
          })
        }
      </div>
     
          </div>: <Error error={error}/>
        }
    </div> : <Loading/>}
    </div>
  );
};

export default Home;
