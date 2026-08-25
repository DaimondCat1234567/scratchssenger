import { elements, translations, language, HtmlElement, HtmlContent, HtmlComponent, Transtation } from "./render.js"
import { AppName } from "../metadata.js"
import { ButtonComponent, DateComponent, MessageComponent } from "./ui-components.js"
import genTranslations from "./translations.js"

translations.ru = genTranslations("russian")

window.ScratchssengerData = {}
window.scratchssenger = {}

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
      new HtmlElement("h1", { style: "text-align: center" }, new Transtation("login.label", "Login").result).render(),
      new HtmlElement("label", { for: "username" }, "Username: ").render(),
      new HtmlElement("input", { id: "username" }, "").render(),
      new HtmlElement("label", { for: "password" }, "<br>Password: ").render(),
      new HtmlElement("input", { id: "password", type: "password" }, "").render(),
      new HtmlElement("button", { onclick: handleLogin }, new Transtation("login.button", "Login").result).render(),
      new HtmlElement("button", { onclick: handleLoginToRegister }, new Transtation("login.regbutton", "Create account").result).render()
    ], "div")
    registerBar = new HtmlContent([
      new HtmlElement("h1", { style: "text-align: center" }, new Transtation("register.label", "Register").result).render(),
      new HtmlElement("label", { for: "username" }, "Username: ").render(),
      new HtmlElement("input", { id: "username" }, "").render(),
      new HtmlElement("label", { for: "password" }, "<br>Password: ").render(),
      new HtmlElement("input", { id: "password", type: "password" }, "").render(),
      new HtmlElement("button", { onclick: handleRegister }, new Transtation("register.button", "Register").result).render(),
      new HtmlElement("button", { onclick: handleRegisterToLogin }, new Transtation("register.loginbutton", "Login account").result).render()
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

window.scratchssenger.polling = new Worker('./js/web-client/polling.js')
window.scratchssenger.polling.postMessage({ type: "setWait", wait: 5 })
window.scratchssenger.polling.postMessage({ type: "localStorage.set", key: "login", value: localStorage.getItem("login") })
window.scratchssenger.polling.postMessage({ type: "localStorage.set", key: "session", value: localStorage.getItem("session") })
window.scratchssenger.polling.onmessage = (data) => {
  console.log("new Message")
  console.log(data)
  if (data.type === 'error') {
    console.error(data.error)
    alert(data.error.message)
  } else if (data.type === 'dataUpdate') {
    window.ScratchssengerData.isLogin = data.data.isLogin
    window.ScratchssengerData.session = data.data.session
    window.ScratchssengerData.chats = data.data.chats
  }
}

export { createApp as default }
