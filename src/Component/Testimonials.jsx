import { useState } from "react";
import Quote from "../assets/quote.svg";
import profile from "../assets/profile.png";
import say from "../assets/WHAT OUR CLIENTS SAY.png";
import Prev from "../assets/prev.svg";
import Next from "../assets/Next.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I can't say enough good things about Script Desk. They have transformed the way we do business, saving us time, money, and headaches along the way",
      author: "Fopefoluwa Ogunnubi",
      position: "Client",
    },
    {
      quote:
        "As a small business owner, reaching a large audience was a significant challenge. But thanks to Script Desk's mobile marketing and boost solutions, I'm not sure I can still call myself a small business owner! Their setup has helped my business grow exponentially, and I'm thrilled with the results.",

      author: "Seun from AjikeOloge",
      position: "Client",
    },
    {
      quote:
        "We brought on a product that we were not entirely able to figure out at first, but Script Desk helped us get up to speed. They quickly identified the issues and got to work, making the transition super smooth. They're still supporting us and we're loving the efficiency and productivity boost we're seeing",

      author: "Kenny from Ekondo Microfinance",
      position: "Client",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" overflow-hidden py-40 bg-[#F8F8F8]">
      <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 mb-[43px]">
        <p className="text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
          WHAT OUR CLIENTS SAY
        </p>
        <p className="font-[500] text-[18px] lg:text-[20px] text-[#333333]">
          TESTIMONIAL
        </p>

        <div
          className="mt-[49px] bg-[#363A40] rounded-[10px] shadow-lg p-[45px] flex-grow max-w-[880px] mx-auto"
          data-aos="fade-down"
        >
          <img src={Quote} alt="" className="mb-[37px]" />
          <p className="text-[#D8D8D8] mb-[79px] text-[16px] ">
            {testimonials[currentIndex].quote}
          </p>
          <div className="flex items-center gap-[20px]">
            <img
              src={profile}
              alt=""
              className="h-[37px] rounded-full w-[37px]"
            />
            <div className="">
              <p className="text-white text-[16px] font-[400]">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-[#616161] text-[14px] font-[400]">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col-reverse lg:flex-row items-end mx-[18px] mb-[20px] ">
        <img src={say} alt="" className=" max-w-[345px] lg:max-w-full" />
        <div className="flex items-center mt-4 gap-[13px] ">
          <button onClick={prevTestimonial} className="">
            <img src={Prev} alt="" />
          </button>
          <button onClick={nextTestimonial} className=" ">
            <img
              src={Next}
              alt=""
              className=" flex items-center justify-center"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
