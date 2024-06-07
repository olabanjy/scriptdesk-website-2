import { useState } from "react";

const FaqPage = () => {
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
        "We provide a wide array of IT solutions, including product development, AI technology, business automation tools, and mobile marketing.",
    },
    {
      question:
        "Do you offer assistance with technical issues and customer support?",
      answer:
        "Trust us to come through for you and your business when any tech troubles or customer support needs come up while we're working together on any services.",
    },
    {
      question: "Can you design custom products on request?",
      answer:
        "Absolutely! Our custom products and platforms are crafted to help you seamlessly achieve your goals. Our collaborative approach ensures seamless integration and personalized solutions that help you achieve your goals.",
    },
    {
      question: "What's your business's financial model?",
      answer:
        "We operate a transparent pricing structure, charging a flat fee for development and a monthly maintenance percentage, ensuring you receive exceptional value for your investment.",
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

export default FaqPage;
