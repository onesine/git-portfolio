import { Palette, ChevronRight } from "lucide-react";
import { useContext, useLayoutEffect, useRef, useState } from "react";

import themeConfig from "@/config/theme.ts";
import { ThemeContext } from "@/contexts/themeContext.ts";
import { useOnClickOutside } from "@/hooks";
import { CardContainer } from "@/hooks/utils.tsx";

const ChangeTheme = () => {
    const { theme, themes, changeTheme } = useContext(ThemeContext);
    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [themeSwitcher, setThemeSwitcher] = useState({
        buttonHover: "",
        dropStyle: "",
        itemButton: "",
        itemButtonHover: "",
        primaryColor: ""
    });

    useLayoutEffect(() => {
        setThemeSwitcher({
            buttonHover: themeConfig[theme].changeThemeButton.hover,
            dropStyle: themeConfig[theme].changeThemeButton.dropDown,
            itemButton: themeConfig[theme].changeThemeButton.button,
            itemButtonHover: themeConfig[theme].changeThemeButton.buttonHover,
            primaryColor: themeConfig[theme].primaryColor
        });
    }, [theme]);

    useOnClickOutside(ref?.current, () => setOpen(false));

    return (
        <CardContainer className="p-4 flex items-center justify-between">
            <div className="space-y-2 ml-3">
                <h2 className="text-xl font-semibold">Theme</h2>
                <p className="font-light text-sm">{theme}</p>
            </div>

            <div className="inline-block relative" ref={ref}>
                <button
                    className={`flex items-center transition-all duration-300 p-4 rounded-md ${themeSwitcher.buttonHover}`}
                    onClick={() => setOpen(!open)}
                >
                    <Palette className="h-5 w-5" />
                    <span className="ml-3 mr-1 font-semibold text-sm hidden md:block">
                        Change Theme
                    </span>
                    <ChevronRight className="h-4 w-4 p-0.5" />
                </button>

                <div
                    className={`absolute z-50 w-52 ${themeSwitcher.dropStyle} shadow-2xl max-h-[25rem] right-0 mt-2 rounded-md p-2 border transition-all duration-300 ${open ? "block scale-100 opacity-100" : "hidden opacity-0 scale-75"}`}
                >
                    {themes.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                changeTheme(item);
                            }}
                            className={`transition-all duration-300 px-4 py-2 rounded-md cursor-pointer text-sm ${theme === item ? `${themeSwitcher.itemButton} ${themeSwitcher.primaryColor}` : `${themeSwitcher.itemButtonHover}`}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

export default ChangeTheme;
