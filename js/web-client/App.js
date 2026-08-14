import { HtmlElement, HtmlContent } from "./render.js"
import { AppName } from "../metadata.js"

const createApp = async (loading, screen) => {
  let chatsBar = loading
  let chatName = loading
  let chatMembers = loading
  let messages = loading
  let messageInput = loading
  let [chatNameBar, leftBar, rightBar, bodyContent] = ""
  setTimeout(() => {
    chatNameBar = new HtmlContent([
      new HtmlElement("h1", {}, chatName).render(),
      new HtmlElement("span", {}, chatMembers).render()
    ], "div")
    chatNameBar.render()
    leftBar = new HtmlContent([
      new HtmlElement("div", { id: "messengerName", className: "messengerNameBar" }, AppName).render(),
      new HtmlElement("div", { id: "chatsBar", className: "chatsBar" }, chatsBar).render()
    ], "div")
    rightBar = new HtmlContent([
      new HtmlElement("div", { id: "chatName", className: "chatNameBar" }, chatNameBar).render(),
      new HtmlElement("div", { id: "messages", className: "messages" }, messages).render(),
      new HtmlElement("div", { id: "messageInput", className: "messageInput" }, messageInput).render()
    ], "div")
    leftBar.render()
    rightBar.render()
    bodyContent = new HtmlContent([
      new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(leftBar)).render(),
      new HtmlElement("div", { id: "rightBar", className: "rightBar" }, String(rightBar)).render()
    ], "div")
    bodyContent.render()

    screen.innerHTML = bodyContent
  }, 1000)
}

export default createApp
