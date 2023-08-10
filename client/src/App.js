import { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "./components/Context";
import { defaultItems } from "./data/defaultItems";
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
  // buttonClickSFXAudio,buttonSFXAudio,slideInSFXAudio,menuButtonClickAudio,switchSFXAudio,inputErrorSFXAudio,pencilCheckSFXAudio,
} from "./assets/sfx";
import { getLists } from "./utils/getLists";
import Header from "./components/header/Header";
import MenuButton from "./components/aside-left/MenuButton";
import Sidenav from "./components/aside-left/Sidenav";
import ArrowButtonsNav from "./components/aside-left/ArrowButtonsNav";
import Main from "./components/main-div/Main";
import AsideRight from "./components/aside-right/AsideRight";
import Footer from "./components/footer/Footer";
import InfoModal from "./components/infoModal/InfoModal";

function App() {
  // Read from Context
  const { state, dispatch } = useContext(Context);
  const sound = state?.settings?.sound;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });

  // Dark Mode
  const [darkMode, setDarkMode] = useState(true);

  // isMobile - logic replaced by TailwindCSS responsive classes - disabled
  // const [isMobile, setIsMobile] = useState(false); - disabled

  // MultiLists feature - temporary disabled
  const [list, setList] = useState(
    localStorage.getItem("lastVisitedList") || "1"
  );

  // First loading useEffect
  useEffect(() => {
    // const MOBILE_MAX_WIDTH = 440; - disabled
    //   setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH); - disabled
    if (localStorage.getItem("lastVisitedList"))
      setList(localStorage.getItem("lastVisitedList"));
    else setList("1");

    // An IIFE(self calling function) that sets the light mode color theme according to the time(hour) of the day -- feature development pending
    // (function (startHour, endHour) {
    //   const currentHour = new Date().getHours();
    //   setDarkMode(!(currentHour >= startHour && currentHour<= endHour));
    // })(8, 16);

    //We mute sounds at first to avoid warnings from browsers. We expect the user to turn on the sound manually -- enabled
    // Or we turn it on automatically after 8 seconds -- disabled
  //   const soundOnTimeOut = setTimeout(() => {
  //   dispatch({ type: "TOGGLE_SOUND" });
  //   }, 8000);
  //   return () => clearTimeout(soundOnTimeOut); // Clear the timeout if the component unmounts

  }, []);

  // Multilist feature - temporary disabled
  function handleChangeList(e) {
    if (e.target.validity.valid) {
      setList(e.target.value);
      localStorage.setItem("lastVisitedList", e.target.value);
    }
  }

  // useState to show/hide the AddItem form component
  const [showAddItem, setShowAddItem] = useState(false);
  // useState to show/hide the SideNav menu component
  const [showSideNav, setShowSideNav] = useState(false);

  // Filter --------------------------------------------
  // useState of the filter input value
  const [filter, setFilter] = useState("");

  // Filter onChange logic that updates the filter value
  function handleChangeFilter(value) {
    // play relevant SFX audio if sound is on and the filter value is longer than the previous one (typing)
    if (sound && value.length > filter.length) {
      playSFXAudio(typeSFXAudio);
    }
    // trim the value and if it's empty, keep the filter empty, otherwise update the filter value and show matching items
    if (value.trim() === "") setFilter("");
    else {
      setFilter(value);
      dispatch({
        type: "SET_SHOW_ITEMS",
        payload: { showNeeds: true, showHaves: true },
      });
    }
  }
  // --------------------------------------------

  // useState of all the 'items' of the list array - get the items from localStorage or use the defaultItems array if localStorage is empty
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(`list${list}`)) || defaultItems
  );

  // useEffect to load a list of items from persistant localStorage to the items state (when the app first loads or when the list changes)
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
  // Saves the list of all items to localStorage

  // Main Section --------------------------------------------
  // saves the list of items to persistent storage localStorage
  function handleSave(updatedItems) {
    localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
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

  // deletes an item from the list
  function handleDelete(item) {
    // play relevant SFX audio if sound is on
    if (sound) {
      if (item.need && needs.length === 1) {
        playSFXAudio(finishSFXAudio);
      } else if (!item.need && haves.length === 1) {
        playSFXAudio(clearSFXAudio);
      }
      playSFXAudio(deleteSFXAudio);
    }
    // show an info message notification
    setInfo(
      `${item.name.match(/[^.]*?\s*\S{2,}\s*[^.]*?\s*\S{2,}[^.]*?/)}... deleted`
    ); // setInfo(`${item.name.match(/.*?[\w]+/)}... deleted`);
    // set the items state to a new array of items without the deleted item
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((i) => i.id !== item.id);
      // handleSave(updatedItems);
      return updatedItems;
    });
  }

  // rerenders the items state to show the updated list of items (used after an item was updated or toggled)
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

  // toggles an item's need property (true/false) and updates the items array state
  function handleToggle(item) {
    // play relevant SFX audio if sound is on
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
    // toggle the item's need property
    item.need = !item.need;
    // Toggle item to/from (needs/haves) and show the info message notification
    setTimeout(() => {
      refreshItems();
      setInfo(
        `${item.name.match(/.*?[\w]+/)}... ${
          item.need ? "unchecked" : "checked"
        }`
      );
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

  // updates an item's properties given an item and an update object and updates the items array state to trigger a rerender
  function updateItem(item, update) {
    for (let key in update) {
      item[key] = update[key];
    }
    refreshItems();
  }

  // adds an item to the list and updates the items array state to trigger a rerender
  function handleAdd(value) {
    // clear the filter
    handleChangeFilter("");
    // if the item does not exist already and is not an empty string, add item to the list and show and sort the list alphabetically and make sure the needs list is shown - play the relevant SFX audio (if sound is on) and show an info message notification.
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

  // resets the items state in the current list to the default list, saves, clears the filter, hides the add item form, shows the items (needs and haves) lists and plays the relevant SFX audio(if the sound is on) and shows an info message notification
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
    setInfo("List is reset");
  }

  // clears the items state in the current list, saves, clears the filter, plays the relevant SFX audio(if sound is on) and shows an info message notification
  function handleClear() {
    setItems([]);
    handleSave([]);
    setFilter("");
    sound &&
      playSFXAudio(
        resetOrClearFilterSFXAudio,
        wrongFilterSFXAudio,
        openCloseAddFormSFXAudio
      );
    setInfo("List cleared");
  }

  // auto saves the list of items to to persistent storage(localStorage) after changes have been made if items exist and are not not the same as default ones.
  useEffect(() => {
    if (
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort()) ||
      !items
    )
      return;
    handleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // use the getLists function to get the needs and haves lists given the items array state.
  const { needs, haves } = getLists(items);
  // -------------------------------

  // JSX return statement for the App component - The app has header, main and footer.

  return (
    <div
      id="app"
      className={`app-container ${
        darkMode
          ? "text-white bg-black bg-gradient-to-l from-gray-950"
          : "text-gray-800 bg-white bg-gradient-to-l from-gray-50"
      }`}
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
            ? "bg-black bg-gradient-to-l from-gray-950"
            : "bg-white bg-gradient-to-l from-gray-50"
        } pt-3 overflow-x-hidden flex justify-around flex-wrap gap-0 relative`}
      >
        <aside
          className={`${
            darkMode
              ? "bg-black bg-gradient-to-r from-gray-950 md:from-black"
              : "bg-white"
          } aside-left`}
        >
          <ArrowButtonsNav darkMode={darkMode} />
          {showSideNav && (
            <div
              className={`click-away ${
                darkMode ? "bg-black bg-gradient-to-r to-gray-950" : "bg-white"
              } bg-opacity-50 fixed top-0 right-0 h-screen w-screen z-40 filter`}
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
        <InfoModal info={state?.info} setInfo={setInfo} darkMode={darkMode} />,
        document.body
      )}
    </div>
  );
}

export default App;
