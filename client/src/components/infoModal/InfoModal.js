import { useEffect } from "react";

export default function InfoModal({
  text = "I'm a modal dialog",
  onClose,
  darkMode,
}) {
  useEffect(() => {
    const st = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(st);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className={`p-1 cursor-pointer opacity-80 rounded-sm fixed left-5 bottom-1 ${
        darkMode ? " bg-black text-white" : "bg-white text-black"
      } modal`}
    >
      <div>{text}</div>
    </div>
  );
}
