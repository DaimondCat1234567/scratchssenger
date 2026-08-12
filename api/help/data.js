const project = "scratchssenger"
const projectGroup = "dcg"
const root = "/"
const repository = "https://github.com/scrajang-studios/scratchssenger/"
const releaseStart = `${repository}archive/refs/tags/`
const pathChats = `${root}chats`
const pathUsers = `${root}users`
const chatsIndex = `${pathChats}/index.json`
const usersIndex = `${pathUsers}/index.json`
const rawRepo = "https://raw.githubusercontent.com/scrajang-studios/scratchssenger/refs/heads/main/"
const sobuildStart = `${rawRepo}sodesktop/builds/`

export {
  project,
  projectGroup,
  root,
  repository,
  releaseStart,
  pathChats,
  pathUsers,
  chatsIndex,
  usersIndex,
  rawRepo,
  sobuildStart
}
