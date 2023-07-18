import React from "react";

function Hero({ dark }) {
  const getEmoji = () => (Math.random() * 100 > 50 ? "🧉" : "🚀");

  return (
    <div className="app-header-title-subtitle text-center sm:text-left">
      <h1
        className={`${
          dark ? "text-white " : "text-gray-900"
        } text-2xl font-bold sm:text-3xl`}
      >
        Grocery Shopping List 🛒
        {/* {list} */}
      </h1>
      <p className="app-header-subtitle mt-1.5 text-sm text-gray-500">
        Let's do this! {getEmoji()}{" "}
      </p>
    </div>
  );
}

export default React.memo(Hero);
