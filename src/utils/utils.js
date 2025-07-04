import { parse } from "ini";
import { readFile } from "fs/promises";
import { select } from "@inquirer/prompts"

import { BACK_COMMAND, CUSTOM_THEME, LOCALES, LOGGER, LOGO, NEXT_LINE } from "../constants.js";

const commandsTypeHandler = async (locale) => {
    return await select({
        message: locale.strings.selectNextCommand,
        choices: locale.commands.map(commandType => {
            return { name: commandType.name, value: commandType.value, description: commandType.name }
        }),
        theme: CUSTOM_THEME
    })
}

const commandsHandler = async (commandType, locale) => {
    const commands = locale.commands.filter(command => command.value == commandType)[0].commandsList

    return await select({
        message: locale.strings.selectNextCommandFor + ' ' + locale.commands.filter(command => command.value == commandType)[0].name,
        choices: commands.map(command => {
            return { name: command.name, value: command.value, description: command.description }
        }),
        theme: CUSTOM_THEME
    })
}

export const loadConfig = async () => {
    try {
        const { config } = await import("../constants.js");
        config = parse(await readFile('../config.ini', {
            encoding: 'utf-8'
        }))
        return config.settings.lang != undefined ? LOCALES[config.settings.lang] : LOCALES.en
    } catch {
        LOGGER.warn(LOCALES.en.errors.noSuchConfig)
        return LOCALES.en
    }
}

export const renderScreen = async (locale) => {
    while (true) {
        const commandType = await commandsTypeHandler(locale)
        while (true) {
            const command = await commandsHandler(commandType, locale)
            console.log(NEXT_LINE)
            console.clear()
            LOGGER.color('red').log(LOGO)
            if (command == BACK_COMMAND) {
                break
            }
        }
    }
}