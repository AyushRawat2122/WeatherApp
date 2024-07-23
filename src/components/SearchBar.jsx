import React, { useState , useEffect } from "react";
import { fetchoptions } from "../Api/currentData";
import { IoIosCloseCircle } from "react-icons/io";
import useStore from "../store/country";
import { Button } from "@nextui-org/react";

const SearchBar = ({ className }) => {
  const [input, setInput] = useState("");
  const [inputOpt, setInputOpt] = useState([]);
  const updateCountry = useStore((state) => state.updateCountry);
  const [error, setError] = useState(null);

   const handleChange = (e) => {
    setError(null);
    let country = e.target.value.replaceAll("-", "/");
    setInput(country);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (input.length > 1) {
        try {
          const data = await fetchoptions(input);
          setInputOpt(data);
        } catch (error) {
          setError(error.message);
          console.error(error);
        }
      } else {
        setInputOpt([]);
      }
    };

    fetchData();
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputOpt([]);
    updateCountry(input);
  };

  return (
    <div className={`gap-5 items-center ${className}`}>
      <form
        className=" bg-violet-300 rounded-full flex"
        onSubmit={handleSubmit}
      >
        <div className="flex pl-2 items-center relative">
          <IoIosCloseCircle
            className="text-violet-100 text-2xl cursor-pointer"
            onClick={() => {
              setInput("");
              setInputOpt([]);
            }}
          />
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="text-violet-900 text-lg font-medium h-full rounded-full px-3 outline-none bg-violet-300 w-full"
            placeholder="city/state/country"
          />
          <div className="mt-1 absolute top-[100%] bg-violet-100 w-[100%] rounded-sm">
          {error ? (
              <div></div>
            ) : (
              <ul>
                {inputOpt.map((opt) => (
                  <li
                    key={opt.id}
                    className="text-violet-800 text-md rounded-md font-medium cursor-pointer hover:bg-violet-200 p-1 border-b-1 border-violet-200"
                    onClick={() => {
                      setInput(opt.url);
                      setInputOpt([]);
                    }}
                  >
                    {`${opt.name}/${opt.region}/${opt.country}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="bg-violet-500 text-white font-bold text-md rounded-full h"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
