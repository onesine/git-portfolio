import {createContext, useEffect, useLayoutEffect, useMemo, useState} from "react";
import {themes} from "../constants";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";

export const ThemeContext = createContext({
    theme: "Default",
    themes: themes,
    changeTheme: (theme) => {}
});

const Theme = ({children}) => {
    const [theme, setTheme] = useState(themes[0]);

    useLayoutEffect(() => {
        const defaultValue = getTheme(theme);
        document.body.className = defaultValue in themeConfig ? themeConfig[defaultValue]["body"] : themeConfig[theme[0]];
    }, [theme]);

    const value = useMemo(() => {
        return {
            theme,
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