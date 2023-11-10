import { createContext, useReducer } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
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
        return {
          ...state,
          settings: {
            ...state?.settings,
            sound: !state?.settings?.sound,
          },
        };
      case "SET_INFO":
        return {
          ...state,
          info: action.payload,
        };
      case "CHANGE_LANGUAGE":
        const nextLanguage = (state.settings.language + 1) % LANGUAGES_LENGTH;
        localStorage.setItem("language", nextLanguage);
        return {
          ...state,
          settings: {
            ...state?.settings,
            language: nextLanguage,
          },
        };

      default:
        return state;
    }
  };

  const LANGUAGES_LENGTH = 3;
  const initialState = {
    LANGUAGES: ["EN", "DE", "AR"],
    showNeeds: true,
    showHaves: true,
    info: "",
    settings: {
      sound: false,
      language: parseInt(localStorage.getItem("language")) || 0,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
