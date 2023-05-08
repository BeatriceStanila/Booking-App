import React from "react";
import NavBar from "../navbar/NavBar";

function Hero() {
  return (
    <div class="flex flex-col">
      <div class="flex flex-col bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <div class="relative flex flex-col items-left justify-between sm:h-screen ">
          <div class="px-20 py-60">
            <h1 className="uppercase font-semibold tracking-widestt text-title mb-3">
              hi there, gorgeous!
            </h1>
            <h2 class="text-6xl uppercase font-bold tracking-normal w-2/2  mb-3 text-title">
              {" "}
              Unleash your inner beauty
            </h2>
            <h3 class="font-semibold font-serif text-btnHover tracking-widest text-5xl leading-relaxed mb-3">
              Cosmina Cristea
            </h3>
            <h3 class="text-title font-serif font-bold  tracking-widest text-xl leading-relaxed mb-6">
              Makeup & Lashes Artist
            </h3>

            <div class="flex gap-4">
              <a
                href="#booking"
                className=" py-3 px-10 border border-btn rounded-md shadow-lg text-md font-bold text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover "
              >
                Book Now
              </a>
            </div>
          </div>
          <div class="absolute inset-0 pointer-events-none z-[-1]">
            <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
