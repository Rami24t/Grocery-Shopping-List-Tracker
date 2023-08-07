import { useEffect } from "react";

function InfoModal({
  darkMode = true,
  info = "",
  setInfo,
}) {
  const close = () => setInfo("");

  useEffect(() => {
    const st = setTimeout(() => {
      setInfo("");
    }, 3000);
    return () => {
      clearTimeout(st);
    };
  }, [info]);

  //  if (!info) return null;
  return (
    <div
      onClick={close}
      className={`z-50 p-1 cursor-pointer opacity-80 rounded-sm fixed left-6 bottom-1 ${
        darkMode ? " bg-black text-white" : "bg-white text-black"
      } modal`}
    >
      <div>{info}</div>
    </div>
  );
}

export default InfoModal;