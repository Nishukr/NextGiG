import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
//import ResumeMatcher from "./ResumeMatcher";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    const filteredJobs = allJobs.filter((job) => {
      const query = searchedQuery.toLowerCase();
      return (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.experience?.toLowerCase().includes(query) ||
        job.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        {/* Responsive layout using flex-col for small and row for medium+ */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar for filters, hidden or stacked on mobile */}
          <div className="w-full md:w-1/4">
            <FilterCard />
          </div>

          <div className="w-full md:w-3/4">
            {filterJobs.length <= 0 ? (
              <span className="block text-center text-gray-600 font-medium mt-5">
                Job not found
              </span>
            ) : (
              <div className="h-[80vh] overflow-y-auto pb-5">
                {/* Responsive grid: 1 col on mobile, 2 on sm, 3 on md+ */}
                {/* <ResumeMatcher jobDescription={Jobs.description} /> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterJobs.map((job) => (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      key={job.id}
                    >
                      <Job1 job={job} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
