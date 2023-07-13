import React from "react";
import { SvgSearch } from "./SvgSearch";
import FilterInput from "./FilterInput";
import ClearFilterBtn from "./ClearFilterBtn";

function FilterSection({ filter, setFilter, handleChangeFilter, items, dark }) {
  if (items <= 1) return null;

  return (
    <section className="me-auto w-full sm:mx-auto relative max-w-max my-1 text-center flex items-center ">
      <label htmlFor="filter" className="sr-only">
        Filter Items
      </label>
      <div className="absolute left-1.5 flex items-center pointer-events-none">
        <SvgSearch dark={dark} />
      </div>
      <FilterInput filter={filter} handleChangeFilter={handleChangeFilter} items={items} dark={dark} />
      <ClearFilterBtn filter={filter} setFilter={setFilter} />
    </section>
  );
}

export default React.memo(FilterSection);