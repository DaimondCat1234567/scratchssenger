try {
    let LocalData = {}
    setTimeout(async () => {
        const oSession = await fetch("https://dcgapi.loca.lt/scratchssenger/session/", {
            method: "POST",
            body: JSON.stringify({
                login: localStorage.getItem("login"),
                session: localStorage.getItem("session")
            })
        })
        LocalData.isLogin = oSession.ok
        const session = await(oSession).json()
        const chats = await(await fetch("https://dcgapi.loca.lt/scratchssenger/session/chats/", {
            method: "POST",
            body: JSON.stringify({
                login: localStorage.getItem("login"),
                session: localStorage.getItem("session")
            })
        })).json()
        LocalData.session = session
        LocalData.session = chats
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