import React, { useState } from "react";
import BookPage from "../../pages/BookPage";
import Typewriter from "typewriter-effect";

function Hero() {
  const [stopTyping, setStopTyping] = useState(false);

  console.log(stopTyping);

  const handleTypewriterInit = (typewriter) => {
    typewriter
      .typeString("Makeup Artist")
      .pauseFor(500)
      .deleteAll()
      .typeString("Makeup & Lash Artist")
      .callFunction(() => {
        setStopTyping(true);
      })
      .stop()
      .start();
  };
  return (
    <div className="flex flex-col md:flex-row bg-book bg-cover bg-no-repeat md:bg-center bg-right">
      <div className="md:w-2/3 lg:px-20 px-5 pt-10 md:pb-20 pb-20">
        <div className="md:py-20 ">
          <h1 className="uppercase font-normal tracking-widest font-sans text-title mb-6 mt-6">
            hi there, gorgeous!
          </h1>
          <h2 className="md:text-6xl text-5xl uppercase font-bold font-poppins tracking-normal w-2/2 mb-3 md:leading-snug text-title">
            Unleash your inner beauty
          </h2>
          <div className="font-semibold font-sans text-btn md:tracking-widest md:text-5xl text-4xl leading-relaxed mb-3">
            Cosmina Cristea
          </div>
          <h3 className="text-title uppercase font-sans font-normal tracking-widest text-2xl leading-relaxed pb-10 ">
            <Typewriter
              options={{
                autoStart: false,
                loop: false,
              }}
              onInit={handleTypewriterInit}
            />
          </h3>

          <h3 className="uppercase font-sans font-semibold tracking-wider">
            <a
              href="/#contact"
              className="py-4 px-10 border border-btn rounded-md shadow-lg text-md  text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover transition-color duration-200 delay-200"
            >
              Contact Me
            </a>
          </h3>
        </div>
      </div>
      <div className="md:w-1/2 md:order-1">
        <BookPage />
      </div>
    </div>
  );
}

export default Hero;
