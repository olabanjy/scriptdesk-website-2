import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Team1 from "../assets/Akindele Marvellous Olakiiitan.jpg";
import Team2 from "../assets/ED.jpeg";
import Team3 from "../assets/Olushola Odunwo-Albert.jpg";
import Team4 from "../assets/lawyer_kenny.jpeg";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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

  const teamData = [
    {
      name: "Akindele Marvellous Olakiiitan",
      position: "Lead, Operations",
      image: Team1,
      aos: "fade-left",
    },
    {
      name: "Ed Ibekwe",
      position: "Lead, Strategy & Expansion",
      image: Team2,
      aos: "fade-right",
    },
    {
      name: "Bamidele Kehinde",
      position: "Lead, Business Development",
      image: Team4,
      aos: "fade-up",
    },
    {
      name: "Olushola Odunwo-Albert",
      position: "Lead, Software Engineering",
      image: Team3,
      aos: "fade-down",
    },
  ];

  return (
    <div
      className="overflow-hidden max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="team"
    >
      <p className="text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        INSIDE SCRIPTDESK
      </p>
      <p className="font-[500] text-[18px] lg:text-[20px] text-[#333333]">
        MEET THE TEAM
      </p>

      <div className="mt-[44px]">
        <Slider {...settings} className="">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="max-w-[300px] 2xl:w-[600px] max-h-[510px] rounded-[10px]"
              data-aos={member.aos}
            >
              <div className="h-[348px] overflow-hidden rounded-[10px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-1000 transform scale-100 hover:scale-110"
                />
              </div>
              <div className="py-[24px]">
                <p className="text-[#333333] text-[20px] font-[500]">
                  {member.name}
                </p>
                <p className="text-[#616161] text-[18px] font-[400] mt-[15px]">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
