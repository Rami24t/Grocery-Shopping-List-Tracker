import React from "react";
import List from "./List";

function Lists({
  filter,
  needs,
  haves,
  handleDelete,
  handleToggle,
  updateItem,
  list,
  validate,
  dark,
}) {
  return !needs?.length && !haves.length ? (
    <article id="list" className="flex flex-col justify-around m-5 p-5">
      <h3 className="text-lg">List {list} is Empty!</h3>
      <p className="text-sm m-4">Add some items to your list.</p>
    </article>
  ) : (
    <section id="list">
      {needs[0] && (
        <List
          title="Needed"
          filter={filter}
          items={needs}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
          dark={dark}
        />
      )}
      {haves[0] && (
        <List
          title="Have"
          filter={filter}
          items={haves}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
          dark={dark}
        />
      )}
    </section>
  );
}

export default Lists;
