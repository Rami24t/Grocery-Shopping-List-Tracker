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
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
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
          <input
            type="text"
            name="new-item"
            placeholder="New Item"
            onBlur={handleAdd}
          />
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
