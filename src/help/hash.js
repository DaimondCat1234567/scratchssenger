import { DB_URL, DB_SECRET } from "../help/env.js"

const genHash = async (meta) => {
  const hash = await (await fetch(`${DB_URL}/genHash`, {
    method: "POST",
    headers: {
      "bypass-tunnel-reminder": true
    },
    body: JSON.stringify({
      org: meta.org,
      user: meta.user,
      date: meta.date,
      active: meta.active,
      DB_SECRET
    })
  })).json()
  return hash.result
}

const checkHash = async (meta) => {
  const hash = await (await fetch(`${DB_URL}/checkHash`, {
    method: "POST",
    headers: {
      "bypass-tunnel-reminder": true
    },
    body: JSON.stringify({
      org: meta.org,
      user: meta.user,
      hash: meta.hash,
      DB_SECRET
    })
  })).json()
  return hash.result
}

export { genHash, checkHash }
