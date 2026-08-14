import { HtmlElement, root, HtmlContent } from "./render.js"

const leftBar = new HtmlContent([
  new HtmlElement("div", { id: "messengerName", class: "messengerNameBar" }, "Scratchssenger"),
  new HtmlElement("div", { id: "chatsBar", class: "chatsBar" }, "No chats!")
], "div")
const rightBar = new HtmlContent([
  new HtmlElement("div", { id: "chatName", class: "chatNameBar" }, "Loading..."),
  new HtmlElement("div", { id: "messages", class: "messages" }, "Loading..."),
  new HtmlElement("div", { id: "messageInput", class: "messageInput" }, "Loading...")
], "div")
leftBar.render()
rightBar.render()
const bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "leftBar", class: "leftBar" }, String(leftBar)),
  new HtmlElement("div", { id: "rightBar", class: "rightBar" }, String(rightBar))
], "div", "root")
bodyContent.render()

root.innerHTML = String(bodyContent)
