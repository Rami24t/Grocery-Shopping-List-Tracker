import React from "react";

function ToggleDarkModeButton({ darkMode, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      title={darkMode ? "Bright Mode" : "Dark Mode"}
      aria-label="Toggle dark mode"
      className={`-mt-11 float-right ml-1 px-1 cursor-pointer flex items-center w-9 h-9 justify-center text-xs font-medium border rounded-lg toggle-dark-state-example focus:z-10 focus:ring-2 focus:outline-none 
  ${
    !darkMode
      ? "hover:bg-gray-100 hover:text-blue-800 text-blue-600 bg-gray-100 border-gray-200 focus:ring-gray-300 bg-opacity-50"
      : "focus:ring-gray-500 bg-gray-800 text-gray-400 border-gray-700 hover:text-gray-100 hover:bg-gray-700"
  }`}
    >
      {!darkMode ? (
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        </svg>
      ) : (
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
      )}
      <span  aria-label="Toggle dark mode" className="sr-only">Toggle dark/light mode</span>
      <label  aria-label="Toggle dark mode" className="relative ml-1 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={!darkMode}
          readOnly={true}
          aria-label="Toggle dark mode"
          className="m-0 p-0 sr-only peer"
        />
        <div
          className={`m-0 p-0 w-2 h-4 peer-focus:outline-none peer-focus:ring-2 rounded-full peer ${
            darkMode ? "peer-focus:ring-blue-800" : "peer-focus:ring-blue-300"
          } peer-checked:after:-translate-y-[120%] peer-checked:after:border-white after:content-[''] after:absolute after:-bottom-[10%] after:left-[-1px] md:after:left-[-0.5px]  after:border-gray-400 after:border after:rounded-full after:h-2 after:w-2 after:transition-all peer-checked:bg-blue-500
                ${
                  !darkMode
                    ? "after:bg-white bg-gray-100 border-gray-200 focus:ring-gray-300"
                    : "focus:ring-gray-500 after:bg-gray-500 after:border-gray-600 bg-gray-900 border-gray-800 after:hover:bg-gray-400 hover:bg-gray-800"
                }`}
        ></div>
      </label>
    </button>
  );
}

export default React.memo(ToggleDarkModeButton);
