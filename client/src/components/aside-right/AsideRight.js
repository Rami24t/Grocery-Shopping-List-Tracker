import React, { useEffect, useState, useCallback } from "react";
import AsideImage from "./AsideImage";
import gslGif1 from "../../assets/video/GSL1.gif";
import gslGif2 from "../../assets/video/GSL2.gif";

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
    "/assets/deco-imgs/deco (24).jpg",
    "/assets/deco-imgs/deco (52).jpg",
    gslGif2,
    "/assets/deco-imgs/deco (64).jpg",
    "/assets/deco-imgs/deco (68).jpg",
    "/assets/deco-imgs/deco (30).jpg",
    "/assets/deco-imgs/deco (60).jpg",
    "/assets/deco-imgs/deco (11).jpg",
    "/assets/deco-imgs/deco (49).jpg",
    "/assets/deco-imgs/deco (2).jpg",
    "/assets/deco-imgs/deco (59).jpg",
    "/assets/deco-imgs/deco (5).jpg",
    "/assets/deco-imgs/deco (27).jpg",
    "/assets/deco-imgs/deco (48).jpg",
    "/assets/deco-imgs/deco (61).jpg",
    "/assets/deco-imgs/deco (40).jpg",
    "/assets/deco-imgs/deco (22).jpg",
    "/assets/deco-imgs/deco (25).jpg",
    "/assets/deco-imgs/deco (47).jpg",
    "/assets/deco-imgs/deco (26).jpg",
    "/assets/deco-imgs/deco (4).jpg",
    "/assets/deco-imgs/deco (23).jpg",
    "/assets/deco-imgs/deco (9).jpg",
    "/assets/deco-imgs/deco (51).jpg",
    "/assets/deco-imgs/deco (55).jpg",
    "/assets/deco-imgs/deco (28).jpg",
    "/assets/deco-imgs/deco (67).jpg",
    "/assets/deco-imgs/deco (7).jpg",
    "/assets/deco-imgs/deco (29).jpg",
    "/assets/deco-imgs/deco (35).jpg",
    "/assets/deco-imgs/deco (8).jpg",
    "/assets/deco-imgs/deco (19).jpg",
    "/assets/deco-imgs/deco (10).jpg",
    "/assets/deco-imgs/deco (6).jpg",
    "/assets/deco-imgs/deco (1).jpg",
    "/assets/deco-imgs/deco (3).jpg",
    "/assets/deco-imgs/deco (12).jpg",
    "/assets/deco-imgs/deco (13).jpg",
    "/assets/deco-imgs/deco (16).jpg",
    "/assets/deco-imgs/deco (17).jpg",
    "/assets/deco-imgs/deco (50).jpg",
    "/assets/deco-imgs/deco (20).jpg",
    "/assets/deco-imgs/deco (21).jpg",
    "/assets/deco-imgs/deco (31).jpg",
    "/assets/deco-imgs/deco (32).jpg",
    "/assets/deco-imgs/deco (33).jpg",
    "/assets/deco-imgs/deco (36).jpg",
    "/assets/deco-imgs/deco (38).jpg",
    "/assets/deco-imgs/deco (39).jpg",
    "/assets/deco-imgs/deco (18).jpg",
    "/assets/deco-imgs/deco (41).jpg",
    "/assets/deco-imgs/deco (42).jpg",
    "/assets/deco-imgs/deco (43).jpg",
    "/assets/deco-imgs/deco (45).jpg",
    "/assets/deco-imgs/deco (44).jpg",
    "/assets/deco-imgs/deco (56).jpg",
    "/assets/deco-imgs/deco (46).jpg",
    "/assets/deco-imgs/deco (57).jpg",
    "/assets/deco-imgs/deco (58).jpg",
    "/assets/deco-imgs/deco (62).jpg",
    "/assets/deco-imgs/deco (63).jpg",
    "/assets/deco-imgs/deco (65).jpg",
    "/assets/deco-imgs/deco (66).jpg",
    "/assets/deco-imgs/deco (69).jpg",
    "/assets/deco-imgs/deco (72).jpg",
    "/assets/deco-imgs/deco (70).jpg",
    "/assets/deco-imgs/deco (71).jpg",
    "/assets/deco-imgs/deco (54).jpg",
    "/assets/deco-imgs/deco (34).jpg",
    "/assets/deco-imgs/deco (53).jpg",
    "/assets/deco-imgs/deco (37).jpg",
  ]);
  useEffect(() => {
    const extraImagesNeeded = (height - 300) / 390 - extraImages.length + 1;
    // Math.floor
    const extraImagesTemp = [
      "/assets/deco-imgs/deco (24).jpg",
      "/assets/deco-imgs/deco (52).jpg",
      gslGif2,
      "/assets/deco-imgs/deco (64).jpg",
      "/assets/deco-imgs/deco (68).jpg",
      "/assets/deco-imgs/deco (30).jpg",
      "/assets/deco-imgs/deco (60).jpg",
      "/assets/deco-imgs/deco (11).jpg",
      "/assets/deco-imgs/deco (49).jpg",
      "/assets/deco-imgs/deco (2).jpg",
      "/assets/deco-imgs/deco (59).jpg",
      "/assets/deco-imgs/deco (5).jpg",
      "/assets/deco-imgs/deco (27).jpg",
      "/assets/deco-imgs/deco (48).jpg",
      "/assets/deco-imgs/deco (61).jpg",
      "/assets/deco-imgs/deco (40).jpg",
      "/assets/deco-imgs/deco (22).jpg",
      "/assets/deco-imgs/deco (25).jpg",
      "/assets/deco-imgs/deco (47).jpg",
      "/assets/deco-imgs/deco (26).jpg",
      "/assets/deco-imgs/deco (4).jpg",
      "/assets/deco-imgs/deco (23).jpg",
      "/assets/deco-imgs/deco (9).jpg",
      "/assets/deco-imgs/deco (51).jpg",
      "/assets/deco-imgs/deco (55).jpg",
      "/assets/deco-imgs/deco (28).jpg",
      "/assets/deco-imgs/deco (67).jpg",
      "/assets/deco-imgs/deco (7).jpg",
      "/assets/deco-imgs/deco (29).jpg",
      "/assets/deco-imgs/deco (35).jpg",
      "/assets/deco-imgs/deco (8).jpg",
      "/assets/deco-imgs/deco (19).jpg",
      "/assets/deco-imgs/deco (10).jpg",
      "/assets/deco-imgs/deco (6).jpg",
      "/assets/deco-imgs/deco (1).jpg",
      "/assets/deco-imgs/deco (3).jpg",
      "/assets/deco-imgs/deco (12).jpg",
      "/assets/deco-imgs/deco (13).jpg",
      "/assets/deco-imgs/deco (16).jpg",
      "/assets/deco-imgs/deco (17).jpg",
      "/assets/deco-imgs/deco (50).jpg",
      "/assets/deco-imgs/deco (20).jpg",
      "/assets/deco-imgs/deco (21).jpg",
      "/assets/deco-imgs/deco (31).jpg",
      "/assets/deco-imgs/deco (32).jpg",
      "/assets/deco-imgs/deco (33).jpg",
      "/assets/deco-imgs/deco (36).jpg",
      "/assets/deco-imgs/deco (38).jpg",
      "/assets/deco-imgs/deco (39).jpg",
      "/assets/deco-imgs/deco (18).jpg",
      "/assets/deco-imgs/deco (41).jpg",
      "/assets/deco-imgs/deco (42).jpg",
      "/assets/deco-imgs/deco (43).jpg",
      "/assets/deco-imgs/deco (45).jpg",
      "/assets/deco-imgs/deco (44).jpg",
      "/assets/deco-imgs/deco (56).jpg",
      "/assets/deco-imgs/deco (46).jpg",
      "/assets/deco-imgs/deco (57).jpg",
      "/assets/deco-imgs/deco (58).jpg",
      "/assets/deco-imgs/deco (62).jpg",
      "/assets/deco-imgs/deco (63).jpg",
      "/assets/deco-imgs/deco (65).jpg",
      "/assets/deco-imgs/deco (66).jpg",
      "/assets/deco-imgs/deco (69).jpg",
      "/assets/deco-imgs/deco (72).jpg",
      "/assets/deco-imgs/deco (70).jpg",
      "/assets/deco-imgs/deco (71).jpg",
      "/assets/deco-imgs/deco (54).jpg",
      "/assets/deco-imgs/deco (34).jpg",
      "/assets/deco-imgs/deco (53).jpg",
      "/assets/deco-imgs/deco (37).jpg",
    ];
    if (extraImagesNeeded > 0)
      for (let i = 0; i < extraImagesNeeded; i++)
        extraImagesTemp.push(
          "https://source.unsplash.com/random/380x380/?vegetables?" +
            (i + 1) +
            (Math.random() * 10).toFixed(0)
        );
    if (extraImages.length < extraImagesTemp.length)
      setExtraImages(extraImagesTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const [loadingClasses, setLoadingClasses] = useState(
    "transition-all duration-1000 fixed bottom-0 right-0 w-screen h-screen filter brightness-50 sepia z-50"
  );
  useEffect(() => {
    const a = setTimeout(() => {
      setLoadingClasses(
        "transition-all duration-1000 fixed -bottom-20 -right-20 w-0 h-0 filter brightness-50 sepia opacity-20 z-50"
      );
    }, 3200);
    const b = setTimeout(() => {
      setLoadingClasses("fixed hidden");
    }, 4600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  return (
    <>
      {loadingClasses !== "fixed hidden" && (
        <img
          src={gslGif2}
          className={`${loadingClasses}`}
          alt="loading"
        />
      )}
      <aside
        ref={ref}
        id="aside-right"
        className={`${
          darkMode ? "opacity-80" : "opacity-95"
        } p-2 lg:pt-[220px] lg:max-w-[25%] text-center flex flex-wrap gap-2 lg:gap-4 justify-center items-center relative z-0`}
      >
        <AsideImage src={gslGif1} />
        {/* <AsideImage src="/assets/deco-imgs/deco (68).jpg" /> */}

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
