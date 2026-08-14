import { HtmlElement, HtmlContent } from "./render.js"
import { AppName } from "../metadata.js"

const createApp = async (loadingV, screen) => {
  let chatsBar = loadingV
  let chatName = loadingV
  let chatMembers = loadingV
  let messages = loadingV
  let messageInput = loadingV
  let [chatNameBar, leftBar, rightBar, bodyContent, loginBar] = ""
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
    loginBar = new HtmlContent([
      new HtmlElement("h1", { style: "text-align: center" }, "Login").render(),
      new HtmlElement("label", { for: "username" }, "Username: ").render(),
      new HtmlElement("input", { id: "username" }, "").render(),
      new HtmlElement("label", { for: "password" }, "Password: ").render(),
      new HtmlElement("input", { id: "password", type: "password" }, "").render(),
    ], "div")
    leftBar.render()
    rightBar.render()
    loginBar.render()
    if (window.ScratchssengerData.isLogin) {
      bodyContent = new HtmlContent([
        new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(leftBar)).render(),
        new HtmlElement("div", { id: "rightBar", className: "rightBar" }, String(rightBar)).render()
      ], "div", "content", "app")
    } else {
      bodyContent = new HtmlContent([
        new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(loginBar)).render(),
        new HtmlElement("div", { id: "rightBar", className: "rightBar" }, "").render()
      ], "div", "content", "app")
    }
    bodyContent.render()

    screen.innerHTML = String(bodyContent)
  }, 1000)
}

const startPolling = (wait) => {
  setTimeout(async () => {
    const oSession = await fetch("/api/session/", {
      method: "POST",
      body: JSON.stringify({
        login: localStorage.getItem("login"),
        session: localStorage.getItem("session")
      })
    })
    window.ScratchssengerData.isLogin = oSession.ok
    const session = await(oSession).json()
    const chats = await(await fetch("/api/session/chats/", {
      method: "POST",
      body: JSON.stringify({
        login: localStorage.getItem("login"),
        session: localStorage.getItem("session")
      })
    })).json()
  }, wait * 1000)
}

export { createApp as default, startPolling }
