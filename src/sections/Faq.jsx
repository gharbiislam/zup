import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "aos/dist/aos.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on the scope. A landing page might take 2–3 weeks, while a full branding and website package could take 6–10. We’ll give you a clear timeline before we begin.",
    },

    {
      question: "What if I don’t know exactly what I need?",
      answer:
        "No problem. We’ll help you figure it out. Whether it’s a quick call or a deeper discovery session, we’ll guide you through it.",
    },
    {
      question: "Can I request just one service?",
      answer:
        "Absolutely. You can book a single service or bundle multiple—whatever fits your goals and timeline.",
    },
    {
      question: "How do payments work?",
      answer:
        "For projects, we usually split payments into 2 or 3 milestones. For monthly plans, billing is done upfront each month. Everything is clear and agreed upon before we start.",
    },
    {
      question: "What if I need changes after a project ends?",
      answer:
        "We offer ongoing support, either through our monthly plan or as-needed add-ons. You won’t be left hanging.",
    },
  ];
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section  id="faq" className="pt[120px] lg:pt-[200px] px-5 md:px-10 grid gap-10">
      <h5 className="text-h5 text-black">[07 FAQ]</h5>

      <div className=" flex gap-10">
        <h2 className="text-h2-sm md:text-h2-md lg:text-h2 text-black_60  w-2/5  ">
          Smarter decisions start with{" "}
          <span className="text-black"> clear answers</span>.{" "}
        </h2>

        <div className="w-[850px]">
          {faqs.map((faq, index) => (
            <div key={index} className="mt-3 faqs_card  px-10 py-7 bg-white rounded-2xl ">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center w-full justify-between"  >
                <span className="text-h5">{faq.question}</span>
                <FaPlus
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-[4rad]" : "rotate-0" }`}/>
              </button>
              
              {openIndex === index && (
                <p className=" text-body mt-5 text-black_60 ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
