import {AdjustmentsVerticalIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {CardContainer} from "./utils";
import {useContext, useLayoutEffect, useRef, useState} from "react";
import {ThemeContext} from "./Theme";
import {useOnClickOutside} from "../hooks";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";

const ChangeTheme = () => {
    const {theme, themes, changeTheme} = useContext(ThemeContext);
    const ref = useRef();
    const [open, setOpen] = useState(false);
    const [buttonHover, setButtonHover] = useState("");
    const [dropStyle, setDropStyle] = useState("");
    const [itemButton, setItemButton] = useState("");
    const [itemButtonHover, setItemButtonHover] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");

    useLayoutEffect(() => {
        setButtonHover(themeConfig[getTheme(theme)].changeThemeButton.hover);
        setDropStyle(themeConfig[getTheme(theme)].changeThemeButton.dropDown);
        setItemButton(themeConfig[getTheme(theme)].changeThemeButton.button);
        setItemButtonHover(themeConfig[getTheme(theme)].changeThemeButton.buttonHover);
        setPrimaryColor(themeConfig[getTheme(theme)].primaryColor);
    }, [theme]);

    useOnClickOutside(ref, () => setOpen(false));

    return (
        <CardContainer className="p-4 flex items-center justify-between">
            <div className="space-y-2 ml-3">
                <h2 className="text-xl font-semibold">Theme</h2>
                <p className="font-light text-sm">{theme}</p>
            </div>

            <div className="inline-block relative" ref={ref}>
                <button className={`flex items-center transition-all duration-300 p-4 rounded-md ${buttonHover}`} onClick={() => setOpen(!open)}>
                    <AdjustmentsVerticalIcon className="h-5 w-5"/>
                    <span className="ml-3 mr-1 font-semibold text-sm hidden md:block">Change Theme</span>
                    <ChevronRightIcon className="h-4 w-4 p-0.5"/>
                </button>

                <div className={`absolute z-50 w-52 ${dropStyle} shadow-2xl max-h-[25rem] right-0 mt-2 rounded-md p-2 border transition-all duration-300 ${open ? 'block scale-100 opacity-100' : 'hidden opacity-0 scale-75'}`}>
                    {themes.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {changeTheme(item)}}
                            className={`transition-all duration-300 px-4 py-2 rounded-md cursor-pointer text-sm ${theme === item ? `${itemButton} ${primaryColor}` : `${itemButtonHover}`}`}
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