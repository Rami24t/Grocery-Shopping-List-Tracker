import { memo } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { writingSFXAudio, editClickSFXAudio, typeSFXAudio } from "../../utils/sfx";

function AddItems({ handleAdd, showAddItem, dark }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.previousSibling.focus();
  };

  const onEnter = (e) => e.key === "Enter" && handleBlur(e);

  const handleFocus = () => {
    try{
    editClickSFXAudio.currentTime = 0;
    editClickSFXAudio.play();
    writingSFXAudio.currentTime = 0;
    writingSFXAudio.play();
    } catch(err){
      console.log(err)
    }
  };

  const handleBlur = (e) => {
    try{
    writingSFXAudio.pause();
    writingSFXAudio.currentTime = 0;
    handleAdd(e);
    } catch(err){
      console.log(err)
    }
  };

  const handleChange = () => {
    typeSFXAudio.currentTime = 0;
    typeSFXAudio.play();
  }

  return (
    <section
      className={`overflow-hidden transition-all duration-500 ${
        !showAddItem
          ? "w-0 h-0 p-0 border-0 scale-0 opacity-50"
          : "w-80 pl-3 pt-3 pb-5 shadow-sm mb-5 "
      } mt-4  mx-auto add-item border rounded-lg ${
        dark
          ? "bg-gray-950 border-gray-800 text-white"
          : "bg-gray-50 border-gray-300"
      }  `}
    >
      <label
        htmlFor="new-item"
        className={`block mb-2 text-sm font-medium ${
          !dark ? "text-gray-900" : "text-white"
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
            dark
              ? "placeholder-gray-400 text-white border-gray-600 bg-gray-700 bg-opacity-70 "
              : "text-gray-900 border-gray-300 bg-gray-50 "
          } inline-block p-4 border rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500  `}
          onKeyDown={onEnter}
        />
        <button
          title="Add Item"
          className={`${
            dark ? "hover:text-white" : "hover:text-gray-900"
          } inline-block p-3 text-center text-gray-500  `}
          onClick={handleClick}
        >
          {
            <BsPlusCircle
              className={`${
                dark
                  ? " active:ring-gray-700 text-gray-200 border-gray-600 hover:text-gray-100 opacity-70 "
                  : "text-gray-900 border-gray-200 active:ring-gray-200 hover:text-blue-700 "
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
