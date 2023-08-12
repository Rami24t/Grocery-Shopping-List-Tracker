import React, { useEffect, useState, useCallback } from "react";
import AsideImage from "./AsideImage";
import { animatedImg3 } from "../../assets/animatedImgs";
import decoImgs from "../../assets/deco-imgs";
import imagesArray from "./images";
//import ResizeObserver from "resize-observer-polyfill";

function AsideRight({ darkMode }) {
  const [height, setHeight] = useState(0);
  const ref = useCallback((node) => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setHeight(node.getBoundingClientRect().height);
    });
    resizeObserver.observe(node);
  }, []);

  const [extraImages, setExtraImages] = useState(...imagesArray);
  useEffect(() => {
    const extraImagesNeeded = (height - 300) / 390 - extraImages.length + 1;
    // Math.floor
    const extraImagesTemp = [...imagesArray];
    if (extraImagesNeeded > 0)
      for (let i = 0; i < extraImagesNeeded; i++)
        extraImagesTemp.push(
          decoImgs[0] + (i + 1) + (Math.random() * 10).toFixed(0)
        );
    if (extraImages.length < extraImagesTemp.length)
      setExtraImages(extraImagesTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const [loadingClasses, setLoadingClasses] = useState(
    "transition-all duration-1000 fixed bottom-0 right-0 w-screen h-screen filter brightness-50 z-50 opacity-95"
  );
  useEffect(() => {
    const a = setTimeout(() => {
      setLoadingClasses(
        "transition-all duration-1000 fixed -bottom-20 -right-20 w-0 h-0 filter brightness-50 sepia opacity-20 z-50"
      );
    }, 1900);
    const b = setTimeout(() => {
      setLoadingClasses("fixed hidden");
    }, 3000);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  const [loadingImg] = useState(animatedImg3);
  return (
    <>
      {loadingClasses !== "fixed hidden" ? (
        <img src={loadingImg} className={`${loadingClasses}`} alt="loading" />
      ) : null}
      <aside
        ref={ref}
        id="aside-right"
        className={`${
          darkMode ? "opacity-80" : "opacity-95"
        } p-2 lg:pt-[220px] lg:max-w-[25%] text-center flex flex-wrap gap-2 lg:gap-4 justify-center items-center relative z-0`}
      >
        {/* <AsideImage src={animImg1} /> */}
        <AsideImage src={decoImgs[68]} />

        {extraImages.slice(0, 1).map((src, idx) => (
          <AsideImage className={"lg:hidden"} key={idx} src={src} />
        ))}

        {extraImages.slice(1, 3).map((src, idx) => (
          <AsideImage className={"sm:hidden"} key={idx} src={src} />
        ))}

        {extraImages.map(
          (src, idx) =>
            height > (idx + 1 + 1) * 390 + 300 && (
              <AsideImage key={idx} src={src} />
            )
        )}
      </aside>
    </>
  );
}

export default React.memo(AsideRight);
