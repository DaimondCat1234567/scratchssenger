import { read, write } from "../apis/db.js"
import { chatsIndex, usersIndex } from "../help/data.js"
import { User, Result, Session } from "../help/class.js"

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const { login, password } = req.body

  let indexUsers = JSON.parse(await read(usersIndex))
  if (!Object.keys(indexUsers).includes(login)) {
    res.status(403).json({ ok: false, error: "account not found" })
  }
  const allowedSymbols = /^[a-z0-9_-]+$/
  if (!allowedSymbols.test(login)) {
    res.status(400).json({ ok: false, error: "Unsupported symbols", "supported": "a-z, A-Z, 0-9, _, -" })
  }
  if (login.length < 3 || login.length > 23) {
    res.status(400).json({ ok: false, error: "account length limit" })
  }
  const user = new User(indexUsers[login])
  user.session = await new Session({ user: user.username }).token()
  indexUsers[login] = user.JSON
  await write(usersIndex, indexUsers)

  res.status(200).json(new Result(true, { id: user.id, session: user.session }).result);
}
