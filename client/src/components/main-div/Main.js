import React from "react";
import MainHeader from "./MainHeader";
import AddItems from "./AddItems";
import FilterSection from "./filter-section/FilterSection";
import Lists from "./Lists";
import { wrongFilterSFXAudio2, completionSFXAudio } from "../../utils/sfx";

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
  dark,
}) {
  function sanitize(str) {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9\u0621-\u064A\u0660-\u0669\u0300-\u036fäöüß]/g, "")
      .toLowerCase()
      .normalize("NFD");
  }
  function validate(str) {
    return filter.trim() === "" || sanitize(str).includes(sanitize(filter));
  }
  const filteredNeeds = filter
    ? needs.filter((item) => validate(item.name))
    : needs;
  const filteredHaves = filter
    ? haves.filter((item) => validate(item.name))
    : haves;
  const noFilteredResults =
    items.length > 1 && filteredNeeds.length + filteredHaves.length <= 0;

  if (filter)
    if (noFilteredResults) {
      wrongFilterSFXAudio2.currentTime = 0;
      wrongFilterSFXAudio2.play();
    } else {
      completionSFXAudio.currentTime = 0;
      completionSFXAudio.play();
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
      <AddItems handleAdd={handleAdd} dark={dark} showAddItem={showAddItem} />
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        handleChangeFilter={handleChangeFilter}
        items={items.length}
        dark={dark}
      />
      <Lists
        needs={needs}
        haves={haves}
        filteredNeeds={filteredNeeds}
        filteredHaves={filteredHaves}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        updateItem={updateItem}
        list={list}
        dark={dark}
      />
    </main>
  );
}

export default React.memo(Main);
