import { useContext, useLayoutEffect, useState } from "react";

import configs from "@/config";
import themeConfig from "@/config/theme.js";
import { ThemeContext } from "@/contexts/themeContext.ts";
import { useFetchData } from "@/hooks";
import { CardContainer, ElementSkeleton, TextSkeleton } from "@/hooks/utils.tsx";

const Resume = () => {
    const { theme } = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState({
        avatarBorder: ""
    });

    const { profile } = configs;
    const [data, loading] = useFetchData(`https://api.github.com/users/${profile.username}`);

    useLayoutEffect(() => {
        setThemeSwitcher({
            avatarBorder: themeConfig[theme].resume.avatarBorder
        });
    }, [theme]);

    return (
        <CardContainer className="p-7 flex flex-col items-center justify-center">
            {loading ? (
                <ElementSkeleton className="h-36 rounded-full w-36" />
            ) : (
                <div
                    className={`transition-all duration-300 h-36 w-36 p-0.5 border-[3px] ${themeSwitcher.avatarBorder} rounded-full`}
                >
                    {data && data?.avatar_url ? (
                        <img
                            className="h-full rounded-full object-center object-cover"
                            src={data?.avatar_url}
                            alt=""
                        />
                    ) : (
                        <div className="h-full bg-gray-100 rounded-full" />
                    )}
                </div>
            )}

            <div className="mt-6 space-y-4 text-center">
                {loading ? (
                    <TextSkeleton>Hello World!</TextSkeleton>
                ) : (
                    <h3 className="text-2xl font-bold">{data?.name || "-"}</h3>
                )}

                {loading ? (
                    <div>
                        <TextSkeleton>
                            Lorem ipsum dolor sit amet, consectetur adipisi.
                        </TextSkeleton>
                        <TextSkeleton>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </TextSkeleton>
                        <TextSkeleton>Lorem ipsum dolor sit amet.</TextSkeleton>
                    </div>
                ) : (
                    <p className=" text-lg px-5 text-opacity-60">{data?.bio || "-"}</p>
                )}

                <a
                    href={`/pdf/${profile?.username}.pdf`}
                    download
                    className="uppercase inline-block p-2 rounded-md text-xs font-semibold border border-gray-200 hover:text-white hover:bg-gray-400 transition duration-300"
                >
                    Download Resume
                </a>
            </div>
        </CardContainer>
    );
};

export default Resume;
