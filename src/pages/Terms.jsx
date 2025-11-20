import React from "react";
import MainLayout from "../components/MainLayout";

const Terms = () => {
  return (
    <MainLayout>
      <div className="max-w-[700px] grid gap-[60px] mx-5 md:m-10 lg:m-auto  pb-[200px]">
        <h2 className="text-h2-md lg:text-h2 text-black">Terms & Conditions</h2>
        <div>
          <h4 className="text-h4-md lg:text-h4">1. Acceptance of Terms</h4>
          <p className="text-body">
            By using our website or hiring us, you agree to be bound by these
            terms. If you don’t agree, please do not use the site or our
            services.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">2. Services</h4>
          <p className="text-body">
            We offer branding, design, development, and other creative services
            as outlined on our website or in your proposal. Specific project
            terms (timeline, scope, deliverables) will be agreed upon separately
            via contract or email.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">3. Payments</h4>
          <p className="text-body">
            Project pricing and payment terms will be clearly outlined before we
            begin. Payment is typically split into milestones. Late payments may
            result in project delays or additional fees.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">4. Intellectual Property</h4>
          <p className="text-body">
            Unless otherwise agreed:
            <ul className="list-disc pl-4">
              <li>You own the final deliverables we create for you.</li>
              <li>
                We reserve the right to showcase work in our portfolio and
                marketing.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">5. Client Responsibilities</h4>
          <p className="text-body">
            To ensure smooth project delivery, you agree to:
            <ul className="list-disc pl-4">
              <li>Provide necessary assets, access, and approvals on time</li>
              <li>Respond to communication within a reasonable timeframe</li>
            </ul>
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">6. Cancellations & Refunds</h4>
          <p className="text-body">
            Either party can cancel a project with written notice. If cancelled
            mid-project, you may be responsible for payment proportional to the
            work completed.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">7. Website Use</h4>
          <p className="text-body">
            You agree not to use this site to distribute malware, spam, or
            infringe on any laws or rights.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">8. Limitation of Liability</h4>
          <p className="text-body">
            We are not liable for any damages resulting from the use of our
            website or services beyond the scope of the project agreement.
          </p>
        </div>
        <div>
          <h4 className="text-h4-md lg:text-h4">9. Governing Law</h4>
          <p className="text-body">
            These terms are governed by the laws of [Your Country/State]. Any
            disputes will be handled in the courts of that jurisdiction.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
