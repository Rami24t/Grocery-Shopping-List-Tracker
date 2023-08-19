import React, { useContext, useEffect } from "react";
import MainHeader from "./MainHeader";
import AddItems from "./AddItems";
import FilterSection from "./filter-section/FilterSection";
import Lists from "./Lists";
import {
  wrongFilterSFXAudio2,
  completionSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context";
import UndoButton from "./UndoButton";

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
  disableUndoBtn,
  handleUndo,
  handleAdd,
  handleToggle,
  updateItem,
  handleReset,
  handleClear,
  darkMode,
}) {
  const { state, dispatch } = useContext(Context);
  const { sound } = state.settings;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });

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
  useEffect(() => {
    if (filter) {
      const noFilteredResults =
        items.length > 1 && filteredNeeds.length + filteredHaves.length <= 0;
      if (sound)
        if (noFilteredResults) {
          playSFXAudio(wrongFilterSFXAudio2);
        } else {
          playSFXAudio(completionSFXAudio);
        }
      setInfo(
        noFilteredResults
          ? "Filter doesn't match any item"
          : "Showing filtered items"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
        darkMode={darkMode}
      />
      <AddItems
        handleAdd={handleAdd}
        darkMode={darkMode}
        showAddItem={showAddItem}
      />
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        handleChangeFilter={handleChangeFilter}
        items={items.length}
        darkMode={darkMode}
      />
      <UndoButton
        disabled={disableUndoBtn}
        handleUndo={handleUndo}
        darkMode={darkMode}
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
        darkMode={darkMode}
      />
    </main>
  );
}

export default React.memo(Main);
