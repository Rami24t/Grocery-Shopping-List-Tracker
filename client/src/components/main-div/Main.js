import React from "react";
import MainHeader from "./MainHeader";
import AddItems from "./AddItems";
import FilterSection from "./FilterSection";
import Lists from "./Lists";

function Main({
  list,
  filter,
  setFilter,
  items,
  needs,
  haves,
  showAddItem,
  setShowAddItem,
  handleChangeList,
  handleChangeFilter,
  handleDelete,
  handleAdd,
  handleToggle,
  updateItem,
  handleReset,
  handleClear,
  dark
}) {
  function sanitize(str) {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9\u0621-\u064A\u0660-\u0669\u0300-\u036fäöüß]/g, "")
      .toLowerCase()
      .normalize("NFD")
  }
  function validate(str) {
    return filter.trim() === "" || sanitize(str).includes(sanitize(filter));
  }

  return (
    <main className="min-w-[33%]  sm:z-50 text-center">
      <MainHeader
        list={list}
        filter={filter}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        items={items}
        handleChangeList={handleChangeList}
        handleReset={handleReset}
        handleClear={handleClear}
        dark={dark}
      />
      {showAddItem && <AddItems handleAdd={handleAdd} dark={dark}/>}
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        handleChangeFilter={handleChangeFilter}
        items={items}
        dark={dark} 
      />
      <Lists
        filter={filter}
        needs={needs}
        haves={haves}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        updateItem={updateItem}
        list={list}
        validate={validate}
        dark={dark}
      />
    </main>
  );
}

export default Main;
