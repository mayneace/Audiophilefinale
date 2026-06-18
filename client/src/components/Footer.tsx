import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// const footerLogo =
//   "https://res.cloudinary.com/dsdoteykz/image/upload/v1780492787/Frame_3_v25if9.png";

// const footerLogoMobile =
//   "https://res.cloudinary.com/dsdoteykz/image/upload/v1780569721/footerlogo_hywhcr.png";

const Footer: React.FC = () => {
  const bars = [
    { id: 1, anim: "animate-eq-slow", height: "h-4" },
    { id: 2, anim: "animate-eq-fast", height: "h-7" },
    { id: 3, anim: "animate-eq-medium", height: "h-10" },
    { id: 4, anim: "animate-eq-fast", height: "h-6" },
    { id: 5, anim: "animate-eq-slow", height: "h-4" },
  ];

  const footerLinks = [
    { to: "/", label: "HOME" },
    { to: "/headphones", label: "HEADPHONES" },
    { to: "/speakers", label: "SPEAKERS" },
    { to: "/earphones", label: "EARPHONES" },
  ];

  return (
    <footer className="px-6 sm:px-[clamp(1rem,11.40vw,200px)] bg-[#101010] pb-6 md:pb-15 pt-12 md:pt-18.75 relative overflow-hidden">
      <div className="absolute top-0 left-[35%] md:left-10 lg:left[11.5%] xl:left-[8%] h-1 w-25.25 bg-[#D87D4A] animate__bounceInRight animate__animated animate__delay-2s animate__slow animate__repeat-3" />
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between">
        <Link to="/" className="flex gap-2.5">
          {/* <img src={navLogo} alt="" /> */}

          <div className="flex items-center gap-1.5 h-7 justify-center">
            {bars.map((bar) => (
              <span
                key={bar.id}
                className={`w-0.75 bg-white rounded-full origin-center transition-transform duration-300 ${bar.height} ${bar.anim}`}
                style={{ animationDelay: `${bar.id * 0.1}s` }}
              />
            ))}
          </div>

          <p
            className="text-[#FFFFFF] pt-1 font-bold text-[15px] tracking-[2px]"
            id="logotext"
          >
            AUDIOPHILE
          </p>
        </Link>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 lg:gap-[32.5px]">
          {footerLinks.map((link) => {
            return (
              <Link
                key={link.to}
                to={link.to}
                className="text-[13px] font-bold text-white tracking-[2px] hover:text-[#D87D4A] transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="text-center md:text-start font-medium text-[15px] leading-relaxed text-white/50 w-full lg:w-135">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="items-center gap-4 hidden lg:flex">
          <ImFacebook2 className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
          <FaTwitter className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
          <FaInstagram className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
        </div>
      </div>

      <div className="mt-10 md:mt-14 flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="items-center gap-4 lg:hidden flex">
          <ImFacebook2 className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
          <FaTwitter className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
          <FaInstagram className="text-white text-2xl cursor-pointer hover:text-[#D87D4A] transition-colors" />
        </div>

        <p className="font-medium text-sm text-white/50">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
