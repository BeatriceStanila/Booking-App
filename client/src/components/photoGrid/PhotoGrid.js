import React from "react";
import { makeup } from "../../images/makeup";

function PhotoGrid() {
  return (
    <div className="p-8 max-w-full  ">
      <div className="grid grid-cols-4 grid-rows-3  gap-2 md-col-span-2">
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
  );
}

export default PhotoGrid;
