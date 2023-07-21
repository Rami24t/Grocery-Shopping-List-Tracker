import React, { useEffect, useState } from "react";
import { openCloseAddFormSFX, openCloseAddFormSFXAudio } from "../../utils/sfx";
import useAudio from "../../hooks/useAudio";
import { playAudio } from "../../utils/playAudio";

const BUTTON_COOLDOWN_MS = 900;
const INITIAL_AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)();

function AddItemsButton({ showAddItem, setShowAddItem, listIsEmpty, dark }) {
  const { reversedBuffer } = useAudio(openCloseAddFormSFX);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (listIsEmpty) {
      setShowAddItem(true);
      openCloseAddFormSFXAudio.currentTime = 0;
      openCloseAddFormSFXAudio.play();
    }
  }, [listIsEmpty, setShowAddItem]);

  const onClickHandler = () => {
    if (buttonDisabled) return;

    if (!showAddItem) {
      openCloseAddFormSFXAudio.currentTime = 0;
      openCloseAddFormSFXAudio.play();
    } else {
      if (reversedBuffer) {
        playAudio(reversedBuffer, INITIAL_AUDIO_CONTEXT);
      }
    }

    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, BUTTON_COOLDOWN_MS);

    setShowAddItem((prev) => !prev);
  };

  
  return (
    <button
      disabled={listIsEmpty || buttonDisabled}
      onClick={onClickHandler}
      id="add-item-button"
      className={` font-semibold transition-all inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg ${
        !showAddItem
          ? "bg-indigo-700  hover:bg-indigo-600"
          : listIsEmpty
          ? "bg-red-950 "
          : "bg-red-800  hover:bg-red-700"
      } px-3 py-2 text-xs font-medium text-slate-200 transition focus:outline-none focus:ring hover:text-indigo-100 `}
      type="button"
    >
      {"Add "}
      <div
        className={`font-semibold transition-transform flex text-center items-center justify-center w-3 h-3 ${
          !dark ? "text-gray-800" : "text-white -translate-y-0.5"
        } ${showAddItem ? "rotate-90" : "rotate-0"}`}
      >
        &gt;
      </div>
    </button>
  );
}

export default React.memo(AddItemsButton);
