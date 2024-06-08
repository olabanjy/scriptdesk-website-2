import logo from "../assets/logo.svg";
import Arrow from "../assets/arrowright.svg";
import Insta from "../assets/ri_instagram-fill.svg";
import twitter from "../assets/mage_x.svg";
import linkedin from "../assets/ant-design_linkedin-filled.svg";
import PropTypes from "prop-types";

const Footer = ({ toggleModal }) => {
  return (
    <div className="bg-[#292D33]">
      <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px] 2xl:py-[70px]">
        <img src={logo} alt="" className="mb-25px lg:mb-[51px]" />
        <div className="grid lg:grid-cols-2 gap-[10px] lg:gap-[192px]">
          <div className="grid gap-[26px]">
            <p className="text-[18px] lg:text-[36px] text-white font-[500]">
              Get in touch with us
            </p>
            <p className="text-[16px] lg:text-[20px] text-[#BDBDBD] w-[340px] lg:w-[500px]">
              Our framework is a systematic approach to help startups build
              faster without any technology-inclined obstacle.
            </p>
            <p className="text-[14px] lg:text-[18px] text-white">
              No 6, Lara Ademola Street, Lekki, Lagos Nigeria
            </p>
            <a
              href="mailto:hello@scriptdeskng.com"
              className="text-[14px] lg:text-[18px] text-white underline "
            >
              <p>hello@scriptdeskng.com</p>
            </a>

            <p className="text-[14px] lg:text-[18px] text-white">
              +234 704 241 1717, +234 813 749 8991
            </p>
          </div>
          <div className="grid gap-[26px]">
            <p className="text-[20px] text-[#BDBDBD]">
              Need help with your startup idea, or a project?, contact us for
              more inquiries and information.
            </p>
            <div className="">
              <p
                onClick={toggleModal}
                className="cursor-pointer rounded-[10px] inline-flex items-center gap-[8px] text-[#292D33] text-[16px] lg:text-[18px] py-[13px] px-[50px] lg:px-[60px] bg-[#ffffff] font-[500]"
              >
                Contact Us{" "}
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </p>
            </div>

            <div className="flex items-center gap-[31px] lg:gap-[105px] mt-[20px] lg:mt-[88px]">
              <a
                href="https://www.linkedin.com/company/scriptdesk/"
                target="blank"
              >
                <div className="flex flex-col gap-[18px] items-center">
                  <img src={linkedin} alt="" />
                  <p className="hidden lg:block font-[500] text-[#BDBDBD] text-[18px]">
                    Linkedin
                  </p>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col gap-[18px] items-center">
                  <img src={twitter} alt="" />
                  <p className="hidden lg:block font-[500] text-[#BDBDBD] text-[18px]">
                    Twitter
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="flex flex-col gap-[18px] items-center">
                  <img src={Insta} alt="" />
                  <p className="hidden lg:block font-[500] text-[#BDBDBD] text-[18px]">
                    Instagram
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Footer;
