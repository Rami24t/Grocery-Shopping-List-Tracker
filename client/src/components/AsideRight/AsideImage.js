import { memo } from "react";
function AsideImage({ src, className }) {
  // useEffect(() => {
  //   caches.open('v1').then(function(cache) {
  //     cache.add(src);
  //   });
  // }, [src]);

  return (
    <div className={`img w-[47%] lg:w-full ${className}`}>
      <picture>
        {/* {<source media="(min-width:650px)" srcset="" type="image/webp" />} */}
        <img
          className="rounded-lg aspect-square"
          src={src}
          alt=""
          loading="lazy"
        />
      </picture>
    </div>
  );
}

export default memo(AsideImage);
