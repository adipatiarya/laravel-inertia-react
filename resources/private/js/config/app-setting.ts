import { createContext, Dispatch, SetStateAction } from "react";

export type ThemeName = "light" | "dark"; // example

type AppSettingsType = {
  appTheme: ThemeName;
  setAppTheme: Dispatch<SetStateAction<ThemeName>>;
};

 export const AppSettings = createContext<AppSettingsType>({
  appTheme: "light", // default theme
  setAppTheme: () => {}, // noop function
});