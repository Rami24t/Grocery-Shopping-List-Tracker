import React from "react";

function AsideImage({ src }) {
  return (
    <div className="img w-[47%] lg:w-full">
      <img className="rounded-lg" src={src} alt="" />
    </div>
  );
}

export default AsideImage;