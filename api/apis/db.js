import { DB_URL, DB_SECRET } from "../help/env.js"
import { project, projectGroup, root, pathChats, pathUsers } from "../help/data.js"

const connect = async () => {
  const connecT = await (await fetch(`https://${DB_URL}/connect`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "bypass-tunnel-reminder": "true"
    },
    body: JSON.stringtify({
      DB_SECRET,
      projectGroup,
      project
    })
  })).json()
  return connecT
}

const read = async (path) => {
  const connecT = await (await fetch(`https://${DB_URL}/files/read/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "bypass-tunnel-reminder": "true"
    },
    body: JSON.stringtify({
      DB_SECRET,
      projectGroup,
      project,
      path
    })
  })).json()
  return connecT.result
}

const write = async (path, newContent) => {
  const connecT = await (await fetch(`https://${DB_URL}/files/write/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "bypass-tunnel-reminder": "true"
    },
    body: JSON.stringtify({
      DB_SECRET,
      projectGroup,
      project,
      path,
      newContent
    })
  })).json()
  return connecT.result
}

export { connect, read, write }
