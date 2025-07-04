import { LOGGER, LOGO, NEXT_LINE } from "../constants.js"
import { loadConfig, renderScreen } from "./utils.js"

export const build = async () => {
    console.clear()
    LOGGER.color('red').log(LOGO)
    const locale = await loadConfig()
    console.log(NEXT_LINE)
    renderScreen(locale)
}