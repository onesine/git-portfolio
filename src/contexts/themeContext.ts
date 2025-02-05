import { createContext } from "react";

import { THEMES } from "@/constants";

type ThemeContextType = {
    theme: "dark" | "light";
    themes: typeof THEMES;
    changeTheme: (choice: "dark" | "light") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    themes: THEMES,
    changeTheme: () => {}
});
