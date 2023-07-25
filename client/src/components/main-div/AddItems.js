import { memo } from "react";
import { BsPlusCircle } from "react-icons/bs";
import {
  writingSFXAudio,
  editClickSFXAudio,
  typeSFXAudio,
  playSFXAudio,
} from "../../utils/sfx";

function AddItems({ handleAdd, showAddItem, darkMode }) {
  const handleClick = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    e.currentTarget.previousSibling.focus();
  };

  const onEnter = (e) => e.key === "Enter" && handleBlur(e);

  const handleFocus = () => {
    playSFXAudio(editClickSFXAudio, writingSFXAudio);
  };

  const handleBlur = (e) => {
    writingSFXAudio.pause();
    handleAdd(e);
  };

  const handleChange = () => {
    playSFXAudio(typeSFXAudio);
  };

  return (
    <section
      className={`overflow-hidden transition-all duration-500 ${
        !showAddItem
          ? "w-0 h-0 p-0 border-0 scale-0 opacity-50"
          : "w-80 pl-3 pt-3 pb-5 shadow-sm mb-5 "
      } mt-4  mx-auto add-item border rounded-lg ${
        darkMode
          ? "bg-gray-950 border-gray-800 text-white"
          : "bg-gray-50 border-gray-300 text-gray-600"
      }  `}
    >
      <label
        htmlFor="new-item"
        className={`block mb-2 text-sm font-medium ${
          !darkMode ? "text-gray-800" : "text-white"
        } `}
      >
        <h3 className="text-center text-lg">Add Items</h3>
      </label>
      <div className="flex justify-center items-center gap-0">
        <input
          onChange={handleChange}
          name="new-item"
          placeholder="New Item"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          id="new-item"
          className={` ${
            darkMode
              ? "placeholder-gray-400 text-white border-gray-600 bg-gray-700 bg-opacity-70 "
              : "placeholder-gray-500 text-gray-800 border-gray-300 bg-white bg-opacity-70 "
          } inline-block p-4 border rounded-lg sm:text-md focus:ring-gray-500 focus:border-gray-400  `}
          onKeyDown={onEnter}
        />
        <button
          title="Add Item"
          className={`${darkMode?"hover:text-white":"hover:text-gray-900"} inline-block p-3 text-center text-gray-500`}
          onClick={handleClick}
        >
          {
            <BsPlusCircle
              className={`${
                darkMode
                  ? " active:ring-gray-700 text-gray-200 border-gray-600 hover:text-gray-100 opacity-70 "
                  : "text-gray-700 border-gray-200 active:ring-gray-300 hover:text-gray-800 "
              } w-8 h-8 mx-auto  active:outline-none rounded-full border active:z-10 active:ring-2  
            `}
            />
          }
        </button>
      </div>
    </section>
  );
}

export default memo(AddItems);
