import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState({});

  const toggleQuestion = (index) => {
    setExpanded((prevState) => {
      const updatedState = {};
      Object.keys(prevState).forEach((key) => {
        updatedState[key] = false;
      });
      updatedState[index] = !prevState[index];
      return updatedState;
    });
  };

  const faqs = [
    {
      question: "Which services do you provide?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <div className=" max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[70px]">
      <p className="text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        FAQs
      </p>
      <p className="font-[600] text-[18px] lg:text-[20px] text-[#333333]">
        FREQUENTLY ASKED QUESTIONS
      </p>

      <div className="space-y-4 mt-[50px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#00083D] border-opacity-30 rounded-[10px] py-[17px] px-[30px]"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-[16px] font-[400] text-[#616161]">
                {faq.question}
              </h3>
              {expanded[index] ? (
                <p className="font-[600] text-[30px] text-[#333333]">-</p>
              ) : (
                <p className="font-[600] text-[30px] text-[#333333]">+</p>
              )}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  expanded[index] ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
            </div>
            {expanded[index] && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
