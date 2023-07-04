import React, { useState, useEffect} from "react";
import { defaultItems } from "./defaultItems";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main/Main";
import { AsideRight } from "./components/AsideRight";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [list, setList] = useState("1");
  useEffect(() => {
    setIsMobile(window.innerWidth <= 440);
  }, []);
  
  function handleChangeList(e) {
    setList(e.target.value);
  }
  const [showAddItem, setShowAddItem] = useState(false);
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
    // else setItems([]);
    else setItems(defaultItems);
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
      className={`app-container bg-white dark:bg-gray-900 dark:text-white ${
        isMobile && "text-center"
      }`}
    >
      <Header list={list} items={items.length} />
      <div className="flex justify-between flex-wrap relative">
        <aside className="aside-left">
          <Sidenav items={items.length} />
        </aside>
        <Main list={list} items={items} setList={setList} 
        filter={filter} handleChangeFilter={handleChangeFilter}
        handleDelete={handleDelete} handleToggle={handleToggle} updateItem={updateItem}
        handleAdd={handleAdd} showAddItem={showAddItem} setShowAddItem={setShowAddItem}
        handleChangeList={handleChangeList}
        />
        <AsideRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
