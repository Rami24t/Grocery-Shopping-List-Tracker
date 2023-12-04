import { useState, useEffect, useMemo } from "react";

export default function useInView(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );
  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer, ref]);
  return isIntersecting;
}
