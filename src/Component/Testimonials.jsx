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
        "Lorem ipsum dolor sit amet consectetur. In pharetra erat nunc convallis consectetur cursus accumsan risus. Enim tortor mus pellentesque nullam dolor vel placerat. Dapibus viverra tristique sit vel scelerisque. Integer dictum elit vulputate senectus. Odio posuere justo adipiscing arcu fusce bibendum. Vel fames eget tortor pulvinar dolor a morbi scelerisque. Lectus nisl pharetra elit dignissim purus morbi ut. Viverra donec est porttitor egestas sed lorem.",
      author: "Michael Banks",
      position: "CEO, Wells Supermarket.",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. In pharetra erat nunc convallis consectetur cursus accumsan risus.",
      author: "John Doe",
      position: "CTO, ABC Company.",
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
    <div className=" py-40 bg-[#F8F8F8]">
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
