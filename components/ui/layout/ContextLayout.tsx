"use client";

import React, { createContext, useContext, useReducer } from "react";

interface IAppContext {
  setIsLoading: () => void;
  closeOverlay: () => void;
  isLoading: boolean;
  items: IOverlay | null;
  clearLoading: () => void;
  setOpenOverlay: (overlay: IOverlay) => void;
}

const initialDialog: IOverlay = {
  id: "",
};

type Action =
  | { type: "SET_LOADING" }
  | { type: "CLOSE_OVERLAY" }
  | { type: "CLEAR_LOADING" }
  | { type: "SET_OPEN_OVERLAY"; payload: IOverlay };

const initialState = {
  isLoading: false,
  items: null as IOverlay | null,
};

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "CLEAR_LOADING":
      return { ...state, isLoading: false };
    case "SET_OPEN_OVERLAY":
      return { ...state, items: { ...action.payload, open: true } };
    case "CLOSE_OVERLAY":
      return { ...state, items: initialDialog };
    default:
      return state;
  }
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export default function ContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: IAppContext = {
    isLoading: state.isLoading,
    closeOverlay: () => dispatch({ type: "CLOSE_OVERLAY" }),
    clearLoading: () => dispatch({ type: "CLEAR_LOADING" }),
    setIsLoading: () => dispatch({ type: "SET_LOADING" }),
    setOpenOverlay: (items) =>
      dispatch({ type: "SET_OPEN_OVERLAY", payload: items }),
    items: state.items,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must used in ContextLayout");
  }

  return context;
}
