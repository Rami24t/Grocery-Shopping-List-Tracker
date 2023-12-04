import { memo } from "react";

function Hero({
  title = "Grocery Shopping List 🛒",
  subtitle = "Let's do this!",
  darkMode,
  Icon,
  rtlAlignment,
}) {
  const getEmoji = () => (Math.random() * 100 > 50 ? "🧉" : "🚀");

  return (
    <div
      className={`ml-4 mr-4 md:mt-1 mb-6 md:mb-0 app-header-hero text-center select-none
      ${rtlAlignment ? "lg:text-right" : "lg:text-left"}
      `}
      style={{ minWidth: "59%" }}
    >
      <h1
        className={`${
          darkMode ? "text-white " : "text-red-700"
        } text-2xl font-bold sm:text-3xl`}
      >
        {rtlAlignment || title}{" "}
        <Icon
          className={`inline-block ${
            rtlAlignment ? "-translate-y-1.5 scale-105" : "-translate-y-1 scale-110"
          } -rotate-12`}
        />{" "}
        {rtlAlignment && title}
        {/* {list} */}
      </h1>
      <p
        className={`app-header-subtitle ${
          !darkMode ? "text-amber-600" : "text-[#989]"
        }
          ${rtlAlignment && "text-[0.98rem]"}
         m-1.5 ml-1 p-1.5 mr-2.5 text-sm`}
      >
        {rtlAlignment || subtitle} {getEmoji()} {rtlAlignment && subtitle}
      </p>
    </div>
  );
}

export default memo(Hero);
