import React from "react";
import { lashes } from "../images/lashes/lashes";

function Lashes() {
  return (
    <div id="lashes" className="bg-white">
      <div class="relative flex  items-center md:px-7">
        <div class="flex-grow border-t  border-title"></div>

        <img
          src="./lashes.svg"
          alt="lashes"
          className="w-80 h-60 flex-shrink"
        />
        <div class="flex-grow border-t border-title"></div>
      </div>
      {/* <h1 className="text-4xl  text-title py-10 px-10 uppercase font-bold tracking-widest text-center  ">
        lashes
      </h1> */}

      <div className="px-8 max-w-full  ">
        <div className="grid  md:grid-cols-4 md:grid-rows-2 gap-1  md-col-span-2 ">
          {lashes.map((photo) => (
            <div className="w-full " key={photo.id}>
              <img
                src={process.env.PUBLIC_URL + photo.url}
                alt={photo.alt}
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Lashes;
