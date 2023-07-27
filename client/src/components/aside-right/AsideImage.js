import React from "react";

function AsideImage({ src, className }) {
  return (
    <div className={`img w-[47%] lg:w-full ${className}`}>
      <img className="rounded-lg" src={src} alt="" loading="lazy" />
    </div>
  );
}

export default React.memo(AsideImage);