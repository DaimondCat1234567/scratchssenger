import { HtmlElement, root, HtmlContent } from "./render.js"

const leftBar = new HtmlContent([
  new HtmlElement("div", { id: "messengerName", class: "messengerNameBar" }, "Scratchssenger").render(),
  new HtmlElement("div", { id: "chatsBar", class: "chatsBar" }, "No chats!").render()
], "div")
const rightBar = new HtmlContent([
  new HtmlElement("div", { id: "chatName", class: "chatNameBar" }, "Loading...").render(),
  new HtmlElement("div", { id: "messages", class: "messages" }, "Loading...").render(),
  new HtmlElement("div", { id: "messageInput", class: "messageInput" }, "Loading...").render()
], "div")
leftBar.render()
rightBar.render()
const bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "leftBar", class: "leftBar" }, String(leftBar)).render(),
  new HtmlElement("div", { id: "rightBar", class: "rightBar" }, String(rightBar)).render()
], "div", "root")
bodyContent.render()

root.innerHTML = String(bodyContent)
