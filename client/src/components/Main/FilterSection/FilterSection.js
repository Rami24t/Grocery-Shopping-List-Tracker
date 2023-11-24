import { memo, useContext } from "react";
import { SvgSearch, FilterInput, ClearFilterBtn } from "./components";
import { Context } from "../../Context/Context";

function FilterSection({
  filter,
  setFilter,
  handleChangeFilter,
  items,
  darkMode,
}) {
  const { language } = useContext(Context).state.settings;
  if (items <= 1) return null;
  const rtlAlignment = language === 2;
  const searchIconAlignment = rtlAlignment ? "right-1.5" : "left-1.5";

  return (
    <section
      className={`w-full sm:mx-auto relative max-w-max my-1 text-center flex items-center ${
        rtlAlignment ? "flex-row-reverse ms-auto" : "me-auto"
      }`}
    >
      <label htmlFor="filter" className="sr-only">
        Filter Items
      </label>
      <div
        className={`absolute flex items-center pointer-events-none ${searchIconAlignment}`}
      >
        <SvgSearch darkMode={darkMode} />
      </div>
      <FilterInput
        filter={filter}
        handleChangeFilter={handleChangeFilter}
        items={items}
        darkMode={darkMode}
      />
      <ClearFilterBtn
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}
      />
    </section>
  );
}

export default memo(FilterSection);
