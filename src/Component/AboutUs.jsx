import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className=" overflow-hidden max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="about"
      data-aos="fade-down"
    >
      <p className=" text-[#333333] text-[15px] mb-[22px]">OUR STORY</p>
      <p className=" font-[500] text-[20px] text-[#333333]">ABOUT US</p>
      <p className=" text-[#333333] text-[26px] font-[600] mt-[26px]">
        Hello, world! Whether it&apos;s for today, tomorrow or several years
        into the future, our aim is to build solutions that matter
      </p>
      <div className=" mt-[26px]">
        <p className=" mt-[26px] text-[18px] text-[#616161]">
          While writing code and designing products and websites is essential,
          we believe it&apos;s only the beginning. Kicking it up a notch, we
          take things a step further by creating digital experiences that leave
          a lasting impression. We combine creativity, technical expertise, and
          a user-centric approach to deliver exceptional digital solutions, so
          whether it&apos;s a website, application, or platform, we strive to
          create experiences that resonate with your audience and drive your
          business forward.
        </p>
        <p className=" py-[22px] text-[18px] text-[#616161]">
          ScriptDesk understands that the digital landscape is constantly
          evolving. That&apos;s why we&apos;re committed to staying ahead of the
          curve, leveraging the latest technologies to ensure that your business
          remains competitive and relevant, today and for years to come.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
