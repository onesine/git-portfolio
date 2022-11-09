import {DARK, languageColors, LIGHT} from "../constants";

export function getLanguageColors(language) {
    return language && (language in languageColors) ? languageColors[language] : "";
}

export function getTheme(theme) {
    return theme === "Default" ? "Light" : theme
};

export function getDefaultTheme() {
    const hour = new Date().getHours();

    if (hour > 5 && hour < 18) {
        return LIGHT;
    }
    return DARK;
}