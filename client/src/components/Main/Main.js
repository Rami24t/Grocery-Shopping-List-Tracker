import React from "react";
import MainHeader from "./MainHeader";
import AddItems from "./AddItems";
import FilterSection from "./FilterSection";
import Lists from "./Lists";

function Main({
  list,
  filter,
  items,
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
}) {
  function sanitize(str) {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9äöüß]/g, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  function validate(str) {
    return filter.trim() === "" || sanitize(str).includes(sanitize(filter));
  }

  return (
    <main className="min-w-[33%] bg-inherit sm:z-50">
      <MainHeader
        list={list}
        filter={filter}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        items={items}
        handleChangeList={handleChangeList}
        handleReset={handleReset}
        handleClear={handleClear}
      />
      {showAddItem && <AddItems handleAdd={handleAdd} />}
      <FilterSection
        filter={filter}
        handleChangeFilter={handleChangeFilter}
        items={items}
      />
      <Lists
        filter={filter}
        items={items}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        updateItem={updateItem}
        list={list}
        validate={validate}
      />
    </main>
  );
}

export default Main;
