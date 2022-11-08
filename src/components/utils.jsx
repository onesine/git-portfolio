import {useContext, useLayoutEffect, useState} from "react";
import {ThemeContext} from "./Theme";
import themeConfig from "../config/theme";
import {getTheme} from "../helpers";

export const CardContainer = ({children, className = ""}) => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState("");

    useLayoutEffect(() => {
        setThemeSwitcher(themeConfig[getTheme(theme)].cardContainer);
    }, [theme]);

    return (
        <div
            className={`transition-all duration-300 ${themeSwitcher} rounded-md shadow-lg${className.length ? " "+className : ""}`}
        >
            {children}
        </div>
    );
};

export const CardTitle = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState("");

    useLayoutEffect(() => {
        setThemeSwitcher(themeConfig[getTheme(theme)].cardTitle);
    }, [theme]);

    return (
        <h2 className={`transition-all duration-300 mb-6 text-xl ${themeSwitcher} font-semibold`}>{children}</h2>
    );
};

export const ProjectsContainer = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState("");

    useLayoutEffect(() => {
        setThemeSwitcher(themeConfig[getTheme(theme)].projectsContainer);
    }, [theme]);

    return (
        <div className={`transition-all duration-300 shadow-sm ${themeSwitcher} rounded-md p-4`}>
            {children}
        </div>
    );
};

export const GithubIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"><path stroke="none" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>
    );
};

export const TwitterIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"/></svg>
    );
};

export const LinkedInIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16"><path stroke="none" d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 4 3.5z"/></svg>
    );
};

export const MediumIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"><path stroke="none" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z"/></svg>
    );
};

export const DevIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 448 512"><path stroke="none" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/></svg>
    );
};

export const MergeIcon = ({className = ""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"><path stroke="none" d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"/></svg>
    );
};

export const TextSkeleton = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState({
        color: ""
    });

    useLayoutEffect(() => {
        setThemeSwitcher({
            color: themeConfig[getTheme(theme)].skeleton.color
        })
    }, [theme]);

    return (
        <div className="animate-pulse my-0 overflow-hidden">
            <div className={`transition-all duration-300 ${themeSwitcher.color} my-0 inline-block px-2 rounded text-gray-900/0 text-xs h-3 truncate`}>{children}</div>
        </div>
    );
};

export const ElementSkeleton = ({className = ""}) => {
    const {theme} = useContext(ThemeContext);
    const [themeSwitcher, setThemeSwitcher] = useState({
        color: ""
    });

    useLayoutEffect(() => {
        setThemeSwitcher({
            color: themeConfig[getTheme(theme)].skeleton.color
        })
    }, [theme]);

    return (
        <div className="animate-pulse">
            <div className={`transition-all duration-300 ${themeSwitcher.color} ${className}`}/>
        </div>
    );
};