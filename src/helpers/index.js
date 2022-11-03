import {languageColors} from "../constants";

export const getLanguageColors = (language) => {
    return language && (language in languageColors) ? languageColors[language] : "";
}