import { HtmlElement, root, HtmlContent } from "./render.js"

const chatsBar = new HtmlContent()
const chatBar = new HtmlContent()
chatsBar.render()
charBar.render()
const bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "chats", class: "chatsBar", String(chatsBar) }),
  new HtmlElement("div", { id: "chatBar", class: "chatBar", String(chatBar) })
], "div", "root")
bodyContent.render()

root.innerHTML = String(bodyContent)
