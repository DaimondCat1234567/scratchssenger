import { translations, language, HtmlContent, HtmlElement, Transtation } from "./render.js";

class Button {
    constructor () {}

    render () {}
}

class DateElement {
    constructor (date) {
        this.date = new Date(date)
        this.now = Date.now()
        this.elapsed = Math.floor(this.now() - this.date.getTime())
    }

    render (type) {
        switch (type) {
            case "time":
                return `${this.date.getHours}:${this.date.getMinutes}`
            case "time3":
                return `${this.date.getHours}:${this.date.getMinutes}:${this.date.getSeconds}`
            case "time4":
                return `${this.date.getHours}:${this.date.getMinutes}:${this.date.getSeconds}.${this.date.getMilliseconds}`
            case "date":
                return `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`
            case "date2":
                return `${this.date.getDate()}.${this.date.getMonth()}`
            case "dd-mm-yy":
                return `${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`
            case "yy-mm-dd":
                return `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDate()}`
            case "text-date":
                const months = language === "ru" ? [
                    "января",
                    "февраля",
                    "марта",
                    "апреля",
                    "мая",
                    "июня",
                    "июля",
                    "августа",
                    "сеньтября",
                    "октября",
                    "ноября",
                    "декабря"
                ] : [
                    "january",
                    "february",
                    "march",
                    "april",
                    "may",
                    "june",
                    "july",
                    "august",
                    "september",
                    "october",
                    "november",
                    "december"
                ]
                return `${this.date.getDate()} ${months[this.date.getMonth()]} ${this.date.getFullYear()} ${language === "ru" ? "года" : ""}`
            default:
                return `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}, ${this.date.getHours}:${this.date.getMinutes}`
        }
    }
}

class Message {
    constructor () {}

    render () {}
}

const ButtonComponent = (args) => {
    return new Button().render()
}
const DateComponent = (args) => {
    return new DateElement(args.date).render(args.type)
}
const MessageComponent = (args) => {
    return new Message().render()
}

export {
    ButtonComponent,
    DateComponent,
    MessageComponent
}