import React from 'react'
import Item from "../Item";
import { BsPlusSquare, BsFillPlusSquareFill } from "react-icons/bs";


function Main({list, filter, items, showAddItem, setShowAddItem
    , handleChangeList, handleChangeFilter, handleDelete, handleAdd, handleToggle, updateItem}) {
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
      {filter, handleChangeFilter, items}
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
        <article className="flex flex-col justify-around m-5 p-5">
        <h3 className="text-lg">List {list} is Empty!</h3>
        <p className="text-sm m-4">Add some Items to your list</p>
        </article>
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
          filter={filter} handleChangeFilter={handleChangeFilter} items={items}
        />
        <Lists
          // list={list} items={items} filter={filter} validate={validate} updateItem={updateItem} handleDelete={handleDelete} handleToggle={handleToggle}
        />
      </main>
    );
  }

export default Main