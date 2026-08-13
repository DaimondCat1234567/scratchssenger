import { genHash, checkHash } from "./hash.js"

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
  async checkSession() {
    return await this.session.check()
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
class Message {}
class Chat {
  constructor (json) {
    this.name = json.name || "Unknown Chat"
    this.username = json.username || "unknown"
    this.id = json.id || null
    this.type = json.type || "group"
    this.members = json.members || []
    this.isE2EE = json.isE2EE || true
    this.accessType = json.accessType || "private"
    this.admins = json.admins || []
    this.messages = json.messages || []
  }
  JSON () {
    return {
      name: this.name,
      username: this.username,
      id: this.id,
      type: this.type,
      members: this.members,
      isE2EE: this.isE2EE,
      accessType: this.accessType,
      admins: this.admins,
      messages: this.messages
    }
  }
}
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
    this.active = data?.active || 7 * 24 * 60 * 60
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
  async check () {
    return await checkHash(this)
  }
  toString () {
    return `ScratchssengerSession(${this.user})`
  }
}

export { User, Chat, Result, Session }
