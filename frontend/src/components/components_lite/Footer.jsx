import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-[#6B3AC2]">Next</span>
          <span className="text-[#FA4F09]">GIG</span>
        </h1>
        <p className="text-sm text-gray-600 mb-1">
          © {new Date().getFullYear()} NextGIG. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Powered by{" "}
          <a
            href="https://github.com/nishukumarsahu9752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B3AC2] hover:underline"
          >
            Nishu Kumar
          </a>
        </p>
        <p className="text-sm text-gray-600">
          <Link to="/PrivacyPolicy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/TermsofService" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

