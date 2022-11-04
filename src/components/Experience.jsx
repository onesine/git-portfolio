import {CardContainer, CardTitle} from "./utils";
import {useContext, useLayoutEffect, useState} from "react";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";
import {ThemeContext} from "./Theme";

const Experience = ({title, data}) => {
    const {theme} = useContext(ThemeContext);
    const [themeStyle, setThemeStyle] = useState({
        timeLine: "",
        dot: ""
    });

    useLayoutEffect(() => {
        setThemeStyle({
            timeLine: themeConfig[getTheme(theme)].experience.timeLine,
            dot: themeConfig[getTheme(theme)].experience.dot,
        });
    }, [theme]);

    return (
        <CardContainer className="p-7">
            <CardTitle>{title}</CardTitle>

            <div className={`space-y-4 border-l ${themeStyle.timeLine} pl-4`}>
                {data.map((item, index) => (
                    <div key={index} className="flex space-x-3">
                        <span className={`inline-block rounded-full h-2 w-2 ${themeStyle.dot} mt-1 ml-[-1.28rem]`}/>

                        <div>
                            <p className="text-xs">{item.period}</p>
                            <h5 className="text-sm font-semibold">{item.position}</h5>
                            <p className="text-sm">{item.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CardContainer>
    );
};

export default Experience;