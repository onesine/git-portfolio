import {AdjustmentsVerticalIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {CardContainer} from "./utils";
import {useContext, useRef, useState} from "react";
import {ThemeContext} from "./Theme";
import {useOnClickOutside} from "../hooks";

const ChangeTheme = () => {
    const {choice, themes, changeTheme} = useContext(ThemeContext);
    const ref = useRef();
    const [open, setOpen] = useState(false);

    useOnClickOutside(ref, () => setOpen(false));

    return (
        <CardContainer className="p-4 flex items-center justify-between">
            <div className="space-y-2 ml-3">
                <h2 className="text-xl font-semibold text-gray-500">Theme</h2>
                <p className="font-light text-gray-500 text-sm">{choice}</p>
            </div>

            <div className="inline-block relative" ref={ref}>
                <button className="flex items-center text-gray-400 hover:bg-gray-200 transition-all duration-300 p-4 rounded-md" onClick={() => setOpen(!open)}>
                    <AdjustmentsVerticalIcon className="h-5 w-5"/>
                    <span className="ml-3 mr-1 font-semibold text-sm hidden md:block">Change Theme</span>
                    <ChevronRightIcon className="h-4 w-4 p-0.5"/>
                </button>

                <div className={`absolute z-50 w-52 bg-white text-gray-600 shadow-2xl max-h-[25rem] right-0 mt-2 rounded-md p-2 border border-gray-200/60 transition-all duration-[4s] ease-in ${open ? 'block scale-100 opacity-100' : 'hidden opacity-0 scale-75'}`}>
                    {themes.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {changeTheme(item)}}
                            className={`transition-all duration-300 px-4 py-2 rounded-md cursor-pointer text-sm ${choice === item ? "bg-indigo-600 text-white" : "hover:bg-gray-100"}`}
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