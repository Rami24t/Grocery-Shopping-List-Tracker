import React, { useEffect, useState } from "react";
import {
  openCloseAddFormSFX,
  openCloseAddFormSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import useAudio from "../../hooks/useAudio";
import { playAudio40 } from "../../utils/playAudio40";
import { Context } from "../Context";

const BUTTON_COOLDOWN_MS = 900;
let INITIAL_AUDIO_CONTEXT;

function AddItemsButton({
  showAddItem,
  setShowAddItem,
  listIsEmpty,
  darkMode,
}) {
  const { state, dispatch } = React.useContext(Context);
  const { sound } = state?.settings;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });

  if (sound && !INITIAL_AUDIO_CONTEXT)
    try {
      INITIAL_AUDIO_CONTEXT = new (window.AudioContext ||
        window.webkitAudioContext)();
    } catch (error) {
      console.log(error);
    }
  const { reversedBuffer } = useAudio(sound && openCloseAddFormSFX);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (listIsEmpty) {
      setShowAddItem(true);
    }
  }, [listIsEmpty, setShowAddItem]);

  const onClickHandler = () => {
    if (buttonDisabled) return;

    if (sound)
      if (!showAddItem) {
        playSFXAudio(openCloseAddFormSFXAudio);
        setInfo("Adding form is now open");
      } else {
        if (reversedBuffer) {
          playAudio40(reversedBuffer, INITIAL_AUDIO_CONTEXT);
          setInfo("Adding form closed");
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
      title={listIsEmpty ? 'Open "Add Items" form' : 'Close "Add Items" form'}
      aria-label="Open/Close Add Items form"
      id="add-item-button"
      className={`${
        darkMode
          ? "text-slate-200 hover:text-slate-100"
          : "text-slate-100 hover:text-slate-50"
      } font-semibold transition-all inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg ${
        !showAddItem
          ? darkMode
            ? "bg-indigo-700 hover:bg-indigo-600"
            : "bg-blue-700 hover:bg-blue-800 "
          : listIsEmpty
          ? darkMode
            ? "bg-red-950 hidden"
            : "hidden"
          : darkMode
          ? "bg-red-800  hover:bg-red-700"
          : "bg-red-600  hover:bg-red-700"
      }
          px-3 py-2 text-xs font-medium  transition focus:outline-none focus:ring  `}
      type="button"
    >
      {"Add "}
      <div
        className={`font-semibold transition-transform flex text-center items-center justify-center w-3 h-3 -translate-y-0.5 ${
          showAddItem ? "duration-500 rotate-90" : "rotate-0"
        }`}
      >
        &gt;
      </div>
    </button>
  );
}

export default React.memo(AddItemsButton);
