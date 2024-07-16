import React, { useState, useEffect , useId} from "react";
import useStore from "../store/country";
import { SportsEvent } from "../Api/currentData";
import Loading from "../components/icons/loading/Loading";
import Error from "../components/Error";
import StadiumCard from "../components/StadiumCard";
import { GiGolfFlag } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { MdStadium } from "react-icons/md";
const Today = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const country = useStore((state) => state.country);
  const [data, setData] = useState([]);
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError();
        const data = await SportsEvent(country);
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
    <div className="mt-10 mx-2 sm:mx-16 lg:mx-40">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {error ? (
            <Error error={error} />
          ) : (
            <div>
              <div className="dark:bg-slate-800 m-1 p-3 rounded-md bg-violet-50">
                <p className="text-4xl dark:text-violet-200 text-violet-900 underline underline-offset-[10px] my-2 mb-10">
                  Sports Event In City :
                </p>
                <p className="mt-3 text-2xl text-violet-900 dark:text-violet-200 ">
                  FootBall:
                </p>
                <div>
                  {data?.football.length === 0 ? (
                    <div className="flex flex-col items-center dark:bg-slate-700 bg-white rounded-md py-10 capitalize">
                      <MdStadium className="text-[100px] text-violet-900 dark:text-violet-200"></MdStadium>
                      <p className="text-2xl text-violet-900 dark:text-violet-200">
                        No Matches found for today
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {data?.football.map((match , index) => {
                        const id = `${id1}+${index}`;
                        return (
                          <div key={id} className="p-2 flex gap-5 bg-white dark:bg-slate-700 items-center md:p-5 rounded-md">
                            <div>
                              <IoMdFootball className="text-8xl text-violet-900 dark:text-violet-200" />
                            </div>
                            <div>
                              <StadiumCard data={match}></StadiumCard>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-2xl text-violet-900 dark:text-violet-200 ">
                  Cricket:{" "}
                </p>
                <div>
                  {data?.cricket.length === 0 ? (
                    <div className="flex flex-col items-center dark:bg-slate-700 bg-white rounded-md py-10 capitalize">
                      <MdStadium className="text-[100px] text-violet-900 dark:text-violet-200"></MdStadium>
                      <p className="text-2xl text-violet-900 dark:text-violet-200">
                        No Matches found for today
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {data?.cricket.map((match,index) => {
                        const id = `${id2}+${index}`;
                        return (
                          <div key={id} className="p-2 flex gap-5 bg-white dark:bg-slate-700 items-center md:p-5 rounded-md">
                            <div>
                              <MdSportsCricket className="text-8xl text-violet-900 dark:text-violet-200" />
                            </div>
                            <div>
                              <StadiumCard data={match}></StadiumCard>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-2xl text-violet-900 dark:text-violet-200 ">
                  Golf Matches:{" "}
                </p>
                <div>
                  {data?.golf.length === 0 ? (
                    <div className="flex flex-col items-center dark:bg-slate-700 bg-white rounded-md py-10 capitalize">
                      <MdStadium className="text-[100px] text-violet-900 dark:text-violet-200"></MdStadium>
                      <p className="text-2xl text-violet-900 dark:text-violet-200">
                        No Matches found for today
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {data?.golf.map((match,index) => {
                        const id = `${id3}+${index}`;
                        return (
                          <div key={id} className="p-2 flex gap-5 bg-white dark:bg-slate-700 items-center md:p-5 rounded-md">
                            <div>
                              <GiGolfFlag className="text-8xl text-violet-900 dark:text-violet-200" />
                            </div>
                            <div>
                              <StadiumCard data={match}></StadiumCard>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Today;
