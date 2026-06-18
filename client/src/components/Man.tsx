import React from "react";

const manimg =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780917820/Manimg_dsxgyv.png";
const manimgMobile =
  "https://res.cloudinary.com/dsdoteykz/image/upload/v1780917988/manimgMobile_qqm7wf.png";

const Man: React.FC = () => {
  return (
    // Standardized padding to match your layout perfectly
    <section className="px-6 md:px-[clamp(1rem,11.46vw,200px)] my-24 md:my-32 lg:my-40">
      {/* Changed to a responsive grid layout to mirror the YX1 component structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-18">
        {/* Text Container: Changed order logic to pair with the grid */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-xl justify-self-start md:mx-auto">
          <h2 className="font-bold text-[28px] md:text-[40px] leading-tight tracking-[1.5px] md:tracking-[1.43px] uppercase text-black">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>

          <p className="text-[15px] leading-relaxed text-black/50 font-medium">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury <br />{" "}
            demonstration rooms available for you to browse and experience a
            wide range of our products. Stop by our store to meet some of the
            fantastic people who make Audiophile the best place to buy your
            portable audio equipment.
          </p>
        </div>

        {/* Image Container */}
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
          <img
            src={manimgMobile}
            alt="Best audio gear"
            className="w-full rounded-xl lg:hidden"
          />
          <img
            src={manimg}
            alt="Best audio gear"
            className="w-full max-w-135 hidden lg:block rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Man;
