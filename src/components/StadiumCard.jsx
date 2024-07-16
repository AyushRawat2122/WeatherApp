import React from "react";
const StadiumCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-3xl dark:text-violet-50 text-violet-900 font-semibold">
          <p>{data?.tournament}</p>
          <p className="text-sm md:text-lg">{data?.match}</p>
        </div>

        <div className="flex flex-col text-sm md:flex-row md:gap-3 sm:text-medium dark:text-violet-50 text-violet-900 sm:font-medium">
          <p>Stadium: {data?.stadium}</p> <p>location: {data?.country}</p>{" "}
          <p>time: {data?.start}</p>
        </div>
      </div>
    </div>
  );
};

export default StadiumCard;
