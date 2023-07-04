import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BsPlusSquare, BsFillPlusSquareFill } from "react-icons/bs";
import "./App.css";
import Sidenav from "./components/Sidenav";
import { AsideRight } from "./components/AsideRight";
import { defaultItems } from "./defaultItems";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 440);
  }, []);

  const [list, setList] = useState("1");
  function handleChangeList(e) {
    setList(e.target.value);
  }
  const [filter, setFilter] = useState("");
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
  function handleChangeFilter(e) {
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
        <Main />
        <AsideRight />
      </div>
      <Footer />
    </div>
  );

  function Main() {
    function MainHeader() {
      function AddItemsButton({ showAddItem, setShowAddItem }) {
        return (
          <button
            onClick={() => setShowAddItem(!showAddItem)}
            className={`inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg
          ${
            !showAddItem
              ? "bg-indigo-700  hover:bg-indigo-600"
              : "bg-red-800  hover:bg-red-700"
          } px-3 py-2 text-xs font-medium text-slate-200 transition focus:outline-none focus:ring
           hover:text-indigo-100
          `}
            type="button"
          >
            {showAddItem ? "Close " : "Add "}
            <div
              className={`transition-transform flex text-center items-center justify-center w-3 h-3 text-gray-800 dark:text-white ${
                showAddItem ? "rotate-90" : ""
              }`}
            >
              &gt;
            </div>
            {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {items.length || 0}{" "}
                </div> */}
          </button>
        );
      }
      
      return (
        <div className="flex flex-wrap items-center justify-around pt-2">
          <h2 className="text-center text-xl font-semibold ">
            Items in List
            <input
              className="inline-block m-2 p-1 w-10 text-xl font-semibold text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="number"
              min={1}
              value={list}
              onChange={handleChangeList}
              max={20}
              maxLength={2}
              readOnly={false}
              disabled={false}
            />
          </h2>
          <AddItemsButton
            showAddItem={showAddItem}
            setShowAddItem={setShowAddItem}
            items={items}
          />
        </div>
      );
    }
    function AddItems(
      // {handleAdd}
      ) {
      return (
        <section className="m-6 add-item ">
          <label
            htmlFor="new-item"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <h3 className="text-center text-lg">Add Items</h3>
          </label>
          <div className="flex justify-center items-center gap-0">
            <input
              name="new-item"
              placeholder="New Item"
              onBlur={handleAdd}
              type="text"
              id="new-item"
              className="inline-block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onKeyDown={(e) => e.key === "Enter" && handleAdd(e)}
            />
            <button
              className="inline-block p-2 text-center text-gray-500 hover:text-gray-900 dark:hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(e.currentTarget.previousSibling.focus());
              }}
            >
              {(
                <BsPlusSquare className="w-7 h-7 mx-auto text-gray-900 active:outline-none rounded-full border border-gray-200 hover:text-blue-700 active:z-10 active:ring-2 active:ring-gray-200 dark:active:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white" />
              ) || <BsFillPlusSquareFill /> ||
                "+"}
            </button>
          </div>
        </section>
      );
    }
    function FilterSection(
      // {filter, handleChangeFilter, items}
      ) {
      return (
        <section className="relative w-96 mx-auto my-1 text-center">
          <label htmlFor="filter" className="sr-only">
            Filter Items
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`Search ${items.length} Items`}
          />
        </section>
      );
    }
    function Lists() {
    // {items,filter,validate,updateItem,handleDelete,handleToggle,list,}
      return !items?.length ? (
        <p>List {list} is Empty!</p>
      ) : (
        <section>
          {items.find((item) => item.need) && NeedList()}
          {items.find((item) => !item.need) && HaveList()}
        </section>
      );

      function NeedList() {
        return (
          <article>
            <h3>Needed</h3>
            <ul>
              {items.map(
                (item) =>
                  item.need &&
                  (!filter || validate(item.name)) && (
                    <Item
                      key={item.id}
                      item={item}
                      updateItem={updateItem}
                      handleDelete={handleDelete}
                      handleToggle={handleToggle}
                    />
                  )
              )}
            </ul>
          </article>
        );
      }

      function HaveList() {
        return (
          <article>
            <h3>Have</h3>
            <ul className="w-full">
              {items.map(
                (item) =>
                  !item.need &&
                  (!filter || validate(item.name)) && (
                    <Item
                      key={item.id}
                      item={item}
                      updateItem={updateItem}
                      handleDelete={handleDelete}
                      handleToggle={handleToggle}
                    />
                  )
              )}
            </ul>
          </article>
        );
      }
    }
    return (
      <main className="min-w-[33%]">
        <MainHeader />
        {showAddItem && 
        <AddItems 
        // handleAdd={handleAdd}
        />}
        <br />
        <FilterSection
        // filter={filter} handleChangeFilter={handleChangeFilter} items={items}
        />
        <Lists
          // list={list} items={items} filter={filter} validate={validate} updateItem={updateItem} handleDelete={handleDelete} handleToggle={handleToggle}
        />
      </main>
    );
  }
}

export default App;
