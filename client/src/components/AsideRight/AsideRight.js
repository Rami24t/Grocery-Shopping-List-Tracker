import { memo, useEffect, useState, useCallback } from "react";
import { AsideImage, imagesArray } from "./components";
import { animatedImg3 } from "../../assets/animatedImgs";
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

  const changeSrc = (e) => {
    e.target.src = decoImgs[Math.floor(Math.random() * 75)];
  };

  const [extraImages, setExtraImages] = useState([...imagesArray]);
  useEffect(() => {
    const extraImagesNeeded = (height - 300) / 390 - extraImages.length + 1;
    // Math.floor
    const extraImagesTemp = [...imagesArray];
    if (extraImagesNeeded > 0)
      for (let i = 0; i < extraImagesNeeded; i++)
        extraImagesTemp.push(
          decoImgs[0] + (i + 1) + (Math.random() * 10 + 1).toFixed(0)
          // decoImgs[0] + (i + 1) + (Math.random() * 10).toFixed(0)
        );
    if (extraImages.length < extraImagesTemp.length)
      setExtraImages(extraImagesTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const [loadingClasses, setLoadingClasses] = useState(
    "transition-all duration-1000 fixed bottom-0 right-0 w-screen h-screen filter brightness-50 z-50 opacity-95 aspect-auto"
  );
  useEffect(() => {
    const a = setTimeout(() => {
      setLoadingClasses(
        "transition-all duration-1000 fixed -bottom-20 -right-20 w-0 h-0 filter brightness-50 sepia opacity-20 z-50 aspect-auto"
      );
    }, 1900);
    const b = setTimeout(() => {
      setLoadingClasses("fixed hidden aspect-auto");
    }, 3000);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  const [loadingImg] = useState(animatedImg3);
  return (
    <>
      {loadingClasses !== "fixed hidden aspect-auto" ? (
        <img
          src={loadingImg}
          className={`${loadingClasses}`}
          alt="loading"
          onClick={() => {
            setLoadingClasses("fixed hidden aspect-auto");
          }}
        />
      ) : null}
      <aside
        ref={ref}
        id="aside-right"
        className={`${
          darkMode ? "opacity-80" : "opacity-95"
        } gap-1 rounded-full overflow-auto lg:gap-4 p-0 mt-4 lg:mt-0 lg:pt-[220px] lg:max-w-[25%] text-center flex flex-wrap justify-center items-center relative z-0`}
      >
        {/* <AsideImage src={animImg1} /> */}
        <AsideImage src={decoImgs[68]} />

        {extraImages.slice(0, 1).map((src, idx) => (
          <AsideImage className={"lg:hidden"} key={idx} src={src} />
        ))}

        {extraImages.slice(1, 3).map((src, idx) => (
          <AsideImage
            className={"sm:hidden cursor-pointer"}
            key={idx}
            src={src}
            onClick={changeSrc}
          />
        ))}

        {extraImages.map(
          (src, idx) =>
            height > (idx + 1 + 1) * 390 + 300 && (
              <AsideImage
                key={idx}
                src={src}
                onClick={changeSrc}
                className={"cursor-pointer"}
              />
            )
        )}
      </aside>
    </>
  );
}

export default memo(AsideRight);
