import { DARK, LANGUAGE_COLORS, LIGHT, THEMES } from "@/constants";
import { ThemeType } from "@/types";

type LanguageType = keyof typeof LANGUAGE_COLORS;

export function getLanguageColors(language: LanguageType | string) {
    if (language in LANGUAGE_COLORS) {
        return LANGUAGE_COLORS[language as LanguageType];
    }

    return LANGUAGE_COLORS["CSS"];
}

export function getDefaultTheme() {
    const defaultTheme = localStorage.getItem("git-portfolio-theme");

    if (defaultTheme && THEMES.includes(defaultTheme as ThemeType)) {
        return defaultTheme as ThemeType;
    }

    const hour = new Date().getHours();

    if (hour > 5 && hour < 18) {
        return LIGHT;
    }
    return DARK;
}
