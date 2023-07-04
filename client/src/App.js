import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BsPlusSquare, BsFillPlusSquareFill } from "react-icons/bs";
import "./App.css";
import Sidenav from "./components/Sidenav";

const defaultItems = [
  {
    id: 1,
    name: "Jogurt Grieschischer Art. 1x1 - Greek Yoghurt",
    need: true,
    category: "dairy",
  },
  {
    id: 2,
    name: "Jogurt Grieschischer Art. 1x4",
    need: false,
    category: "dairy",
  },
  {
    id: 3,
    name: "Kichererbsen - Chickpeas - حمّص",
    need: true,
    category: "legumes",
  },
  {
    id: 4,
    name: "Sprudelwasser - Sparkling Water - مياه غازية",
    need: false,
    category: "beverages",
  },
  {
    id: 5,
    name: "Toum - Garlic - Knoblauch - ثوم",
    need: true,
    category: "condiments",
  },
  {
    id: 6,
    name: "Mohren - Carrots - Karotten - جزر",
    need: false,
    category: "vegetables",
  },
  {
    id: 7,
    name: "Cucumber - Gurke - خيار",
    need: true,
    category: "vegetables",
  },
  {
    id: 8,
    name: "Tomaten - Tomatoes - طماطم",
    need: false,
    category: "vegetables",
  },
  {
    id: 9,
    name: "Coconut Milk - Kokosmilch - حليب جوز الهند",
    need: true,
    category: "dairy",
  },
  { id: 10, name: "Eggs - Eier - بيض", need: false, category: "dairy" },
  {
    id: 11,
    name: "Peanuts - Erdnüsse - فول سوداني",
    need: true,
    category: "nuts",
  },
  { id: 12, name: "Walnuss - Walnut - جوز", need: false, category: "nuts" },
  { id: 13, name: "Pecan", need: true, category: "nuts" },
  {
    id: 14,
    name: "Creme Fraiche - Cream - قشطة",
    need: false,
    category: "dairy",
  },
  { id: 15, name: "Berries - Beeren - توت", need: true, category: "fruits" },
  { id: 16, name: "Lettuce - Salat - خس", need: false, category: "vegetables" },
  {
    id: 17,
    name: "Kale - Grünkohl - كرنب",
    need: true,
    category: "vegetables",
  },
  {
    id: 18,
    name: "Celery - Sellerie - كرفس",
    need: false,
    category: "vegetables",
  },
  {
    id: 19,
    name: "Eggplant - Aubergine - باذنجان",
    need: true,
    category: "vegetables",
  },
  {
    id: 20,
    name: "Mushroom - Pilz - فطر",
    need: false,
    category: "vegetables",
  },
  { id: 21, name: "Okra - بامية", need: true, category: "vegetables" },
  { id: 22, name: "Zucchini - كوسى", need: false, category: "vegetables" },
  {
    id: 23,
    name: "Ripe Avocado - Reife Avocado - الأفوكادو الناضج",
    need: true,
    category: "fruits",
  },
  {
    id: 241,
    name: "Zitronen/Lime - Zitronen/Limette",
    need: false,
    category: "fruits",
  },
  { id: 242, name: "Broccoli", need: false, category: "vegetables" },
  { id: 243, name: "Spinach - سبانخ", need: false, category: "vegetables" },
  { id: 244, name: "Bell Pepper - فلفل", need: false, category: "vegetables" },
  {
    id: 257,
    name: "Radieschen - Radishes - فجل",
    need: true,
    category: "vegetables",
  },
  { id: 26, name: "Minze - Mint - نعناع", need: false, category: "herbs" },
  { id: 27, name: "Tofu", need: true, category: "vegetarian" },
  {
    id: 28,
    name: "Parsley - Petersilie - بقدونس",
    need: false,
    category: "herbs",
  },
  {
    id: 29,
    name: "Zwiebeln - Onions - بصل",
    need: true,
    category: "vegetables",
  },
  { id: 30, name: "Thymien - Thyme - زعتر", need: false, category: "herbs" },
  {
    id: 31,
    name: "Oliven - Olives - زيتون",
    need: true,
    category: "condiments",
  },
  { id: 32, name: "Brussel Sprouts", need: false, category: "vegetables" },
  {
    id: 33,
    name: "Extra Virgin Olive Oil - Olivenöl -زيت الزيتون ",
    need: true,
    category: "condiments",
  },
  {
    id: 34,
    name: "Coconut Oil - Kokosöl - زيت جوز الهند",
    need: false,
    category: "condiments",
  },
  { id: 35, name: "Butter - زبدة", need: true, category: "dairy" },
  { id: 37, name: "Ghee - سمن", need: true, category: "dairy" },
  {
    id: 38,
    name: "Frischkäse - Cream Cheese - لبنة ",
    need: false,
    category: "dairy",
  },
  { id: 39, name: "Nuts - مكسرات", need: true, category: "nuts" },
  { id: 40, name: "Seeds - Samen - بذور", need: false, category: "nuts" },
  {
    id: 41,
    name: "Macademia Nuts - Macadamia-Nüsse - جوز مكاداميا",
    need: true,
    category: "nuts",
  },
  {
    id: 42,
    name: "Pecan - Pekannuss - جوز البقان",
    need: false,
    category: "nuts",
  },
  { id: 43, name: "Walnut - Walnuss - جوز", need: true, category: "nuts" },
  {
    id: 44,
    name: "Chia Seeds - Chia Samen - بذور الشيا",
    need: false,
    category: "seeds",
  },
  {
    id: 45,
    name: "Flax Seeds - Leinsamen - بذور الكتان",
    need: true,
    category: "seeds",
  },
  {
    id: 46,
    name: "Hemp Seeds - Hanfsamen - بذور القنب",
    need: false,
    category: "seeds",
  },
  {
    id: 47,
    name: "Pumpkin Seeds - Kürbiskerne - بذور اليقطين",
    need: true,
    category: "seeds",
  },
  {
    id: 48,
    name: "Hot Sauce - Würzsaucen: Scharfe Soße - صلصة حارة",
    need: false,
    category: "condiments",
  },
  {
    id: 49,
    name: "Homemade Mayo - Selbstgemachte Mayo - مايونيز منزلية",
    need: true,
    category: "condiments",
  },
  {
    id: 50,
    name: "Coffee - Kaffee - قهوة",
    need: false,
    category: "beverages",
  },
  { id: 51, name: "Tea - Tee - شاي", need: true, category: "beverages" },
  {
    id: 53,
    name: "Cocoa - Kakao - كاكاو",
    need: true,
    category: "ingredients",
  },
  {
    id: 54,
    name: "Choc - Schokolade - شوكولاتة",
    need: false,
    category: "ingredients",
  },
  {
    id: 55,
    name: "Shredded Coconuts - Kokosraspeln - جوز الهند المبشور",
    need: true,
    category: "ingredients",
  },
  { id: 56, name: "Stevia - ستيفيا", need: false, category: "ingredients" },
  {
    id: 58,
    name: "Apple Cidar Vinegar - Apfelessig - خل التفاح",
    need: false,
    category: "condiments",
  },
  {
    id: 59,
    name: "White Vinegar - Weißer Essig - خل أبيض",
    need: true,
    category: "condiments",
  },
  { id: 60, name: "Water - Wasser - ماء", need: false, category: "beverages" },
  {
    id: 61,
    name: "Foul Moudammas - فول مدمس",
    need: true,
    category: "legumes",
  },
  {
    id: 62,
    name: "Bezer sagheer - Wassermelonen Samen - بذر بطيخ صغير",
    need: false,
    category: "seeds",
  },
  {
    id: 63,
    name: "Bzourat - Nüsse & Samen - مكسرات وبذور",
    need: true,
    category: "nuts",
  },
  { id: 64, name: "Makdouss - مكدوس", need: false, category: "pickled" },
  { id: 65, name: "Pickles - كبيس", need: true, category: "pickled" },
  { id: 66, name: "Peperroni - حر", need: false, category: "condiments" },
  {
    id: 67,
    name: "Rose Water - Ma'Ward - ماء ",
    need: true,
    category: "condiments",
  },
  {
    id: 68,
    name: "Nutritional Yeast - Nährhefe - خميرة غذائية",
    need: false,
    category: "condiments",
  },
  { id: 69, name: "Spices", need: true, category: "condiments" },
  {
    id: 70,
    name: "Greeny Leaves and Herbs - Grünzeug und Kräuter - أوراق خضراء وأعشاب",
    need: false,
    category: "herbs",
  },
  { id: 71, name: "Mate Tea - متّه", need: true, category: "beverages" },
  {
    id: 72,
    name: "Pipori (big-red) - بيبوري (أحمر كبير)",
    need: false,
    category: "tea",
  },
  { id: 73, name: "Falafel - فلافل", need: true, category: "vegetarian" },
];

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
    if (e.target.value === "") setFilter("");
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
        <AddItems handleAdd={handleAdd} />}
        <br />
        {FilterSection(filter, handleChangeFilter, items)}
        <Lists
          // list={list} items={items} filter={filter} validate={validate} updateItem={updateItem} handleDelete={handleDelete} handleToggle={handleToggle}
        />
      </main>
    );
  }
}

export default App;

function AddItems({handleAdd}) {
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

function FilterSection(filter, handleChangeFilter, items) {
  return (
    <section className="relative w-96 mx-auto my-1 text-center">
      <label htmlFor="simple-search" className="sr-only">
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
        required
      />
    </section>
  );
}

function AsideRight() {
  function AsideImage({ src }) {
    return (
      <div className="img w-[47%] lg:w-full">
        <img className="rounded-lg" src={src} alt="placeholder" />
      </div>
    );
  }
  
  return (
    <aside className="flex lg:max-w-[25%] flex-wrap gap-2 content-around justify-center text-center p-2 z-50 relative">
      <AsideImage src="/assets/deco-imgs/deco8.jpg" />
      <AsideImage src="/assets/deco-imgs/deco3.jpg" />
      <AsideImage src="/assets/deco-imgs/deco2.jpg" />
      <AsideImage src="/assets/deco-imgs/deco11.jpg" />
    </aside>
  );
}