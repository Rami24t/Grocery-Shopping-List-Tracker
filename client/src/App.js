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
  // mouseClickSFXAudio,
} from "./utils/sfx";

function App() {
  const { dispatch } = React.useContext(Context);
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
    if (value.length > filter.length) {
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
    document.title = `🛒📋Gr.Shop.List | 📱🧾🛍️🧺`;
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
    if (item.need && needs.length === 1) {
      playSFXAudio(finishSFXAudio);
    } else if (!item.need && haves.length === 1) {
      playSFXAudio(clearSFXAudio);
    }
    playSFXAudio(deleteSFXAudio);
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
    refreshItems();
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

  function handleAdd(e) {
    handleChangeFilter("");
    const value = e.target.value.trim();
    if (value === "" || items.find((i) => i.name === value)) {
      e.target.value = "";
      if (value !== "") {
        playSFXAudio(addDeniedSFXAudio);
      }
      return;
    }
    playSFXAudio(addSFXAudio1);
    // items.push({
    //   id: items.length + 1,
    //   name: value,
    //   need: true,
    // });
    // items.sort((a, b) => a.name.localeCompare(b.name));
    // setItems([...items]);
    const updatedItems = [
      ...items,
      {
        id: items.length + 1,
        name: value,
        need: true,
      },
    ].sort((a, b) => a.name.localeCompare(b.name));
    setItems(updatedItems);
    e.target.value = "";
    // state.setShowItems(true);
    dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds: true } });
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
    playSFXAudio(resetSFXAudio);
  }

  function handleClear() {
    // const isSure = window.confirm("Are you sure you want to delete all items?");
    // if (!isSure) return;
    setItems([]);
    handleSave([]);
    setFilter("");
    playSFXAudio(
      resetOrClearFilterSFXAudio,
      wrongFilterSFXAudio,
      openCloseAddFormSFXAudio
    );
  }

  useEffect(() => {
    if (
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort()) ||
      !items
    )
      return;
    handleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const { needs, haves } = getLists(items);

  return (
    <div
      id="app"
      className={`app-container ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-800"
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
          darkMode ? "bg-gray-950" : "bg-white"
        } overflow-x-hidden flex justify-around flex-wrap gap-0 relative`}
      >
        <aside className={`${
          darkMode ? "bg-gray-950" : "bg-white"} aside-left`}>
          <ArrowButtonsNav darkMode={darkMode} />
          {showSideNav && (
            <div
              className={`${
                darkMode ? "bg-gray-950" : "bg-white"
              } bg-opacity-50 click-away fixed top-0 right-0 h-screen w-screen z-40 filter`}
              onClick={() => {
                setShowSideNav(false);
                playSFXAudio(slideOutInSFXAudio);
                setTimeout(() => {
                  slideOutInSFXAudio.pause();
                  slideOutInSFXAudio.currentTime = 3.5;
                }, 600);
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
    </div>
  );
}

export default App;
