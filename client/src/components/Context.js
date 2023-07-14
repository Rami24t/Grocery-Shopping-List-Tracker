import React, { useReducer } from "react";

export const Context = React.createContext();

export function ContextProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
        case "SET_SHOW_ITEMS":
            if (action.payload.showNeeds === undefined) {
                action.payload.showNeeds = state.showNeeds;
            }
            if (action.payload.showHaves === undefined) {
                action.payload.showHaves = state.showHaves;
            }
            if (action.payload.showNeeds === state.showNeeds && action.payload.showHaves === state.showHaves) {
                return state;
            }
            return {
                ...state,
                showNeeds: action.payload.showNeeds,
                showHaves: action.payload.showHaves
            };
            default:
            return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        showNeeds: true,
        showHaves: true,
        setShowItems: (showNeeds, showHaves) => {
            dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds, showHaves } });
        },
        setShowNeeds: (showNeeds) => {
            dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds } });
        },
        setShowHaves: (showHaves) => {
            dispatch({ type: "SET_SHOW_ITEMS", payload: { showHaves } });
        }
    });

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;