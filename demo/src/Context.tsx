import React from "react";

/** mock some context */
export const LoadingContext = React.createContext({
  loading: false,
  setLoading: (_value: boolean) => {},
});

export const UserDataContext = React.createContext({
  name: "",
  age: 0,
});

type Theme = "light" | "dark";
export const ThemeContext = React.createContext<Theme>("light");