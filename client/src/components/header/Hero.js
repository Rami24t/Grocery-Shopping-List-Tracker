import React from "react";

function Hero({
  title = "Grocery Shopping List 🛒",
  subtitle = "Let's do this!",
  darkMode,
}) {
  const getEmoji = () => (Math.random() * 100 > 50 ? "🧉" : "🚀");

  return (
    <div className="ml-4 app-header-hero text-center md:text-left mb-5 md:mb-0">
      <h1
        className={`${
          darkMode ? "text-white " : "text-gray-900"
        } text-2xl font-bold sm:text-3xl`}
      >
        {title}
        {/* {list} */}
      </h1>
      <p className={`app-header-subtitle ${!darkMode?'text-gray-500':'text-[#989]'} m-1.5 ml-1 p-1.5 mr-2.5 text-sm`}>
        {subtitle} {getEmoji()}{" "}
      </p>
    </div>
  );
}

export default React.memo(Hero);
