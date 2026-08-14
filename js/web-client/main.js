import { HtmlElement, root, HtmlContent } from "./render.js"

const leftBar = new HtmlContent([
  new HtmlElement("div", { id: "messengerName", className: "messengerNameBar" }, "Scratchssenger").render(),
  new HtmlElement("div", { id: "chatsBar", className: "chatsBar" }, "No chats!").render()
], "div")
const rightBar = new HtmlContent([
  new HtmlElement("div", { id: "chatName", className: "chatNameBar" }, "Loading...").render(),
  new HtmlElement("div", { id: "messages", className: "messages" }, "Loading...").render(),
  new HtmlElement("div", { id: "messageInput", className: "messageInput" }, "Loading...").render()
], "div")
leftBar.render()
rightBar.render()
const bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(leftBar)).render(),
  new HtmlElement("div", { id: "rightBar", className: "rightBar" }, String(rightBar)).render()
], "div", "root", "app")
bodyContent.render()

root.innerHTML = String(bodyContent)
