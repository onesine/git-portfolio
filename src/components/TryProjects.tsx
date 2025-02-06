import { useContext, useLayoutEffect, useMemo, useState } from "react";

import configs from "@/config";
import themeConfig from "@/config/theme.js";
import { ThemeContext } from "@/contexts/themeContext.ts";
import { CardContainer } from "@/hooks/utils.tsx";
import { cn } from "@/libs/utils.ts";

interface Props {
    data: (typeof configs.profile.tryProjects)[0];
}

const TryProjects = (props: Props) => {
    const { data } = props;

    const { theme } = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState({
        tag: "",
        links: ""
    });

    useLayoutEffect(() => {
        setThemeSwitcher({
            tag: themeConfig[theme].tryProjects.tag,
            links: themeConfig[theme].tryProjects.links
        });
    }, [theme]);

    const As = useMemo(() => {
        if (data.links) {
            return "div" as const;
        }

        return "a" as const;
    }, [data.links]);

    const attributes = useMemo(() => {
        if (As === "div") return {};

        return {
            href: data.link || "#link",
            target: "_blank",
            rel: "noreferrer"
        };
    }, [As, data.link]);

    return (
        <CardContainer className="p-7 text-sm">
            <As
                {...attributes}
                className={cn({
                    "flex flex-col justify-center space-x-4": true,
                    "md:flex-row md:justify-start": true,
                    "items-center": As === "a"
                })}
            >
                <div className="w-24 h-24 flex-none">
                    <svg className="absolute w-0 h-0">
                        <defs>
                            <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                                <path d="M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z" />
                            </clipPath>
                        </defs>
                    </svg>

                    {data?.image ? (
                        <img
                            className="h-full object-center object-cover"
                            style={{ clipPath: "url(#squircle)" }}
                            src={`/images/${data.image}`}
                            alt=""
                        />
                    ) : (
                        <div
                            className="h-full bg-gray-100"
                            style={{ clipPath: "url(#squircle)" }}
                        />
                    )}
                </div>

                <div className="w-full text-center md:text-left mt-4 md:mt-0">
                    <h6 className="font-medium">
                        {data.links && data.links.length > 0 ? (
                            <a href={data.link} target="_blank" rel="noreferrer">
                                {data.title}
                            </a>
                        ) : (
                            data.title
                        )}
                    </h6>
                    <p className="text-xs">{data.date}</p>
                    <p className="mt-3 mb-2">{data.description}</p>

                    {data.links && data.links.length > 0 && (
                        <p className="text-xs">
                            Links:{" "}
                            {data.links.map((item, index) => (
                                <>
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cn(themeSwitcher.links, "hover:underline")}
                                    >
                                        {item.title}
                                    </a>
                                    {index < data.links.length - 2
                                        ? ", "
                                        : index + 1 === data.links.length
                                          ? ""
                                          : " and "}
                                </>
                            ))}
                        </p>
                    )}

                    <div className="text-[0.7rem] flex items-center justify-center md:justify-start flex-wrap">
                        {(data.techStack || []).map((item, index) => (
                            <span
                                key={index}
                                className={cn({
                                    "transition-all duration-300 rounded-full": true,
                                    "px-3.5 py-1 mr-3 mt-2": true,
                                    [themeSwitcher.tag]: true
                                })}
                            >
                                #{item}
                            </span>
                        ))}
                    </div>
                </div>
            </As>
        </CardContainer>
    );
};

export default TryProjects;
