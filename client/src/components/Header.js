function Header({ items }) {
  return (
    <header className="App-header z-50 sticky bg-inherit w-full">
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold dark:text-white text-gray-900 sm:text-3xl">
              Grocery List
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">Let's do it! 🎉</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
            disabled
              className="relative block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              // "inline-flex items-center justify-center gap-1.5 rounded-lg border text-gray-500 hover:text-gray-700"
              type="button"
            >
              Items{"  "}
              <svg
                className="inline w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                />
              </svg>
              {/* <svg
            className="inline-block w-4 h-4 text-gray-800 dark:text-white"
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>*/}{" "}
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {items.length || 0}{" "}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
