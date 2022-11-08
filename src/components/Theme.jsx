import {createContext, useLayoutEffect, useMemo, useState} from "react";
import {themes} from "../constants";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";

export const ThemeContext = createContext({
    theme: "Default",
    themes: themes,
    changeTheme: (theme) => {}
});

const Theme = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("git-portfolio-theme") || themes[0]);

    useLayoutEffect(() => {
        document.body.className = themeConfig[getTheme(theme)]["body"];
    }, [theme]);

    const value = useMemo(() => {
        return {
            theme,
            themes: themes,
            changeTheme: (choice) => {
                localStorage.setItem("git-portfolio-theme", choice);
                setTheme(choice);
            }
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;