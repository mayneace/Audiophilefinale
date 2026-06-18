import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import Man from "../components/Man";

const headphoneCard =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780583289/headphoneCard_jitais.png";

const speakerCard =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780583289/speakerCard_osvhib.png";

const earphoneCard =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780583289/earphoneCard_m5lezo.png";

const Zx9 =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780585310/homesectSpeaker_kjutbg.png";

const zx7desk =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780914349/Zx7Desk_bgzbhj.png";

const zx7mobile =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780914369/Zx7Mobile_dhn50o.png";

const yx1img =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780915799/YX1img_addmnn.png";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] relative mb-10">
      {/* ================= Hero Section ============================ */}
      <HeroSection />

      {/* ================== Category navigation cards==================== */}
      {/* px-6 md:px-10 lg:px-12 xl:px-[5.5%] */}
      <section className="px-6 sm:px-[clamp(1rem,11.46vw,200px)] mt-12 md:mt-20 lg:mt-30">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-4 lg:gap-8 pt-12 md:pt-0 mt-6 md:mt-14">
          <CategoryCard
            to="/headphones"
            label="HEADPHONES"
            image={headphoneCard}
            className="mt-8 md:mt-12"
          />
          <CategoryCard
            to="/speakers"
            label="SPEAKER"
            image={speakerCard}
            className="mt-8 md:mt-12"
          />
          <CategoryCard
            to="/earphones"
            label="EARPHONES"
            image={earphoneCard}
            className="mt-8 md:mt-12"
          />
        </div>
      </section>

      {/* ================= ZX9 sPEAKER Feature ========================= */}
      <section className="px-6 sm:px-[clamp(1rem,11.46vw,200px)] mt-24 md:mt:22 lg:mt-30 ">
        <div className="bg-[#D87D4A] flex flex-col lg:flex-row items-center md:items-center px-6 md:px-12 lg:px-29.25 pt-14 md:pt-16 lg:pt-0 gap-8 lg:justify-between rounded-xl relative overflow-hidden">
          {/* <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-100 h-100 rounded-full border-2 border-white" />

            <div className="absolute -top-20 -left-20 w-100 h-100 rounded-full border-2 border-white" />
          </div> */}
          <div className="absolute -inset-60 md:-inset-60 flex items-center md:items-end justify-center pointer-events-none -top-136 md:justify-start md:-top-30 md:-left-29">
            <div>
              <div className="w-137 h-137 md:w-220 md:h-210 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-80 h-80 md:w-130 md:h-130 rounded-full border border-white/20">
                  <div className="w-70 h-70 ml-5 mt-5 rounded-full border border-white/20 md:ml-7 md:mt-7 md:w-115 md:h-115"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Zx9} alt="" className="relative z-10" />
          </div>

          <div className="relative z-10 flex flex-col items-center lg:items-start lg:text-left gap-6 max-w-87.25 pb-14 md:pb-16 lg:pb-24 md:pt-20">
            <h2 className="font-bold text-[36px] md:text-[56px] leading-tight tracking-[2px] uppercase text-white">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/speakers">
              <button className="mt-2 bg-black text-white font-bold text-[13px] tracking-[1px] uppercase px-8 py-4 hover:bg-[#575757] hover:text-[#bbbbbb] transition-colors duration-200 cursor-pointer rounded-sm">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Zx7 sPEAKER Feature ========================= */}
      <section className="px-6 sm:px-[clamp(1rem,11.46vw,200px)] mt-6 md:mt-8 lg:mt-12">
        <div className="relative rounded-xl overflow-hidden min-h-80 flex items-center">
          <img
            src={zx7mobile}
            alt=""
            className="absolute inset-0 w-full h-full md:hidden"
          />
          <img
            src={zx7desk}
            alt=""
            className="absolute inset-0 w-full h-full hidden md:block"
          />

          <div className="relative z-10 ml-6 md:ml-16 lg:ml-24 flex flex-col gap-8">
            <h2 className="font-bold text-[28px] tracking-[2px] uppercase text-black">
              ZX7 SPEAKER
            </h2>
            <Link to="/product">
              <button className="border border-black text-black font-bold text-[13px] tracking-[1px] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer rounded-sm">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Yx1 EARPHONE Feature ========================= */}
      
      <section className="px-6 sm:px-[clamp(1rem,11.46vw,200px)] mt-6 md:mt-8 lg:mt-12">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-3">
          <div className="rounded-xl overflow-hidden">
            <img src={yx1img} alt="" className="h-50 w-full md:h-80" />
          </div>

          <div className="bg-[#F1F1F1] rounded-xl flex items-center h-50 md:h-auto">
            <div className="ml-6 md:ml-10 lg:ml-24 flex flex-col gap-8 text-start">
              <h2 className="font-bold text-[28px] tracking-[2px] uppercase text-black">
                YX1 EARPHONES
              </h2>
              <Link to="/product">
                <button className="border border-black text-black font-bold text-[13px] tracking-[1px] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer rounded-sm">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =======================  MAN  ===================== */}

      <Man />
    </div>
  );
};

export default HomePage;
