import Peak from "../assets/Peak.svg";
import GUO from "../assets/GUO.svg";
import Alpha from "../assets/Alpha.svg";
import ASO from "../assets/ASO.svg";
import EK from "../assets/EK.svg";
import Reliance from "../assets/Reliance.svg";
import Branch from "../assets/Branch.svg";
import Farm from "../assets/Farm.svg";
import BellaNaija from "../assets/BellaNaija.svg";

const Clients = () => {
  return (
    <div
      className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="clients"
    >
      <p className=" text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        OUR CLIENTS
      </p>
      <p className=" font-[500] text-[16px] lg:text-[20px] text-[#333333]">
        SOME OF THE BRANDS & STARTUPS WE’VE WORKED WITH OVER THE YEARS
      </p>

      <div className=" mt-[26px] grid grid-cols-2 gap-[60px]  lg:grid-cols-5 items-center justify-center">
        <img src={GUO} alt="" className=" bg-cover" />
        <img src={Alpha} alt="" className=" bg-cover" />
        <img src={Peak} alt="" className=" bg-cover" />
        <img src={ASO} alt="" className=" bg-cover" />
        <img src={EK} alt="" className=" bg-cover" />
        <img src={Reliance} alt="" className=" bg-cover " />
        <img src={Branch} alt="" className=" bg-cover" />
        <img src={Farm} alt="" className=" bg-cover" />
        <img src={BellaNaija} alt="" className=" bg-cover" />
      </div>
    </div>
  );
};

export default Clients;
