import React, { useState, useEffect } from "react";
import { defaultItems } from "./defaultItems";
import Header from "./components/header/Header";
import Sidenav from "./components/aside-left/Sidenav";
import Main from "./components/main-div/Main";
import AsideRight from "./components/aside-right/AsideRight";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/aside-left/MenuButton";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [list, setList] = useState("1");
  useEffect(() => {
    setIsMobile(window.innerWidth <= 440);
    if (localStorage.getItem("lastVisitedList"))
      setList(localStorage.getItem("lastVisitedList"));
  }, []);

  function handleChangeList(e) {
    setList(e.target.value);
    localStorage.setItem("lastVisitedList", e.target.value);
  }
  const [showAddItem, setShowAddItem] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [filter, setFilter] = useState("");
  function handleChangeFilter(e) {
    e.preventDefault();
    if (e.target.value.trim() === "") setFilter("");
    else setFilter(e.target.value);
  }

  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    if (localStorage.getItem(`list${list}`))
      setItems(JSON.parse(localStorage.getItem(`list${list}`)));
    else setItems(defaultItems);
    document.title = `Grocery 🛒 | List ${list}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  // const handleSave = useCallback(
  //   (updatedItems) => {
  //     localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
  //   },
  //   [items, list]
  // );
  function handleSave(updatedItems) {
    console.log(items, "saving items");
    localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
    console.log("save end");
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
      console.log("delete");
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
    console.log(item, update);
    for (let key in update) {
      item[key] = update[key];
    }
    console.log(item, update);
    refreshItems();
  }

  function handleAdd(e) {
    const value = e.target.value.trim();
    if (value === "" || items.find((i) => i.name === value)) {
      e.target.value = "";
      return;
    }
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
  }

  function handleReset() {
    setItems(defaultItems);
    handleSave(defaultItems);
  }

  function handleClear() {
    setItems([]);
    handleSave([]);
  }

  useEffect(() => {
    if (
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort()) ||
      !items
    )
      return;
    console.log(
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort())
    );
    handleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div
      id="app"
      className={`app-container bg-white dark:bg-gray-900 dark:text-white ${
        isMobile && "text-center"
      }`}
    >
      <Header list={list} items={items.length} />
      <div className="overflow-x-hidden bg-inherit flex justify-around flex-wrap gap-10 relative">
        <aside className="aside-left bg-inherit">
          <div
            className={`z-50 fixed top-0 ${
              showSideNav ? "left-48" : "right-0"
            } opacity-60 
        sm:hidden overflow-clip`}
          >
            <MenuButton
              showSideNav={showSideNav}
              setShowSideNav={setShowSideNav}
            />
          </div>
          <Sidenav
            items={items.length}
            setShowAddItem={setShowAddItem}
            showSideNav={showSideNav}
            setShowSideNav={setShowSideNav}
          />
        </aside>
        <Main
          list={list}
          items={items}
          setList={setList}
          filter={filter}
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
        />
        <AsideRight isMobile={isMobile} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
