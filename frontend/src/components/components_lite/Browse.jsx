import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl sm:text-xl mb-6">
          Search Results ({allJobs.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allJobs.map((job) => (
            <Job1 key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
