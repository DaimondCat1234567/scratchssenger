let wait = 5
let LocalData = {}
let localStorage = {
    login: "",
    session: ""
}

try {
    setTimeout(async () => {
        const oSession = await fetch("https://dcgapi.loca.lt/scratchssenger/session/", {
            method: "POST",
            body: JSON.stringify({
                login: localStorage.login,
                session: localStorage.session
            })
        })
        LocalData.isLogin = oSession.ok
        const session = await(oSession).json()
        const chats = await(await fetch("https://dcgapi.loca.lt/scratchssenger/session/chats/", {
            method: "POST",
            body: JSON.stringify({
                login: localStorage.login,
                session: localStorage.session
            })
        })).json()
        LocalData.session = session
        LocalData.chats = chats
        self.postMessage({
            type: "updateData",
            data: LocalData
        })
    }, wait * 1000)
} catch (error) {
    self.postMessage({
        type: "error",
        error
    })
}
self.onmessage = (data) => {
    if (data.type === "setWait") {
        wait = data.wait
    }
    if (data.type === "localStorage") {
        localStorage[data.key] = data.value
    }
}