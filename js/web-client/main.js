import { HtmlElement, root, HtmlContent } from "./render.js"
import { AppName } from "../metadata.js"

let Load = "Loading..."

let chatsBar = Load
let chatNameBar = Load
let messages = Load
let messageInput = Load
let leftBar = new HtmlContent([
  new HtmlElement("div", { id: "messengerName", className: "messengerNameBar" }, AppName).render(),
  new HtmlElement("div", { id: "chatsBar", className: "chatsBar" }, chatsBar).render()
], "div")
let rightBar = new HtmlContent([
  new HtmlElement("div", { id: "chatName", className: "chatNameBar" }, chatNameBar).render(),
  new HtmlElement("div", { id: "messages", className: "messages" }, messages).render(),
  new HtmlElement("div", { id: "messageInput", className: "messageInput" }, messageInput).render()
], "div")
leftBar.render()
rightBar.render()
let bodyContent = new HtmlContent([
  new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(leftBar)).render(),
  new HtmlElement("div", { id: "rightBar", className: "rightBar" }, String(rightBar)).render()
], "div", "root", "app")
bodyContent.render()

root.innerHTML = String(bodyContent)
