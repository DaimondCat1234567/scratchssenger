import { genHash } from "./hash.js"

class User {
  constructor (json) {
    this.username = json.username || "unknown"
    this.password = json.password || ""
    this.id = json.id || null
    this.session = json.session || new Session({ user: json.username })
    this.groups = json.groups || []
    this.role = json.role || "user"
    this.joined = json.joined || String(new Date())
    this.active = json.active || String(new Date())
  }
  async setToken() {
    this.session = await this.session.token()
  }
  JSON () {
    return {
      username: this.username,
      password: this.password,
      id: this.id,
      session: this.session,
      groups: this.groups,
      role: this.role,
      joined: this.joined,
      active: this.active
    }
  }
  newActive () {
    this.active = String(new Date())
  }
}
class Chat {}
class Result {
  constructor (ok, other) {
    this.result = {
      ok,
      ...other
    }
  }
}
class Session {
  constructor (data) {
    this.date = data?.date || new Date()
    this.user = data?.user || "unknown"
    this.active = data?.active || "7d"
    this.org = "DCG"
  }
  Export () {
    return {
      date: this.date,
      user: this.user,
      active: this.active
    }
  }
  async token () {
    return await genHash(this)
  }
  toString () {
    return `ScratchssengerSession(${this.user})`
  }
}

export { User, Chat, Result, Session }
