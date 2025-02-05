import { ReactNode, useLayoutEffect, useMemo, useState } from "react";

import themeConfig from "@/config/theme.ts";
import { THEMES } from "@/constants";
import { ThemeContext } from "@/contexts/themeContext";
import { getDefaultTheme } from "@/helpers";
import { ThemeType } from "@/types";

const Theme = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(getDefaultTheme());

    useLayoutEffect(() => {
        document.body.className = themeConfig[theme]["body"];
    }, [theme]);

    const value = useMemo(() => {
        return {
            theme,
            themes: THEMES,
            changeTheme: (choice: ThemeType) => {
                localStorage.setItem("git-portfolio-theme", choice);
                setTheme(choice);
            }
        };
    }, [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default Theme;
