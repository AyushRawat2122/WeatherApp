import { WiDayCloudyGusts } from "react-icons/wi";
import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import useTheme from "../store/themeContext"
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const NavBar = () => {
  const darkTheme = useTheme((state)=>state.setDark);
  const lightTheme = useTheme((state)=>state.setLight);
  const [isSelected, setIsSelected] = useState(true);

  useEffect(()=>{
    if(isSelected){
      lightTheme();
    }
    else{
      darkTheme();
    }
  } , [isSelected])

  return (
    <div className="flex justify-between items-center py-1 sm:py-3 px-5 bg-violet-900  sm:mx-16 lg:mx-40 sm:rounded-b-xl">
    <Link to={'/'}>  <WiDayCloudyGusts className="text-white font-extrabold text-5xl"></WiDayCloudyGusts> </Link>
      <div className="flex justify-center items-center gap-1">
        <SearchBar className="hidden sm:flex"/>
        <div>
          <Switch
            isSelected={isSelected} onValueChange={setIsSelected}
            defaultSelected
            size="lg"
            className="bg-purple-400 h-8 w-8 rounded-md sm:rounded-full flex justify-center items-center"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <SunIcon className="text-white bg-purple-400 text-2xl" />
              ) : (
                <MoonIcon className="text-purple-900 bg-purple-400 text-2xl" />
              )
            }
          ></Switch>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
