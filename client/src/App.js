import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [list, setList] = useState("1");

  const handleChangeList = (e) => {
    setList(e.target.value);
  };

  const defaultItems = [
    {
      id: 1,
      name: "Condensed Milk",
      need: false,
    },
    {
      id: 2,
      name: "Eier",
      need: true,
    },
    {
      id: 3,
      name: "Lettuce",
      need: false,
    },
    {
      id: 4,
      name: "Butter",
      need: false,
    },
    {
      id: 5,
      name: "Frischkäse",
      need: false,
    },
    {
      id: 6,
      name: "Tomaten",
      need: true,
    },
    {
      id: 7,
      name: "Onions",
      need: true,
    },
    {
      id: 8,
      name: "Garlic",
      need: false,
    },
  ];
  const [items, setItems] = useState(defaultItems);
  useEffect(() => {
    // console.log("useEffect");
    // console.log(list);
    if (localStorage.getItem("list" + list))
      setItems(JSON.parse(localStorage.getItem("list" + list)));
    // else setItems([]);
    else setItems(defaultItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const handleSave = (updatedItems) => {
    console.log(items, "saving items");
    localStorage.setItem("list" + list, JSON.stringify(updatedItems || items));
    console.log("save end");
  };

  const handleDelete = (item) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((i) => i.id !== item.id);
      // handleSave(updatedItems);
      console.log("delete");
      return updatedItems;
    });
  };

  const refreshItems = () => {
    setItems([...items]);
  };
  const handleToggle = (item) => {
    item.need = !item.need;
    refreshItems();
    // handleSave();
    // console.log("toggle");
  };
  const updateItem = (item, update) => {
    // item.name = updatedItem.name;
    console.log(item, update);
    // const item = items.find((i) => i.id === itemId);
    // item.name = update.name;
    for (let key in update) {
      item[key] = update[key];
    }
    console.log(item, update);
    refreshItems();
    // handleSave();
  };

  const handleAdd = (e) => {
    const value = e.target.value.trim();
    if (value === "" || items.find((i) => i.name === value)) {
      e.target.value = "";
      return;
    }
    items.push({
      id: items.length + 1,
      name: value,
      need: true,
    });
    items.sort((a, b) => a.name.localeCompare(b.name));
    setItems([...items]);
    e.target.value = "";
    // handleSave();
    // console.log("add");
  };

  useEffect(() => {
    if (
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort()) ||
      !items
    )
      return;
    console.log(
      JSON.stringify(items.sort()),
      JSON.stringify(defaultItems.sort())
    );
    console.log(
      JSON.stringify(items.sort()) === JSON.stringify(defaultItems.sort())
    );
    handleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className="App bg-white dark:bg-gray-900 dark:text-white">
      <header className="App-header">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold dark:text-white text-gray-900 sm:text-3xl">
                Grocery List
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">Let's do it! 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="relative block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                // "inline-flex items-center justify-center gap-1.5 rounded-lg border text-gray-500 hover:text-gray-700"
                type="button"
              >
                Add Items{" "}
                <svg
                  className="inline w-4 h-4 text-gray-800 dark:text-white"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                  />
                </svg>
                {/* <svg
                  className="inline-block w-4 h-4 text-gray-800 dark:text-white"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>*/}{" "}
                <svg
                  className={` inline-block w-4 h-4 text-gray-800 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>{" "}
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {items.length || 0}{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <aside>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/list">Edit List</a>
              </li>
              <li>
                <a href="/about">Add Item</a>
              </li>
              <li>
                <a href="/about">Display</a>
              </li>
              <li>
                <a href="/about">Settings</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section>
          <h2>
            Items in List
            <input
              type="number"
              min={1}
              value={list}
              onChange={(e) => {
                handleChangeList(e);
              }}
              max={20}
              maxLength={2}
              readOnly={false}
              disabled={false}
            />
          </h2>
          <div className="mb-6">
            <label
              htmlFor="new-item"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Item
            </label>
            <input
              name="new-item"
              placeholder="New Item"
              onBlur={handleAdd}
              type="text"
              id="new-item"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button>+</button>
          <br />
          {items.length === 0 ? (
            <p>List {list} is Empty!</p>
          ) : (
            <div>
              <h3>Needed</h3>
              <ul>
                {items.map(
                  (item) =>
                    item.need && (
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
              <h3>Have</h3>
              <ul>
                {items.map(
                  (item) =>
                    !item.need && (
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
            </div>
          )}
        </section>
        <aside>
          <img src="https://via.placeholder.com/150x350" alt="placeholder" />
          <img src="https://via.placeholder.com/150x350" alt="placeholder" />
        </aside>
      </main>
      <footer>
        <p>
          Created by
          <a href="https://www.linkedin.com/in/rami-al-saadi-16a14223a/">
            Rami Al-Saadi
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
