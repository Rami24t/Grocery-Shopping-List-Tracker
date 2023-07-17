import { useEffect, useState } from "react";
import ArrowToIcon from "./ArrowToIcon";

function ArrowButtonsNav({ dark }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ArrowToIcon
        toBottom={false}
        dark={dark}
        shown={scrollY > window.innerHeight}
      />
      <ArrowToIcon
        toBottom={true}
        dark={dark}
        shown={
          scrollY <
            window.document.body.clientHeight - 2 * window.innerHeight &&
          scrollY > 10
        }
      />
    </>
  );
}

export default ArrowButtonsNav;
