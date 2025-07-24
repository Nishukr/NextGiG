import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi", "Mumbai", "Kolhapur", "Pune",
      "Bangalore", "Hyderabad", "Chennai", "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern", "React", "Data Scientist", "Fullstack",
      "Node", "Python", "Java", "frontend", "backend", "mobile", "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => setSelectedValue(value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white rounded-md p-4 shadow-md">
      <h1 className="font-bold text-xl md:text-lg mb-4">Filter Jobs</h1>
      <hr className="mb-4" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-5">
            <h2 className="font-semibold text-lg md:text-base mb-2">
              {data.filterType}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2">
              {data.array.map((item, indx) => {
                const itemId = `Id${index}-${indx}`;
                return (
                  <div key={itemId} className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={itemId} />
                    <label htmlFor={itemId} className="text-sm">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;
