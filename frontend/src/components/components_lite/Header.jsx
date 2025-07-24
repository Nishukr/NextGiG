import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

// Typewriter Effect Component
const TypewriterEffect = ({ textArray, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = textArray[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, textArray, speed, delay]);

  return (
    <span className="text-[#6A38C2] font-semibold">{displayedText}|</span>
  );
};

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="text-center">
        <div className="flex flex-col gap-6 my-10">
          {/* Badge */}
          <span className="px-4 py-2 mx-auto flex justify-center items-center gap-2 rounded-full bg-gray-200 text-red-600 font-medium text-sm sm:text-base animate-size-change">
            <span className="text-[#614232]">
              <PiBuildingOfficeBold />
            </span>
            Trusted by Top Companies
          </span>

          {/* Animated Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Search Apply & <br />
            Get Your <TypewriterEffect textArray={["Dream Job", "Perfect Role", "NextGig Opportunity"]} />
          </h2>

          {/* Subtext with fade-in typewriter */}
          <p className="text-sm sm:text-base text-gray-700 animate-fade-in text-wrap max-w-2xl mx-auto">
            Start your hunt for the best, life-changing career opportunities
            from here in your <br className="hidden sm:block" />
            selected areas conveniently and get hired quickly.
          </p>

          {/* Search Input */}
          <div className="flex w-full sm:w-[90%] md:w-[60%] max-w-xl shadow-lg border border-gray-300 pl-4 pr-2 py-1 rounded-full items-center gap-2 mx-auto">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="flex-1 outline-none border-none bg-transparent text-sm sm:text-base"
            />
            <Button onClick={searchjobHandler} className="rounded-full p-2">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
