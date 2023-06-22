import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BsPlusSquare, BsFillPlusSquareFill } from "react-icons/bs";

function App() {
  const isMobile = window.innerWidth <= 440;
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
    if (localStorage.getItem(`list${list}`))
      setItems(JSON.parse(localStorage.getItem(`list${list}`)));
    // else setItems([]);
    else setItems(defaultItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const handleSave = (updatedItems) => {
    console.log(items, "saving items");
    localStorage.setItem(`list${list}`, JSON.stringify(updatedItems || items));
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
  };
  const updateItem = (item, update) => {
    console.log(item, update);
    for (let key in update) {
      item[key] = update[key];
    }
    console.log(item, update);
    refreshItems();
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
  };


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
    <div className={`App bg-white dark:bg-gray-900 dark:text-white ${isMobile&&'text-center'}`}>
      {Header(items)}
      <main className="flex justify-between flex-wrap ">
        <aside className="asideLeft ">
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
              className="inline-block m-2 p-1 w-10 text-sm font-semibold text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
          <div className="mb-6">
            <label
              htmlFor="new-item"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add New Item
            </label>
            <input
              name="new-item"
              placeholder="New Item"
              onBlur={handleAdd}
              type="text"
              id="new-item"
              className="inline-block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button className="inline-block m-2 p-2 text-center text-gray-500 hover:text-gray-900 dark:hover:text-white" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            console.log(e.currentTarget.previousSibling.focus());
             }
            }
            >
              {<BsPlusSquare className="w-8 h-8 mx-auto text-gray-900 active:outline-none rounded-full border border-gray-200 hover:text-blue-700 active:z-10 active:ring-2 active:ring-gray-200 dark:active:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white"
              />
              || <BsFillPlusSquareFill />
              || "+"}
             </button>
          </div>
          
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
          <img src="https://via.placeholder.com/150x250" alt="placeholder" />
          <img src="https://via.placeholder.com/150x250" alt="placeholder" />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;