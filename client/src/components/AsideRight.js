import React from "react";

export function AsideRight() {
  function AsideImage({ src }) {
    return (
      <div className="img w-[47%] lg:w-full">
        <img className="rounded-lg" src={src} alt="placeholder" />
      </div>
    );
  }

  return (
    <aside className="flex lg:max-w-[25%] flex-wrap gap-2 content-around justify-center text-center p-2 z-50 relative">
      <AsideImage src="/assets/deco-imgs/deco8.jpg" />
      <AsideImage src="/assets/deco-imgs/deco3.jpg" />
      <AsideImage src="/assets/deco-imgs/deco2.jpg" />
      <AsideImage src="/assets/deco-imgs/deco11.jpg" />
    </aside>
  );
}
