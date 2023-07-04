import React from "react";
import List from "./List";

function Lists({
  filter,
  items,
  handleDelete,
  handleToggle,
  updateItem,
  list,
  validate,
}) {
  const needs = items.filter((item) => item.need);
  const haves = items.filter((item) => !item.need);

  return !items?.length ? (
    <article className="flex flex-col justify-around m-5 p-5">
      <h3 className="text-lg">List {list} is Empty!</h3>
      <p className="text-sm m-4">Add some items to your list.</p>
    </article>
  ) : (
    <section>
      {needs[0] && (
        <List
          title = "Needed"
          filter={filter}
          items={needs}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
        />
      )}
      {haves[0] && (
        <List
          title = "Have"
          filter={filter}
          items={haves}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
        />
      )}
    </section>
  );
}

export default Lists;
