setTimeout(async () => {
    const oSession = await fetch("https://dcgapi.loca.lt/scratchssenger/session/", {
        method: "POST",
        body: JSON.stringify({
            login: localStorage.getItem("login"),
            session: localStorage.getItem("session")
        })
    })
    window.ScratchssengerData.isLogin = oSession.ok
    const session = await(oSession).json()
    const chats = await(await fetch("https://dcgapi.loca.lt/scratchssenger/session/chats/", {
        method: "POST",
        body: JSON.stringify({
            login: localStorage.getItem("login"),
            session: localStorage.getItem("session")
        })
    })).json()
}, wait * 1000)