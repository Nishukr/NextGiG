import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy for <span className="text-[#6B3AC2]">Next</span><span className="text-[#FA4F09]">GIG</span></h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy outlines how <strong>NextGig</strong> collects, uses, and protects your information when you visit and use our job portal.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Personal Information:</strong>
            <ul className="list-disc ml-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume/CV</li>
            </ul>
          </li>
          <li>
            <strong>Usage Data:</strong>
            <ul className="list-disc ml-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow participation in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather insights for improving our platform</li>
          <li>To monitor and enhance platform usage</li>
          <li>To detect and prevent technical issues</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement robust technical and organizational measures to safeguard your personal information against unauthorized access, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share your information with:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Trusted service providers that help operate our platform</li>
          <li>Law enforcement authorities if required by applicable laws</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your data</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Updates will be reflected by changing the "Effective Date" and posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have questions or concerns about our Privacy Policy, please contact us at:{" "}
          <a href="mailto:nishukumarsahu9752@gmail.com" className="text-blue-600 underline">
            nishukumarsahu9752@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
