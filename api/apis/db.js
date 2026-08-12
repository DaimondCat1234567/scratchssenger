import { DB_URL, DB_SECRET } from "../help/env.js"
import { project, root, pathChats, pathUsers } from "../help/data.js"

const connect = async () => {
  const connecT = await (await fetch(`https://${DB_URL}/connect`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringtify({
      DB_SECRET,
      group: "DCG",
      project: "scratchssenger"
    })
  })).json()
  return connecT
}

export { connect }
