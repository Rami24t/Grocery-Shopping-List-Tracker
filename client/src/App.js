import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [list, setList] = useState("1");

  const handleChangeList = (e) => {
    setList(e.target.value);
  };

  useEffect(() => {
    // console.log("useEffect");
    // console.log(list);
    if(localStorage.getItem("list" + list))
      setItems(JSON.parse(localStorage.getItem("list" + list)));
    else setItems([]);
  }, [list]);

  const [items, setItems] = useState([
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
  ]);

  const handleSave = (e) => {
    localStorage.setItem("list" + list, JSON.stringify(items));
    // console.log("save");
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
    handleSave();
    // console.log("delete");
  };

  const handleToggle = (item) => {
    item.need = !item.need;
    setItems([...items]);
    handleSave();
    // console.log("toggle");
  };

  const handleAdd = (e) => {
    if (e.target.value === "") return     e.target.value = "";
    if(items.find((i) => i.name === e.target.value)) return e.target.value = "";
    items.push({
      id: items.length + 1,
      name: e.target.value,
      need: true,
    });
    items.sort((a, b) => a.name.localeCompare(b.name));
    setItems([...items]);
    e.target.value = "";
    handleSave();
    // console.log("add");
  };

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
          <input type="text" name="new-item" placeholder="New Item" onBlur={handleAdd} /> <button>+</button>
          <br />
          <h3>Needed</h3>
          <ul>
            {items.map(
              (item) =>
                item.need && (
                  <Item
                    key={item.id}
                    item={item}
                    handleSave={handleSave}
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
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                  />
                )
            )}
          </ul>
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
