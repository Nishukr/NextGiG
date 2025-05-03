import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions for <span className="text-[#6B3AC2]">Next</span>
        <span className="text-[#FA4F09]">GIG</span>
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to <strong>NextGig</strong>. These Terms and Conditions govern your
          use of our website located at{" "}
          <a
            href="https://nextgig.vercel.app"
            className="text-blue-600 underline"
          >
            https://nextgig.vercel.app
          </a>
          . By accessing or using our platform, you agree to comply with these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
        <p>
          By using <strong>NextGig</strong>, you confirm that you accept these Terms and
          Conditions and agree to comply with them. If you do not agree, you
          must not use our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time.
          Changes will take effect immediately upon posting. Continued use of
          the site constitutes acceptance of those changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
        <p>
          You agree to use <strong>NextGig</strong> lawfully and respectfully, without
          violating the rights of others or interfering with anyone's use of the site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All content, logos, and designs on <strong>NextGig</strong> are our property or
          licensed to us. You may not copy, distribute, or create works from this
          content without prior written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          To the fullest extent allowed by law, <strong>NextGig</strong> is not liable for
          any damages, direct or indirect, arising from your use of our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
        <p>
          These terms shall be governed by and interpreted under the laws of
          India. Any disputes will be subject to the jurisdiction of the courts
          in Bhopal, Madhya Pradesh.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
        <p>
          For questions about these Terms and Conditions, please contact us at:{" "}
          <a
            href="mailto:nishukumarsahu9752@gmail.com"
            className="text-blue-600 underline"
          >
            nishukumarsahu9752@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
