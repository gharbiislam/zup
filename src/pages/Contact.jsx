import React from "react";
import MainLayout from "../components/MainLayout";
const Contact = () => {
  return (
    <MainLayout>
      <div className="pb-[200px] px-10">
        <h1 className="text-h1-sm md:text-h1-md lg:text-h1 ">Contacts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-[60px]  md:gap-[80px] lg:mt-[100px]">
          <aside className="flex flex-col md:flex-row  gap-6 md:gap-[100px] lg:order-2">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-black_60 text-body">Email</p>
                <h4 className="text-h4-md lg:text-h4">hello@yourstudio.com</h4>
              </div>
              <div>
                <p className="text-black_60 text-body">Phone</p>
                <h4 className="text-h4-md lg:text-h4">+1 (555) 123-4567</h4>
              </div>
              <div>
                <p className="text-black_60 text-body">Address</p>
                <h4 className="text-h4-md lg:text-h4">
                  742 Studio Street Dump City, CA 90000
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-black_60 text-body">Twiter</p>
                <h4 className="text-h4-md lg:text-h4">@studio.2zup</h4>
              </div>
              <div>
                <p className="text-black_60 text-body">Instagram</p>
                <h4 className="text-h4-md lg:text-h4">@2zup.studio</h4>
              </div>
            </div>
          </aside>
          <aside className="lg:max-w-[750px] lg:pr-10 lg:order-1">
            <h3 className="text-h3-sm md:text-h3-md lg:text-h3 text-black_60 ">
              Got an idea, a goal, or a challenge?
            </h3>
            <h3 className="text-h3-sm md:text-h3-md lg:text-h3 text-black">
              Let’s build something exceptional - together.
            </h3>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
};
export default Contact;
