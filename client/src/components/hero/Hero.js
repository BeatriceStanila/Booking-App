import React from "react";
import BookPage from "../../pages/BookPage";

function Hero() {
  return (
    <div class="flex flex-col md:flex-row bg-book bg-cover bg-no-repeat md:bg-center bg-right">
      <div class="w-full md:w-2/3 lg:px-20 px-5 pt-10 md:pb-10 pb-20">
        <div class="md:py-20 ">
          <h1 class="uppercase font-semibold tracking-widest text-title mb-6">
            hi there, gorgeous!
          </h1>
          <h2 class="text-6xl uppercase font-bold tracking-normal w-2/2 mb-3 text-title">
            Unleash your inner beauty
          </h2>
          <h3 class="font-semibold font-serif text-btn md:tracking-widest text-5xl leading-relaxed mb-3">
            Cosmina Cristea
          </h3>
          <h3 class="text-title uppercase font-serif font-bold tracking-widest text-xl leading-relaxed pb-10 ">
            Makeup &amp; Lash Artist
          </h3>

          <a
            href="/#contact"
            class="py-4 px-10 border border-btn rounded-md shadow-lg text-md font-bold text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div class="md:w-1/2 md:order-1">
        <BookPage />
      </div>
    </div>
  );
}

export default Hero;
