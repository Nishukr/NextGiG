import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="px-4">
      <div className="text-center mt-6">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
          Categories
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Explore our extensive job market.
        </p>
      </div>

      {/* Category Container with Animation */}
      <div className="category-container w-full max-w-full sm:max-w-2xl mx-auto my-8 overflow-hidden relative">
        <div className="category-slider animate-slide">
          {Category.map((category, index) => (
            <div
              key={index}
              className="category-item inline-block px-2"
            >
              <Button
                onClick={() => searchjobHandler(category)}
                className="w-full text-sm sm:text-base rounded-xl py-3"
                variant="outline"
              >
                {category}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
