import React, { useEffect, useState, useCallback } from "react";
import AsideImage from "./AsideImage";
import {
  animatedImg1,
  animatedImg2,
  animatedImg3,
} from "../../assets/animatedImgs";
import decoImgs from "../../assets/deco-imgs";
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

  const [extraImages, setExtraImages] = useState([
    decoImgs[24],
    decoImgs[52],
    animatedImg2,
    decoImgs[64],
    decoImgs[60],
    animatedImg1,
    // decoImgs[68],
    decoImgs[30],
    decoImgs[49],
    decoImgs[11],
    decoImgs[2],
    decoImgs[59],
    decoImgs[5],
    decoImgs[27],
    decoImgs[48],
    decoImgs[61],
    decoImgs[40],
    decoImgs[22],
    decoImgs[25],
    decoImgs[47],
    decoImgs[26],
    decoImgs[4],
    decoImgs[23],
    decoImgs[9],
    decoImgs[51],
    decoImgs[55],
    decoImgs[28],
    decoImgs[67],
    decoImgs[7],
    decoImgs[29],
    decoImgs[35],
    decoImgs[8],
    decoImgs[19],
    decoImgs[10],
    decoImgs[6],
    decoImgs[1],
    decoImgs[3],
    decoImgs[12],
    decoImgs[13],
    decoImgs[16],
    decoImgs[17],
    decoImgs[50],
    decoImgs[20],
    decoImgs[21],
    decoImgs[31],
    decoImgs[32],
    decoImgs[33],
    decoImgs[36],
    decoImgs[38],
    decoImgs[39],
    decoImgs[18],
    decoImgs[41],
    decoImgs[42],
    decoImgs[43],
    decoImgs[45],
    decoImgs[44],
    decoImgs[56],
    decoImgs[46],
    decoImgs[57],
    decoImgs[58],
    decoImgs[62],
    decoImgs[63],
    decoImgs[65],
    decoImgs[66],
    decoImgs[69],
    decoImgs[72],
    decoImgs[70],
    decoImgs[71],
    decoImgs[54],
    decoImgs[34],
    decoImgs[53],
    decoImgs[37],
  ]);
  useEffect(() => {
    const extraImagesNeeded = (height - 300) / 390 - extraImages.length + 1;
    // Math.floor
    const extraImagesTemp = [
      decoImgs[24],
      decoImgs[52],
      animatedImg2,
      decoImgs[64],
      decoImgs[60],
      animatedImg1,
      // decoImgs[68],
      decoImgs[30],
      decoImgs[49],
      decoImgs[11],
      decoImgs[2],
      decoImgs[59],
      decoImgs[5],
      decoImgs[27],
      decoImgs[48],
      decoImgs[61],
      decoImgs[40],
      decoImgs[22],
      decoImgs[25],
      decoImgs[47],
      decoImgs[26],
      decoImgs[4],
      decoImgs[23],
      decoImgs[9],
      decoImgs[51],
      decoImgs[55],
      decoImgs[28],
      decoImgs[67],
      decoImgs[7],
      decoImgs[29],
      decoImgs[35],
      decoImgs[8],
      decoImgs[19],
      decoImgs[10],
      decoImgs[6],
      decoImgs[1],
      decoImgs[3],
      decoImgs[12],
      decoImgs[13],
      decoImgs[16],
      decoImgs[17],
      decoImgs[50],
      decoImgs[20],
      decoImgs[21],
      decoImgs[31],
      decoImgs[32],
      decoImgs[33],
      decoImgs[36],
      decoImgs[38],
      decoImgs[39],
      decoImgs[18],
      decoImgs[41],
      decoImgs[42],
      decoImgs[43],
      decoImgs[45],
      decoImgs[44],
      decoImgs[56],
      decoImgs[46],
      decoImgs[57],
      decoImgs[58],
      decoImgs[62],
      decoImgs[63],
      decoImgs[65],
      decoImgs[66],
      decoImgs[69],
      decoImgs[72],
      decoImgs[70],
      decoImgs[71],
      decoImgs[54],
      decoImgs[34],
      decoImgs[53],
      decoImgs[37],
    ];
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
    "transition-all duration-1000 fixed bottom-0 right-0 w-screen h-screen filter brightness-50 sepia z-50 opacity-95"
  );
  useEffect(() => {
    const a = setTimeout(() => {
      setLoadingClasses(
        "transition-all duration-1000 fixed -bottom-20 -right-20 w-0 h-0 filter brightness-50 sepia opacity-20 z-50"
      );
    }, 3000);
    const b = setTimeout(() => {
      setLoadingClasses("fixed hidden");
    }, 4100);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  const [loadingImg] = useState(
    Math.random() < 0.7 ? animatedImg3 : animatedImg1
  );
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
