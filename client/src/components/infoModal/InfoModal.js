import { useEffect, useContext } from "react";
import { Context } from "../Context";

function InfoModal({ info = "", setInfo, darkMode = true }) {
  const close = () => setInfo("");

  useEffect(() => {
    const st = setTimeout(() => {
      setInfo("");
    }, 3000);
    return () => {
      clearTimeout(st);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const rtlAlignment = useContext(Context).state.settings.language === 2;

  if (!info) return null;
  return (
    <div
      onClick={close}
      className={`z-50 p-1 cursor-pointer opacity-80 rounded-sm fixed bottom-11 ${
        rtlAlignment ? "right-7 text-right" : "left-7"
      } ${darkMode ? " bg-black text-white" : "bg-white text-black"} modal`}
    >
      <div>{info}</div>
    </div>
  );
}

export default InfoModal;
