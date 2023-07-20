import React, { useState, useEffect } from "react";
import { defaultItems } from "./defaultItems";
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
  correctOrAddSFXAudio,
  finishSFXAudio,
  completionSFXAudio,
  editClickSFXAudio,
  buttonClickSFXAudio,
  buttonClickSFXAudio2,
  buttonSFXAudio,
  menuOpenSFXAudio,
  slideInSFXAudio,
  linkClickSFXAudio,
  listCloseOpenSFXAudio,
  toBottomTopSFXAudio,
  menuButtonClickAudio,
  deleteSFXAudio,
  wrongFilterSFXAudio,
  wrongFilterSFXAudio2,
  openCloseAddFormSFXAudio,
  navLinkClickSFXAudio,
  slideOutInSFXAudio,
  clearSFXAudio,
  writingSFXAudio,
  openListorClearSFXAudio,
  typeSFXAudio,
  pencilCheckSFXAudio,
  mouseClickSFXAudio,
  resetOrClearFilterSFXAudio,
  inputErrorSFXAudio,
  errorSFXAudio,
} from "./utils/sfx";

function App() {
  const { dispatch } = React.useContext(Context);
  const [dark] = useState(true);
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
  function handleChangeFilter(e) {
    e.preventDefault();
    if (e.target.value.trim() === "") setFilter("");
    else {
      setFilter(e.target.value);
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
    document.title = `Grocery 🛒 | List ${list}`;
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
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((i) => i.id !== item.id);
      // handleSave(updatedItems);
      // console.log("delete");
      deleteSFXAudio.currentTime = 0;
      deleteSFXAudio.play();
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
      haveSFXAudio.currentTime = 0;
      haveSFXAudio.play();
      addSFXAudio2.currentTime = 0;
      addSFXAudio2.play();
      setTimeout(() => {
        haveSFXAudio.pause();
        haveSFXAudio.currentTime = 0;
      }, 600);
    } else {
      buttonClickSFXAudio2.currentTime = 0;
      buttonClickSFXAudio2.play();
      menuOpenSFXAudio.currentTime = 0;
      menuOpenSFXAudio.play();
      // setTimeout(() => {addSFXAudio2.pause();addSFXAudio2.currentTime = 0;}, 600);
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
    const value = e.target.value.trim();
    if (value === "" || items.find((i) => i.name === value)) {
      e.target.value = "";
      if(value !== "")
      {addDeniedSFXAudio.currentTime = 0
      addDeniedSFXAudio.play();}
      return;
    }
    addSFXAudio1.currentTime = 0;
    addSFXAudio1.play();
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
    resetSFXAudio.currentTime = 0;
    resetSFXAudio.play();
  }

  function handleClear() {
    // const isSure = window.confirm("Are you sure you want to delete all items?");
    // if (!isSure) return;
    setItems([]);
    handleSave([]);
    setFilter("");
    // setShowAddItem(true);

    // clearSFXAudio.play();
    // openListorClearSFXAudio.play();
    resetOrClearFilterSFXAudio.currentTime = 0;
    resetOrClearFilterSFXAudio.play();
    // openCloseAddFormSFXAudio.play();
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
        dark ? "bg-gray-950 text-white" : "bg-white"
      }  ${isMobile && "text-center"}`}
    >
      <Header
        list={list}
        needs={needs.length}
        haves={haves.length}
        dark={dark}
      />
      <div className="overflow-x-hidden bg-inherit flex justify-around flex-wrap gap-0 relative">
        <aside className="aside-left bg-inherit">
          <ArrowButtonsNav dark={dark} />
          {showSideNav && (
            <div
              className="click-away fixed top-0 right-0 h-screen w-screen z-40 filter bg-black bg-opacity-50"
              onClick={() => {
                setShowSideNav(false)
              slideOutInSFXAudio.currentTime = 0;
              slideOutInSFXAudio.play();
              setTimeout(() => {
                slideOutInSFXAudio.pause();
                slideOutInSFXAudio.currentTime = 3.5;
              }, 600);
              }
              }
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
              dark={dark}
            />
          </div>
          <Sidenav
            items={items.length}
            setShowAddItem={setShowAddItem}
            showSideNav={showSideNav}
            setShowSideNav={setShowSideNav}
            dark={dark}
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
          dark={dark}
        />
        <AsideRight isMobile={isMobile} dark={dark} />
      </div>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
