import React from "react";
import { makeup } from "../images/makeup";

function Makeup() {
  return (
    <div id="makeup" className="bg-white ">
      <div className="relative flex  items-center md:px-7">
        <div className="flex-grow border-t  border-title"></div>

        <img
          src="./makeup.svg"
          alt="lashes"
          className="w-80 h-60 flex-shrink"
        />
        <div className="flex-grow border-t border-title"></div>
      </div>

      <div className="px-8  max-w-full  ">
        <div className="grid  md:grid-cols-4 md:grid-rows-3 gap-2 md-col-span-2">
          {makeup.map((photo) => (
            <div className="w-full" key={photo.id}>
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

export default Makeup;
