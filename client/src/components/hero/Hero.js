import React from "react";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="bg-hero-pattern  bg-cover bg-fixed bg-no-repeat bg-center w-full">
        <div className="md:items-left justify-between lg:px-20 px-5 pt-10 md:pb-10 pb-20">
          <div className="md:py-20 md:pb-40 ">
            <h1 className="uppercase font-semibold tracking-widestt text-title mb-6">
              hi there, gorgeous!
            </h1>
            <h2 className="text-6xl uppercase font-bold tracking-normal w-2/2  mb-3  text-title">
              {" "}
              Unleash your inner beauty
            </h2>
            <h3 className="font-semibold font-serif text-btnHover md:tracking-widest text-5xl leading-relaxed mb-3 ">
              Cosmina Cristea
            </h3>
            <h3 className="text-title uppercase font-serif font-bold  tracking-widest text-xl leading-relaxed mb-6">
              Makeup & Lash Artist
            </h3>

            <div className="flex py-5">
              <a
                href="/#book"
                className=" py-4 px-10 border border-btn rounded-md shadow-lg text-md font-bold text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover "
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
