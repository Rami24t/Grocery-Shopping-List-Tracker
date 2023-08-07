import React, { useState, useEffect } from "react";
import { defaultItems } from "./data/defaultItems";
import Header from "./components/header/Header";
import Sidenav from "./components/aside-left/Sidenav";
import Main from "./components/main-div/Main";
import AsideRight from "./components/aside-right/AsideRight";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/aside-left/MenuButton";
import { getLists } from "./utils/getLists";
import { Context } from "./components/Context";
import ArrowButtonsNav from "./components/aside-left/ArrowButtonsNav";
import { createPortal } from "react-dom";
import InfoModal from "./components/infoModal/InfoModal";

import {
  addSFXAudio1,
  addSFXAudio2,
  addDeniedSFXAudio,
  haveSFXAudio,
  resetSFXAudio,
  buttonClickSFXAudio2,
  deleteSFXAudio,
  slideOutInSFXAudio,
  resetOrClearFilterSFXAudio,
  clearSFXAudio,
  finishSFXAudio,
  typeSFXAudio,
  wrongFilterSFXAudio,
  openCloseAddFormSFXAudio,
  playSFXAudio,
  // buttonClickSFXAudio,
  // buttonSFXAudio,
  // slideInSFXAudio,
  // menuButtonClickAudio,
  // switchSFXAudio,
  // inputErrorSFXAudio,
  // pencilCheckSFXAudio,
} from "./assets/sfx";

function App() {
  const { state, dispatch } = React.useContext(Context);
  const sound = state.settings.sound;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });

  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [list, setList] = useState(
    localStorage.getItem("lastVisitedList") || "1"
  );
  useEffect(() => {
    setIsMobile(window.innerWidth <= 440);
    if (localStorage.getItem("lastVisitedList"))
      setList(localStorage.getItem("lastVisitedList"));
    else setList("1");
    // setInfo(`Now Loading... `);
  }, []);

  function handleChangeList(e) {
    if (e.target.validity.valid) {
      setList(e.target.value);
      localStorage.setItem("lastVisitedList", e.target.value);
    }
  }
  const [showAddItem, setShowAddItem] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [filter, setFilter] = useState("");

  function handleChangeFilter(value) {
    if (sound && value.length > filter.length) {
      playSFXAudio(typeSFXAudio);
    }
    if (value.trim() === "") setFilter("");
    else {
      setFilter(value);
      dispatch({
        type: "SET_SHOW_ITEMS",
        payload: { showNeeds: true, showHaves: true },
      });
    }
  }

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(`list${list}`)) || defaultItems
  );

  useEffect(() => {
    if (localStorage.getItem(`list${list}`))
      setItems(JSON.parse(localStorage.getItem(`list${list}`)));
    // document.title = `Grocery 🛒 | List ${list}`;
    document.title = `🛒📋Gr.Shop.List🧾📱`;
  }, [list]);

  // const handleSave = useCallback(
  //   (updatedItems) => {
  //     localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
  //   },
  //   [items, list]
  // );
  function handleSave(updatedItems) {
    // console.log(items, "saving items");
    localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
    // setInfo(`List saved`);
    // console.log("save end");
  }
  // const handleDelete = useCallback(
  //   (item) => {
  //     setItems((prevItems) => {
  //       const updatedItems = prevItems.filter((i) => i.id !== item.id);
  //       handleSave(updatedItems);
  //       return updatedItems;
  //     });
  //   },
  //   [handleSave]
  // );
  function handleDelete(item) {
    if (sound) {
      if (item.need && needs.length === 1) {
        playSFXAudio(finishSFXAudio);
      } else if (!item.need && haves.length === 1) {
        playSFXAudio(clearSFXAudio);
      }
      playSFXAudio(deleteSFXAudio);
    }
    setInfo(`Item ${item.name.slice(0, 10)}... deleted`);
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((i) => i.id !== item.id);
      // handleSave(updatedItems);
      // console.log("delete");
      return updatedItems;
    });
  }
  function refreshItems() {
    setItems([...items]);
  }
  // const handleToggle = useCallback(
  //   (item) => {
  //     const updatedItems = items.map((i) => {
  //       if (i.id === item.id) {
  //         return { ...i, need: !i.need };
  //       }
  //       return i;
  //     });
  //     setItems(updatedItems);
  //     handleSave(updatedItems);
  //   },
  //   [items, handleSave]
  // );
  function handleToggle(item) {
    if (sound)
      if (item.need) {
        if (needs.length === 1) {
          playSFXAudio(finishSFXAudio);
        } else {
          playSFXAudio(haveSFXAudio, addSFXAudio2);
          setTimeout(() => {
            haveSFXAudio.pause();
          }, 600);
        }
      } else {
        if (haves.length === 1) {
          playSFXAudio(clearSFXAudio);
        } else {
          playSFXAudio(buttonClickSFXAudio2);
        }
      }
    item.need = !item.need;
    setTimeout(() => {
      setInfo(
        `${item.name.match(/.*?[\w]+/)}... ${
          item.need ? "unchecked" : "checked"
        }`
      );
      refreshItems();
    }, 100);
  }
  // const updateItem = useCallback(
  //   (item, update) => {
  //     const updatedItems = items.map((i) => {
  //       if (i.id === item.id) {
  //         return { ...i, ...update };
  //       }
  //       return i;
  //     });
  //     setItems(updatedItems);
  //     handleSave(updatedItems);
  //   },
  //   [items, handleSave]
  // );
  function updateItem(item, update) {
    // console.log(item, update);
    for (let key in update) {
      item[key] = update[key];
    }
    // console.log(item, update);
    refreshItems();
  }

  function handleAdd(value) {
    handleChangeFilter("");
    if (value === "" || items.find((i) => i.name === value)) {
      if (sound && value !== "") {
        playSFXAudio(addDeniedSFXAudio);
        setInfo(`Item ${value.slice(0, 10)}... already exists`);
      }
      return;
    } else {
      sound && playSFXAudio(addSFXAudio1);
      setInfo(`Item ${value.slice(0, 10)}... added`);
      const updatedItems = [
        ...items,
        {
          id: "RAGSL-" + (items.length + 1) + Date.now(),
          name: value,
          need: true,
        },
      ].sort((a, b) => a.name.localeCompare(b.name));
      setItems([...updatedItems]);
      dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds: true } });
    }
  }

  function handleReset() {
    setItems(defaultItems);
    handleSave(defaultItems);
    setFilter("");
    setShowAddItem(false);
    // state.setShowItems(true,true);
    dispatch({
      type: "SET_SHOW_ITEMS",
      payload: { showNeeds: true, showHaves: true },
    });
    sound && playSFXAudio(resetSFXAudio);
    setInfo("List is now reset");
  }

  function handleClear() {
    // const isSure = window.confirm("Are you sure you want to delete all items?");
    // if (!isSure) return;
    setItems([]);
    handleSave([]);
    setFilter("");
    sound &&
      playSFXAudio(
        resetOrClearFilterSFXAudio,
        wrongFilterSFXAudio,
        openCloseAddFormSFXAudio
      );
    setInfo("List is now cleared");
  }

  useEffect(() => {
    if (
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort()) ||
      !items
    )
      return;
    handleSave();
    // setInfo("Autosaving complete");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const { needs, haves } = getLists(items);

  return (
    <div
      id="app"
      className={`app-container ${
        darkMode
          ? "bg-black bg-gradient-to-l from-gray-950 text-white"
          : "bg-white bg-gradient-to-l from-gray-50 text-gray-800"
      }  ${isMobile && "text-center"}`}
    >
      <Header
        list={list}
        needs={needs.length}
        haves={haves.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-l from-gray-950 bg-black"
            : "bg-white bg-gradient-to-l from-gray-50"
        } pt-3 overflow-x-hidden flex justify-around flex-wrap gap-0 relative`}
      >
        <aside
          className={`${
            darkMode
              ? "bg-gradient-to-r from-gray-950 md:from-black bg-black"
              : "bg-white"
          } aside-left`}
        >
          <ArrowButtonsNav darkMode={darkMode} />
          {showSideNav && (
            <div
              className={`${
                darkMode ? "bg-gradient-to-r bg-black to-gray-950" : "bg-white"
              } bg-opacity-50 click-away fixed top-0 right-0 h-screen w-screen z-40 filter`}
              onClick={() => {
                setShowSideNav(false);
                if (sound) {
                  playSFXAudio(slideOutInSFXAudio);
                  setTimeout(() => {
                    slideOutInSFXAudio.pause();
                    slideOutInSFXAudio.currentTime = 3.5;
                  }, 600);
                }
              }}
            ></div>
          )}
          <div
            className={`z-50 fixed -top-2 ${
              showSideNav ? "-right-0" : "-right-1"
            } w-[50px] h-[50px]
        sm:hidden overflow-clip`}
          >
            <MenuButton
              showSideNav={showSideNav}
              setShowSideNav={setShowSideNav}
              darkMode={darkMode}
            />
          </div>
          <Sidenav
            items={items.length}
            setShowAddItem={setShowAddItem}
            showSideNav={showSideNav}
            setShowSideNav={setShowSideNav}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </aside>
        <Main
          list={list}
          items={items}
          needs={needs}
          haves={haves}
          setList={setList}
          filter={filter}
          setFilter={setFilter}
          handleChangeFilter={handleChangeFilter}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          handleAdd={handleAdd}
          showAddItem={showAddItem}
          setShowAddItem={setShowAddItem}
          handleChangeList={handleChangeList}
          handleReset={handleReset}
          handleClear={handleClear}
          darkMode={darkMode}
        />
        <AsideRight darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
      {createPortal(
        <InfoModal
          info={state.info}
          setInfo={setInfo}
          darkMode={darkMode}
          text={"Sounds are now " + (!sound ? "muted" : "unmuted")}
        />,
        document.body
      )}
    </div>
  );
}

export default App;
