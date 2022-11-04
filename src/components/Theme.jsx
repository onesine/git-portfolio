import {createContext, useMemo, useState} from "react";
import {themes} from "../constants";

export const ThemeContext = createContext({
    choice: "default",
    themes: themes,
    changeTheme: (theme) => {}
});

const Theme = ({children}) => {
    const [theme, setTheme] = useState(themes[0]);

    const value = useMemo(() => {
        return {
            choice: theme,
            themes: themes,
            changeTheme: (choice) => {setTheme(choice)}
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;