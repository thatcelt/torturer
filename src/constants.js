import pkg from "node-color-log";

import en from "./locales/en.json" with { type: "json" };
import ru from "./locales/ru.json" with { type: "json" };

export const LOGGER = pkg

export const ACCOUNTS_CACHE = []
export const USERS_CACHE = []
export const LOCALES = {
    "en": en,
    "ru": ru
}

export const LOGO = Buffer.from(LOCALES.en.base64AsciiLogo, 'base64').toString() + '\n\n'
export const NEXT_LINE = '\n'
export const BACK_COMMAND = 'back'
export const CUSTOM_THEME = {
    style: {
        answer: (text) => '\x1b[32m' + text + '\x1b[0m',
        message: (text, _) => '\x1b[31m' + text + '\x1b[0m',
        highlight: (text) => '\x1b[31m' + text + '\x1b[0m',
        description: (text) => '\x1b[32m' + text + '\x1b[0m',
        disabled: (text) => text
    }
}

export let config = undefined;