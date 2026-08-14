import { HtmlElement, root, HtmlContent } from "./render.js"

const leftBar = new HtmlContent([
  new HtmlElement("div", { id: "messengerName", class: "messengerNameBar", unkn: "ouwn" }, "Scratchssenger").render(),
  new HtmlElement("div", { id: "chatsBar", class: "chatsBar", unkn: "ouwn" }, "No chats!").render()
], "div")
const rightBar = new HtmlContent([
  new HtmlElement("div", { id: "chatName", class: "chatNameBar", unkn: "ouwn" }, "Loading...").render(),
  new HtmlElement("div", { id: "messages", class: "messages", unkn: "ouwn" }, "Loading...").render(),
  new HtmlElement("div", { id: "messageInput", class: "messageInput", unkn: "ouwn" }, "Loading...").render()
], "div")
leftBar.render()
rightBar.render()
const bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "leftBar", class: "leftBar", unkn: "ouwn" }, String(leftBar)).render(),
  new HtmlElement("div", { id: "rightBar", class: "rightBar", unkn: "ouwn" }, String(rightBar)).render()
], "div", "root", "app")
bodyContent.render()

root.innerHTML = String(bodyContent)
