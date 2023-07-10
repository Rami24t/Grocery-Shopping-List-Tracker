import React, { useEffect, useState, useCallback } from "react";
import AsideImage from "./AsideImage";

function AsideRight() {
  const [height, setHeight] = useState(0);
  const ref = useCallback((node) => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setHeight(node.getBoundingClientRect().height);
    });
    resizeObserver.observe(node);
  }, []);

  const [extraImages, setExtraImages] = useState([
    "/assets/deco-imgs/deco3.jpg",
    "/assets/deco-imgs/deco11.jpg",
    "/assets/deco-imgs/deco2.jpg",
    "/assets/deco-imgs/deco4.jpg",
  ]);
  useEffect(() => {
    const extraImagesNeeded = (height - 300) / 390 - extraImages.length + 1;
    // Math.floor
    const extraImagesTemp = [
      "/assets/deco-imgs/deco3.jpg",
      "/assets/deco-imgs/deco11.jpg",
      "/assets/deco-imgs/deco2.jpg",
      "/assets/deco-imgs/deco9.jpg",
      "/assets/deco-imgs/deco10.jpg",
      "/assets/deco-imgs/deco5.jpg",
      "/assets/deco-imgs/deco1.jpg",
      "/assets/deco-imgs/deco0.jpg",
    ];
    if (extraImagesNeeded > 0)
      for (let i = 0; i < extraImagesNeeded; i++)
        extraImagesTemp.push(
          "https://source.unsplash.com/random/380x380/?vegetables?" +
            (i + 1) +
            (Math.random() * 10).toFixed(0)
        );
    if(extraImages.length < extraImagesTemp.length)
      setExtraImages(extraImagesTemp);
  }, [height]);

  return (

    <aside
      ref={ref}
      // onResize={() => setHeight(ref.current.clientHeight)}
      id="aside-right"
      className="opacity-90 p-2 lg:pt-[220px] lg:max-w-[25%] text-center flex flex-wrap gap-2 lg:gap-4 justify-center items-center relative z-0"
    >


      <AsideImage src="/assets/deco-imgs/deco8.jpg" />

      {extraImages.slice(0, 1).map((src, idx) => (
        <AsideImage className={"lg:hidden"} key={idx} src={src} />
      ))}

      {extraImages.slice(1, 3).map((src, idx) => (
        <AsideImage className={"sm:hidden"} key={idx} src={src} />
      ))}

      {extraImages.map(
        (src, idx) =>
          (height > (idx + 1 + 1) * 390 + 300) && (
            <AsideImage key={idx} src={src} />
          )
      )}


    </aside>
  );
}

export default AsideRight;
