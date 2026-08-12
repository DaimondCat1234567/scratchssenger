import { DB_URL, DB_SECRET } from "../help/env.js"

const genHash = async (meta) => {
  const hash = await (await fetch(`${DB_URL}/genHash`, {
    method: "GET",
    body: JSON.stringtify({
      org: meta.org,
      user: meta.user,
      date: meta.date,
      active: meta.active,
      DB_SECRET
    })
  })).json()
  return hash.result
}

export { genHash }
