import React from "react";
import { Link } from "react-router-dom";

const hero =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780574920/herosectionimg_o6iunw.svg";

const HeroSection: React.FC = () => {
  return (
    <header className="bg-[#131313] relative overflow-hidden">
      <div className="px-[clamp(1.5rem,11.46vw,200px)]">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-132 md:min-h-182.25 lg:min-h-157.75 py-16 md:py-20 lg:py-0 relative">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-14 z-10 max-w-95 mt-15 xl:pl-7 2xl:pl-30 lg:pl-7 md:pl-1">
            <div className="flex flex-col lg:gap-6 gap-4">
              <p className="text-[14px] tracking-[10px] text-white/50 uppercase animate__slideInDown animate__animated">
                New Product
              </p>

              <h1 className="text-[36px] font-bold md:text-[56px] leading-tight tracking-[2px] uppercase text-white animate__pulse animate__animated animate__delay-2s animate__slower animate__repeat-3">
                XX99 Mark II <br className="hidden md:inline" /> Headphones
              </h1>
              <p className="text-[15px] leading-relaxed text-white/50 max-w-99">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>

            <div className="md:flex-row items-center md:gap-5 flex-col gap-2 flex">
              <Link to="/headphones">
                <button className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] uppercase px-8 py-4 hover:bg-[#ffc7a9] hover:text-black transition-colors duration-200 cursor-pointer rounded-sm xl:w-43 xl:h-14">
                  See Product
                </button>
              </Link>
              <Link to="/register">
                <button className="text-white font-bold text-[16px] tracking-[1px] uppercase py-4 px-11.5 hover:bg-[#D87D4A] transition-colors duration-200 cursor-pointer w-full md:w-fit lg:px-5 border border-[#FFFFFF] hover:border-[#D87D4A] rounded-sm xl:w-34 xl:h-13">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:flex md:flex w-full lg:w-[55%] xl:w-[40%] right-25 sm:right-27 md:-right-13 -top-15 lg:-top-23.75 lg:right-20 z-0 mt-8 lg:mt-0 md:-top-3.5 absolute xl:right-30">
            <img
              src={hero}
              alt=""
              className="max-w-125 lg:max-w-none max-auto lg:mx-0 z-0 animate__flipInY  animate__animated"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
