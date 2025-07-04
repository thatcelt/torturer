import ru from './locales/ru.json' with { type: 'json' };

const main = () => {
    console.log(Buffer.from(ru.base64AsciiLogo, 'base64').toString())
}

main()