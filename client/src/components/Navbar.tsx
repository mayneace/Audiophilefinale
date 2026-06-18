import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

// const navLogo =
//   "https://res.cloudinary.com/dsdoteykz/image/upload/v1780492787/Frame_3_v25if9.png";

const headphonemobileDropdown =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780497186/mobile_dropdown_headphone_nuv71p.png";

const speakermobileDropdown =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780497186/mobile_dropdown_speaker_ib8jw5.png";

const earphonemobileDropdown =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780497186/mobile_dropdown_earphone_wcfe03.png";

const Navbar: React.FC = () => {
  const bars = [
    { id: 1, anim: "animate-eq-slow", height: "h-4" },
    { id: 2, anim: "animate-eq-fast", height: "h-7" },
    { id: 3, anim: "animate-eq-medium", height: "h-9" },
    { id: 4, anim: "animate-eq-fast", height: "h-6" },
    { id: 5, anim: "animate-eq-slow", height: "h-4" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/headphones", label: "HEADPHONES" },
    { to: "/speakers", label: "SPEAKERS" },
    { to: "/earphones", label: "EARPHONES" },
  ];

  return (
    <nav className="bg-[#101010]">
      <div className="pt-4 px-6 sm:px-[clamp(1rem,11.46vw,200px)]">
        <div className="flex items-center justify-between pb-8 pt-3 md:pt-0 md:pb-6.25">
          <button
            className="lg:hidden text-white text-2xl shrink-0"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>

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

          <div className="hidden lg:flex item-center gap-8">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[16px] font-bold text-white tracking-[2px] hover:text-[#D87D4A] transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <button className="relative text-white hover:text-[#D87D4A] transition-colors flex items-center gap-2">
              <LuShoppingCart className="text-[22px]" />
              <span className="text-[16px] font-bold text-white tracking-[1px] hover:text-[#D87D4A] transition-colors uppercase hidden md:inline-block">
                CART
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/login"
                className="text-[16px] text-white font-bold tracking-[1px] hover:text-[#D87D4A] hover:border-[#D87D4A] transition-colors uppercase lg:py-2.5 lg:px-5 border border-[#FFFFFF]"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-[16px] text-white font-bold tracking-[1px] hover:text-[#FBAF85] transition-colors uppercase lg:py-2.5 lg:px-5 bg-[#D87D4A]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* mobile dropdown */}
        {isMenuOpen && (
          <div
            className="py-8 px-0 absolute top-22 left-0 right-0 bg-white rounded-b-xl shadow-2xl z-50 animate-[slideDown_0.3s_ease-out] lg:hidden"
            style={{
              ["--tw-keyframes-slidedown" as string]: `from {opacity: 0; transform: translateY(-10px);} to {opacity: 1; transform: translateY(0);}`,
            }}
          >
            <div className="px-6 md:px-10 lg:px-12 xl:px-[5.5%]">
              <div className="flex flex-col md:flex-row gap-14 pt-10">
                {[
                  {
                    to: "/headphones",
                    label: "HEADPHONES",
                    img: headphonemobileDropdown,
                  },
                  {
                    to: "/speakers",
                    label: "SPEAKERS",
                    img: speakermobileDropdown,
                  },
                  {
                    to: "/earphones",
                    label: "EARPHONES",
                    img: earphonemobileDropdown,
                  },
                ].map((cat) => {
                  return (
                    <Link
                      key={cat.to}
                      to={cat.to}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 bg-[#F1F1F1] rounded-lg relative h-41.25 pt-22.5 pb-5 group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex justify-center">
                        <img src={cat.img} alt="" />
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <h4 className="text-[15px] font-bold tracking-[1px] text-black">
                          {cat.label}
                        </h4>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-black/50 group-hover:text-[#D87D4A] uppercase">
                            Shop
                          </span>
                          <MdChevronRight className="text-[#D87D4A]" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Auth links in mobile menu */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <Link
                    to="/login"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="flex-1 text-center py-3 border-2 border-black font-bold text-[13px] uppercase tracking-[1px]"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="flex-1 text-center py-3 border-2 border-black font-bold text-[13px] uppercase tracking-[1px]"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
