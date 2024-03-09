import Team1 from "../assets/Team (2).svg";
import Team2 from "../assets/Team (3).svg";
import Team3 from "../assets/Team (4).svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="team"
    >
      <p className=" text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        INSIDE SCRIPTDESK
      </p>
      <p className=" font-[500] text-[18px] lg:text-[20px] text-[#333333] ">
        MEET THE TEAM
      </p>

      <div className=" mt-[44px]">
        <Slider {...settings} className="">
          <div className=" h-[510px] rounded-[10px]">
            <img src={Team1} alt="" className=" bg-cover" />
            <div className=" py-[24px]">
              <p className=" text-[#333333] text-[20px] font-[500]">
                Ramsey Bucknor
              </p>
              <p className=" text-[#616161] text-[18px] font-[400] mt-[15px]">
                HR Manager
              </p>
            </div>
          </div>

          <div className="  h-[510px] rounded-[10px]">
            <img src={Team2} alt="" className=" bg-cover" />
            <div className=" py-[24px]">
              <p className=" text-[#333333] text-[20px] font-[500]">
                Ramsey Bucknor
              </p>
              <p className=" text-[#616161] text-[18px] font-[400] mt-[15px]">
                HR Manager
              </p>
            </div>
          </div>

          <div className=" h-[510px] rounded-[10px]">
            <img src={Team3} alt="" className=" bg-cover" />
            <div className=" py-[24px]">
              <p className=" text-[#333333] text-[20px] font-[500]">
                Ramsey Bucknor
              </p>
              <p className=" text-[#616161] text-[18px] font-[400] mt-[15px]">
                HR Manager
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Team;
