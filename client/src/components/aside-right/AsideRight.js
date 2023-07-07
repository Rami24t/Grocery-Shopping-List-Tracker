import React, { useEffect, useState, useCallback } from "react";

export function AsideRight({isMobile}) {
  function AsideImage({ src }) {
    return (
      <div className="img w-[47%] lg:w-full">
        <img className="rounded-lg" src={src} alt="" />
      </div>
    );
  }

  const [height, setHeight] = useState(0);
  const ref = useCallback(node => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => { 
      setHeight(node.getBoundingClientRect().height);
    });
    resizeObserver.observe(node);
  }, []);

  const [extraImages, setExtraImages] = useState(["/assets/deco-imgs/deco3.jpg","/assets/deco-imgs/deco11.jpg","/assets/deco-imgs/deco2.jpg", "/assets/deco-imgs/deco4.jpg"]);
  useEffect(() => {
    const extraImagesNeeded = ((height - 300) / 390) - extraImages.length+1;
    const extraImagesTemp = ["/assets/deco-imgs/deco3.jpg","/assets/deco-imgs/deco11.jpg","/assets/deco-imgs/deco2.jpg", "/assets/deco-imgs/deco4.jpg"];
    if (extraImagesNeeded > 0)
      for (let i = 0; i < extraImagesNeeded; i++)
        extraImagesTemp.push(
          "https://source.unsplash.com/random/380x380/?vegetables?" +
            (i + 1) +
            (Math.random() * 10).toFixed(0)
        );
    extraImages.length < extraImagesTemp.length &&
      setExtraImages(extraImagesTemp);
  }, [height]);

  return (
    <aside
      ref={ref}
      onResize={() => setHeight(ref.current.clientHeight)}
      id="aside-right"
      className="flex lg:pt-[220px] lg:max-w-[25%] flex-wrap gap-2 lg:gap-4 content-around justify-center text-center p-2 z-0 relative items-center "
    >

      <AsideImage src="/assets/deco-imgs/deco8.jpg" />

      {
       extraImages.map((src, idx) => (
        height > ((idx+1+1)*390)+300 &&
        <AsideImage key={idx} src={src} />
      ))
      }

      {isMobile &&
        extraImages.map((src, idx) => idx<3 && <AsideImage key={idx} src={src} />)}

    </aside>
  );
}
