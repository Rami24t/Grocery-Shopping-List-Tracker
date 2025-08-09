import { createContext, useReducer } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_INFO":
        return {
          ...state,
          info: action.payload,
        };
      case "SET_SHOW_ITEMS":
        if (action.payload.showNeeds === undefined) {
          action.payload.showNeeds = state.showNeeds;
        }
        if (action.payload.showHaves === undefined) {
          action.payload.showHaves = state.showHaves;
        }
        if (
          action.payload.showNeeds === state.showNeeds &&
          action.payload.showHaves === state.showHaves
        ) {
          return state;
        }
        return {
          ...state,
          showNeeds: action.payload.showNeeds,
          showHaves: action.payload.showHaves,
        };
      case "TOGGLE_SOUND":
        const toggled = !state.settings.sound;
        localStorage.setItem("sound", JSON.stringify(toggled));
        return {
          ...state,
          settings: {
            ...state?.settings,
            sound: toggled,
          },
        };
      case "CHANGE_LANGUAGE":
        const nextLanguage = (state.settings.language + 1) % LANGUAGES_LENGTH;
        localStorage.setItem("language", nextLanguage);
        // document.documentElement.lang = state.LANGUAGES[nextLanguage]; responsibility moved to App.js
        return {
          ...state,
          settings: {
            ...state?.settings,
            language: nextLanguage,
          },
        };
      case "LOAD_SOUND":
        const sound = JSON.parse(localStorage.getItem("sound")) !== false;
        return {
          ...state,
          settings: {
            ...state?.settings,
            sound,
          },
        };
      case "GIVE_CONSENT":
        localStorage.setItem("ageConsent", JSON.stringify(true));
        return {
          ...state,
          settings: {
            ...state?.settings,
            ageConsent: true,
          },
        };
      default:
        return state;
    }
  };

  const LANGUAGES_LENGTH = 3;
  const initialState = {
    LANGUAGES: ["en", "de", "ar"],
    showNeeds: true,
    showHaves: true,
    info: "",
    settings: {
      sound: false,
      ageConsent: JSON.parse(localStorage.getItem("ageConsent")) === true,
      language: parseInt(localStorage.getItem("language")) || 0,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
