import { HtmlElement, HtmlContent } from "./render.js"
import { AppName } from "../metadata.js"

const createApp = async (loadingV, screen) => {
  let chatsBar = loadingV
  let chatName = loadingV
  let chatMembers = loadingV
  let messages = loadingV
  let messageInput = loadingV
  let [chatNameBar, leftBar, rightBar, bodyContent, loginBar, registerBar] = ""
  window.ScratchssengerData.loginType = "login"
  const handleLogin = () => {
    login()
  }
  const handleRegister = () => {
    register()
  }
  const handleLoginToRegister = () => {
    window.ScratchssengerData.loginType = 'register'
  }
  const handleRegisterToLogin = () => {
    window.ScratchssengerData.loginType = 'login'
  }
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
      new HtmlElement("label", { for: "password" }, "<br>Password: ").render(),
      new HtmlElement("input", { id: "password", type: "password" }, "").render(),
      new HtmlElement("button", { onclick: handleLogin }, "Login").render(),
      new HtmlElement("button", { onclick: handleLoginToRegister }, "Create account").render()
    ], "div")
    registerBar = new HtmlContent([
      new HtmlElement("h1", { style: "text-align: center" }, "Register").render(),
      new HtmlElement("label", { for: "username" }, "Username: ").render(),
      new HtmlElement("input", { id: "username" }, "").render(),
      new HtmlElement("label", { for: "password" }, "<br>Password: ").render(),
      new HtmlElement("input", { id: "password", type: "password" }, "").render(),
      new HtmlElement("button", { onclick: handleRegister }, "Register").render(),
      new HtmlElement("button", { onclick: handleRegisterToLogin }, "Login account").render()
    ], "div")
    leftBar.render()
    rightBar.render()
    loginBar.render()
    registerBar.render()
    if (window.ScratchssengerData.isLogin) {
      bodyContent = new HtmlContent([
        new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(leftBar)).render(),
        new HtmlElement("div", { id: "rightBar", className: "rightBar" }, String(rightBar)).render()
      ], "div", "content", "app")
    } else {
      if (window.ScratchssengerData.loginType === "login") {
        bodyContent = new HtmlContent([
          new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(loginBar)).render(),
          new HtmlElement("div", { id: "rightBar", className: "rightBar" }, "").render()
        ], "div", "content", "app")
      } else {
        bodyContent = new HtmlContent([
          new HtmlElement("div", { id: "leftBar", className: "leftBar" }, String(registerBar)).render(),
          new HtmlElement("div", { id: "rightBar", className: "rightBar" }, "").render()
        ], "div", "content", "app")
      }
    }
    bodyContent.render()

    screen.innerHTML = String(bodyContent)
  }, 1000)
}

const startPolling = (wait) => {
  window.scratchssenger.polling = new Worker('./polling.js')
}

export { createApp as default, startPolling }
