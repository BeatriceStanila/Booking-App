import React from "react";
import { makeup } from "../images/makeup";

function Makeup() {
  return (
    <div id="makeup">
      <h1 className="text-4xl text-title py-10 px-10 uppercase font-bold tracking-widest ">
        makeup
      </h1>
      <div className="p-8 max-w-full  ">
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
