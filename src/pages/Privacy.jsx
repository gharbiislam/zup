import React from "react";
import MainLayout from "../components/MainLayout";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="max-w-[700px] grid gap-[60px] mx-5 md:m-10 lg:m-auto  pb-[200px]">
        <h2 className="text-h2-md lg:text-h2 text-black">Privacy Policy</h2>
        <div>
          <h4 className="text-h4-md lg:text-h4">1. Information We Collect</h4>
          <p className="text-body">
            We collect information in two ways:
            <ul className="list-disc pl-4" >
              <li>
                <span className="font-bold">
                  Information you provide directly:
                </span>{" "}
                When you contact us, submit a form, or hire us for services.
              </li>

              <li>
                <span className="font-bold">
                  Information collected automatically:
                </span>{" "}
                Through cookies, analytics tools, and usage tracking when you
                browse our website.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">
            2. How We Use Your Information
          </h4>
          <p className="text-body">
            We use the information we collect to:
            <ul
              className="list-disc pl-4"
            >
              <li>Respond to your inquiries</li>
              <li>Provide and manage our services</li>
              <li>Improve our website and user experience</li>
              <li>Send occasional updates or marketing (only if you opt in)</li>
            </ul>
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">3. Sharing Your Information</h4>
          <p className="text-body">
            We don’t sell or rent your personal data. We may share your
            information with trusted third-party services we use (e.g.
            analytics, payment processors), only when necessary and under
            confidentiality.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">4. Cookies & Tracking</h4>
          <p className="text-body">
            We use cookies to analyze site traffic and understand user behavior.
            You can disable cookies in your browser settings, but it may affect
            how the site functions.{" "}
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">5. Your Rights</h4>
          <p className="text-body">
            Depending on your location, you may have the right to:
            <ul
              className="list-disc pl-4
"
            >
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">6. Data Security</h4>
          <p className="text-body">
            We take reasonable measures to protect your data from unauthorized
            access, disclosure, or destruction.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">7. Changes to This Policy</h4>
          <p className="text-body">
            We may update this policy from time to time. We’ll post any changes
            on this page.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
