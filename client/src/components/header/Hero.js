import React from "react";

function Hero({title = 'Grocery Shopping List 🛒', subtitle= "Let's do this!", dark }) {
  const getEmoji = () => (Math.random() * 100 > 50 ? "🧉" : "🚀");

  return (
    <div className="app-header-hero text-center sm:text-left">
      <h1
        className={`${
          dark ? "text-white " : "text-gray-900"
        } text-2xl font-bold sm:text-3xl`}
      >
        {title}
        {/* {list} */}
      </h1>
      <p className="app-header-subtitle mt-1.5 text-sm text-gray-500">
        {subtitle} {getEmoji()}{" "}
      </p>
    </div>
  );
}

export default React.memo(Hero);
