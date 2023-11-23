import { useState, useRef, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "./components/Context";
import useLocalStorage from "./hooks/useLocalStorage";
import { defaultItems } from "./data/defaultItems";
import {
  addSFXAudio1,
  addSFXAudio2,
  addDeniedSFXAudio,
  haveSFXAudio,
  resetSFXAudio,
  buttonClickSFXAudio2,
  deleteSFXAudio,
  slideOutSFXAudio,
  resetOrClearFilterSFXAudio,
  clearSFXAudio,
  finishSFXAudio,
  typeSFXAudio,
  wrongFilterSFXAudio,
  openCloseAddFormSFXAudio,
  playSFXAudio,
  menuButtonClickAudio,
} from "./assets/sfx";
import { getLists } from "./utils/getLists";
import Header from "./components/Header";
import { MenuButton, ArrowButtonsNav } from "./components/Sidenav";
import Sidenav from "./components/Sidenav";
import Main from "./components/main-div/Main";
import AsideRight from "./components/AsideRight";
import Footer from "./components/Footer";
import InfoModal from "./components/infoModal/InfoModal";
import { appText } from "./data/text";

function App() {
  // Read sound and info from Context
  const { state, dispatch } = useContext(Context);
  const { sound, language } = state?.settings;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  const rtlAlignment = language === 2;

  const text = {
    info: {
      deleted: appText.INFO_DELETED[language],
      checked: appText.INFO_CHECKED[language],
      unchecked: appText.INFO_UNCHECKED[language],
      alreadyExists: appText.INFO_ALREADY_EXISTS[language],
      added: appText.INFO_ADDED[language],
      reset: appText.INFO_RESET[language],
      cleared: appText.INFO_CLEARED[language],
      undo: {
        update: appText.INFO_UNDO_UPDATE[language],
        delete: appText.INFO_UNDO_DELETE[language],
        add: appText.INFO_UNDO_ADD[language],
        reset: appText.INFO_UNDO_RESET[language],
        clear: appText.INFO_UNDO_CLEAR[language],
        check: appText.INFO_UNDO_CHECK[language],
        uncheck: appText.INFO_UNDO_UNCHECK[language],
      },
    },
    item: appText.ITEM[language],
    // docTitle: appText.DOC_TITLE[language],
  };

  // Dark Mode useState
  const [darkMode, setDarkMode] = useState(true);

  // isMobile - logic replaced by TailwindCSS responsive classes - disabled
  // const [isMobile, setIsMobile] = useState(false); - disabled

  // Before implementing useLocalStorage hook - disabled
  // MultiLists feature - temporary disabled
  // const [list, setList] = useState(
  //   localStorage.getItem("lastVisitedList") || "1"
  // );

  // After implementing useLocalStorage hook
  // MultiLists feature - temporary disabled
  const [list, setList] = useLocalStorage("lastVisitedList", 1);

  // First loading useEffect / initial render useEffect
  useEffect(() => {
    // const MOBILE_MAX_WIDTH = 440; - disabled
    //   setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH); - disabled
    // Before implementing useLocalStorage hook - disabled
    // if (localStorage.getItem("lastVisitedList"))
    //   setList(localStorage.getItem("lastVisitedList"));
    // else setList("1");

    // An IIFE(self calling function) that sets the starting light mode color theme according to the time(hour) of the day
    let timeout;
    (function (startHour, endHour) {
      const currentHour = new Date().getHours();
      timeout = setTimeout(() => {
        setDarkMode(!(currentHour >= startHour && currentHour <= endHour));
      }, 2500);
    })(8, 16);
    //We mute sounds at first to avoid warnings from browsers. We expect the user to turn on the sound manually -- enabled
    // Or we turn it on automatically after 8 seconds -- disabled
    //   const soundOnTimeOut = setTimeout(() => {
    //   dispatch({ type: "TOGGLE_SOUND" });
    //   }, 8000);
    //   return () => clearTimeout(soundOnTimeOut); // Clear the timeout if the component unmounts

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);

  // useEffect to set the document language and title
  useEffect(() => {
    // set html lang attribute dynamically according to the language state
    document.documentElement.lang = ["en", "de", "ar"][language];
    // document.title = `🛒📋Gr.Shop.List🧾📱`;
    document.title = appText.DOC_TITLE[language];
  }, [language]);

  // Multilist feature - temporary disabled
  function handleChangeList(e) {
    if (e.target.validity.valid) {
      setList(e.target.value);
      // before implementing useLocalStorage hook - disabled
      // localStorage.setItem("lastVisitedList", e.target.value);
    }
  }

  // useState to show/hide the AddItem form component
  const [showAddItem, setShowAddItem] = useState(false);
  // useState to show/hide the SideNav menu component
  const [showSideNav, setShowSideNav] = useState(false);

  // Filter ----------------------------------------------------------
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
  // --------------------------------------------------------------

  // Before implementing useLocalStorage hook - disabled
  // useState of all the 'items' of the list array - get the items from localStorage or use the defaultItems array if localStorage is empty
  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem(`list${list}`)) || defaultItems
  // );
  // useLocalStorage for all the 'items' of the list array - get the items from localStorage or use the defaultItems array if localStorage is empty
  const [items, setItems, resetItems] = useLocalStorage(
    `list${list}`,
    defaultItems
  );
  const undoArrayRef = useRef([[0]]);

  /*
  // useEffect to load a list of items from persistant localStorage to the items state (when the app first loads or when the list changes)
  useEffect(
    () => {
      // Before implementing useLocalStorage hook - disabled
      // if (localStorage.getItem(`list${list}`))
      //   setItems(JSON.parse(localStorage.getItem(`list${list}`)));

      // document.title = `Grocery 🛒 | List ${list}`;
      // document.title = `🛒📋Gr.Shop.List🧾📱`;
    },
    [
      // MultiLists feature - temporary disabled
      // list
    ]
  );
  */

  // const handleSave = useCallback(
  //   (updatedItems) => {
  //     localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
  //   },
  //   [items, list]
  // );
  // Saves the list of all items to localStorage

  // Main Section --------------------------------------------

  // before implementing useLocalStorage hook - disabled
  // saves the list of items to persistent storage localStorage
  // function handleSave(updatedItems) {
  //   setItems(updatedItems || items);
  // }

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
    if (!items.find((i) => i.id === item.id)) return;
    const lastUndo = undoArrayRef.current[undoArrayRef.current.length - 1];
    if (
      !Array.isArray(lastUndo) ||
      JSON.stringify(lastUndo.sort()) !== JSON.stringify(items.sort())
    )
      undoArrayRef.current.push([...items]);
    // play relevant SFX audio if sound is on
    if (sound) {
      if (item.need && needs.length === 1) {
        playSFXAudio(finishSFXAudio);
      } else if (!item.need && haves.length === 1) {
        playSFXAudio(clearSFXAudio);
      }
      playSFXAudio(deleteSFXAudio);
    }
    setTimeout(() => {
      // show an info message notification
      // setInfo(
      //   `${item.name.match(
      //     /[^.]*?\s*\S{2,}\s*[^.]*?\s*\S{2,}[^.]*?/
      //   )}... deleted`
      // );
      setInfo(
        `${item.name.match(/[^.]*?\s*\S{2,}\s*[^.]*?\s*\S{2,}[^.]*?/)}... ${
          text.info.deleted
        }`
      ); // setInfo(`${item.name.match(/.*?[\w]+/)}... deleted`);
      // set the items state to a new array of items without the deleted item
      setItems((prevItems) => {
        const updatedItems = prevItems.filter((i) => i.id !== item.id);
        // handleSave(updatedItems);
        return updatedItems;
      });
    }, 100);
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
    // if (!items.find((i) => i.id === item.id)) return;
    const lastUndo = undoArrayRef.current[undoArrayRef.current.length - 1];
    if (
      Array.isArray(lastUndo) ||
      JSON.stringify(item) !== JSON.stringify(lastUndo)
    )
      undoArrayRef.current.push({ ...item });
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
          item.need ? text.info.unchecked : text.info.checked
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
  function updateItem(item, update, isUndo = false) {
    !isUndo && undoArrayRef.current.push({ ...item });
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
      if (value !== "") {
        sound && playSFXAudio(addDeniedSFXAudio);
        setInfo(
          `${rtlAlignment ? "!" : text.item} ${value.slice(0, 10)} ${
            text.info.alreadyExists
          }`
        );
      }
      return;
    } else {
      sound && playSFXAudio(addSFXAudio1);
      setInfo(
        `${!rtlAlignment ? `${text.item} ` : ""}${value.slice(0, 10)}... ${
          text.info.added
        }`
      );
      const updatedItems = [
        {
          id: "RAGSL-" + (items.length + 1) + Date.now(),
          name: value,
          need: true,
        },
        ...items,
      ];
      // .sort((a, b) => a.name.localeCompare(b.name));
      const lastUndo = undoArrayRef.current[undoArrayRef.current.length - 1];
      if (
        !Array.isArray(lastUndo) ||
        JSON.stringify(lastUndo.sort()) !== JSON.stringify(updatedItems.sort())
      )
        undoArrayRef.current.push([...items]);
      setItems([...updatedItems]);
      dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds: true } });
    }
  }

  // resets the items state in the current list to the default list, saves, clears the filter, hides the add item form, shows the items (needs and haves) lists and plays the relevant SFX audio(if the sound is on) and shows an info message notification
  function handleReset() {
    // before implementing useLocalStorage hook - disabled
    // setItems(defaultItems);
    // handleSave(defaultItems);
    // after implementing useLocalStorage hook
    resetItems(defaultItems);

    setFilter("");
    setShowAddItem(false);
    // state.setShowItems(true,true);
    dispatch({
      type: "SET_SHOW_ITEMS",
      payload: { showNeeds: true, showHaves: true },
    });
    sound && playSFXAudio(resetSFXAudio);
    setInfo(text.info.reset);
  }

  // undoes the last change made to the list of items
  function handleUndo() {
    const undoArrayLength = undoArrayRef.current.length;
    if (undoArrayLength <= 1) return;
    let info = "";
    const lastUndo = undoArrayRef.current[undoArrayLength - 1];
    if (!Array.isArray(lastUndo)) {
      // undo update
      const foundItem = items[items.findIndex((el) => el.id === lastUndo.id)];
      info =
        foundItem.name !== lastUndo.name
          ? text.info.undo.update
          : lastUndo.need
          ? text.info.undo.check
          : text.info.undo.uncheck;
      updateItem(foundItem, { ...lastUndo }, true);
    } else {
      // undo delete/add/reset/clear
      info =
        items.length === 0
          ? text.info.undo.clear
          : items === defaultItems
          ? text.info.undo.reset
          : items.length < lastUndo.length
          ? text.info.undo.delete
          : text.info.undo.add;
      setItems(lastUndo);
    }
    undoArrayRef.current.length = undoArrayLength - 1;
    setInfo(info);
    sound && playSFXAudio(menuButtonClickAudio);
  }

  // clears the items state in the current list, saves, clears the filter, plays the relevant SFX audio(if sound is on) and shows an info message notification
  function handleClear() {
    const lastUndo = undoArrayRef.current[undoArrayRef.current.length - 1];
    if (
      !Array.isArray(lastUndo) ||
      JSON.stringify(lastUndo.sort()) !== JSON.stringify(items.sort())
    )
      undoArrayRef.current.push([...items]);
    setItems([]);
    // before implementing useLocalStorage hook - disabled
    // handleSave([]);
    setFilter("");
    sound &&
      playSFXAudio(
        resetOrClearFilterSFXAudio,
        wrongFilterSFXAudio,
        openCloseAddFormSFXAudio
      );
    setInfo(text.info.cleared);
  }

  /*
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
  */

  // use the getLists function to get the needs and haves lists given the items array state.
  const { needs, haves } = getLists(items);
  // ----------------------------------------------------------------------------------------

  // App Styles ---------------------------------------------------------------------------------
  const appContainerStyle = `app-container ${
    darkMode
      ? "text-white bg-black bg-gradient-to-l from-gray-950"
      : "text-amber-800 bg-yellow-50 bg-gradient-to-r from-yellow-100"
  }`;
  const middleContainerStyle = `${
    darkMode
      ? "bg-black bg-gradient-to-l from-gray-950 border-red-950"
      : "bg-yellow-50 bg-gradient-to-r from-yellow-100 border-red-100"
  } pt-5 pb-7 border-b border-t overflow-x-hidden flex justify-around flex-wrap gap-0 relative`;
  const asideLeftStyle = `rounded-lg ${
    darkMode
      ? "bg-black bg-gradient-to-r from-gray-950 md:from-black"
      : "bg-yellow-100"
  }`;
  const menuButtonContainerStyle = `z-50 fixed -top-2 ${
    showSideNav ? "-right-0" : "-right-1"
  } w-[50px] h-[50px] sm:hidden overflow-clip`;
  const clickAwayStyle = `${
    darkMode ? "bg-black bg-gradient-to-r to-gray-950" : "bg-yellow-50"
  } bg-opacity-50 fixed top-0 right-0 h-screen w-screen z-40 filter`;
  // -----------------------------------------------------------------------------------------------

  // JSX and return statement for the App component - The app has header, main and footer.
  const header = (
    <Header
      {...{
        list,
        needs: needs.length,
        haves: haves.length,
        darkMode,
        setDarkMode,
      }}
    />
  );
  const asideLeft = (
    <aside className={asideLeftStyle}>
      <ArrowButtonsNav darkMode={darkMode} />
      {showSideNav && (
        <div
          className={clickAwayStyle}
          onClick={() => {
            setShowSideNav(false);
            setInfo("");
            if (sound) playSFXAudio(slideOutSFXAudio);
          }}
        ></div>
      )}
      <div className={menuButtonContainerStyle}>
        <MenuButton
          {...{
            showSideNav,
            setShowSideNav,
            darkMode,
          }}
        />
      </div>
      <Sidenav
        {...{
          items: items.length,
          setShowAddItem,
          showSideNav,
          setShowSideNav,
          darkMode,
          setDarkMode,
        }}
      />
    </aside>
  );
  const main = (
    <Main
      {...{
        list,
        items,
        needs,
        haves,
        setList,
        filter,
        setFilter,
        handleChangeFilter,
        disableUndoBtn: undoArrayRef.current.length <= 1,
        handleDelete,
        handleUndo,
        handleToggle,
        updateItem,
        handleAdd,
        showAddItem,
        setShowAddItem,
        handleChangeList,
        handleReset,
        handleClear,
        darkMode,
      }}
    />
  );
  const asideRight = <AsideRight darkMode={darkMode} />;
  const footer = <Footer darkMode={darkMode} />;
  const infoModal = createPortal(
    <InfoModal
      {...{
        info: state?.info,
        setInfo,
        darkMode,
      }}
    />,
    document.body
  );

  // const HTML_LANGS = ["en", "de", "ar"]; ...lang={HTML_LANGS[language]}...
  // JSX and return statement for the App component - The app has header, main and footer.
  return (
    <div id="app" className={appContainerStyle}>
      {header}
      <div className={middleContainerStyle}>
        {asideLeft}
        {main}
        {asideRight}
      </div>
      {footer}
      {infoModal}
    </div>
  );
}

export default App;
