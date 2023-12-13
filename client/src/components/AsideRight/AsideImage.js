import { memo, useRef } from "react";
import useInView from "../../hooks/useInView";
function AsideImage({ src, className, onClick }) {
  // useEffect(() => {
  //   caches.open('v1').then(function(cache) {
  //     cache.add(src);
  //   });
  // }, [src]);

  const imgRef = useRef(null);
  const inView = useInView(imgRef);

  return (
    <div className={`img w-[47%] lg:w-full ${className}`}>
      <picture
        ref={imgRef}
        className={`filter duration-700 ${
          !inView ? "saturate-0 brightness-0 opacity-0" : ""
        }`}
      >
        {/* {<source media="(min-width:650px)" srcset="" type="image/webp" />} */}
        <img
          className="rounded-lg aspect-square"
          src={src}
          alt=""
          loading="lazy"
          onClick={onClick}
        />
      </picture>
    </div>
  );
}

export default memo(AsideImage);
