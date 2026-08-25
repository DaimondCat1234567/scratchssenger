let root = document.body
let elements = {}
let translations = {
  ru: {}
}
let language = "en"
class HtmlElement {
  constructor (name, params, content) {
    this.element = document.createElement(name)
    this.params = params
    this.paramsKeys = Object.keys(params)
    this.element.innerHTML = content
  }
  render () {
    for (let i = 0; i < this.paramsKeys.length; i++) {
      if (this.paramsKeys[i] !== "onclick" && this.paramsKeys[i] !== "class" && this.paramsKeys[i] !== "for") {
        this.element[this.paramsKeys[i]] = this.params[this.paramsKeys[i]]
      } else if (this.paramsKeys[i] === "class" || this.paramsKeys[i] === "for") {
        this.element.setAttribute(this.paramsKeys[i], this.params[this.paramsKeys[i]])
      } else if (this.paramsKeys[i] === "onclick") {
        this.element.onclick = this.params[this.paramsKeys[i]]
      }
    }
    return this.element
  }
}
class HtmlContent {
  constructor (content, element, divId, clasS, css, onclick) {
    this.element = document.createElement(element)
    this.content = content
    this.class = clasS
    this.id = divId
    this.css = css
    this.elName = element
    this.onclick = onclick
  }
  render () {
    for (let i = 0; i < this.content.length; i++) {
      this.element.appendChild(this.content[i])
    }
    if (this.class) this.element.className = this.class
    if (this.id) this.element.id = this.id
    if (this.css) this.element.style = this.css
    if (this.onclick) this.element.onclick = this.onclick
  }
  toString() {
    let content = `<${this.elName}`
    if (this.class) content = `${content} class="${this.class}"`
    if (this.id) content = `${content} id="${this.id}"`
    if (this.css) content = `${content} style="${this.css}"`
    if (this.onclick) content = `${content} onclick="${this.onclick}"`
    content = `${content}>${this.element.innerHTML}</${this.elName}>`
    return content
  }
}

class HtmlComponent {
  constructor (name, params) {
    this.name = name
    this.params = params
    this.element = elements[this.name]
  }

  render () {
    return new HtmlElement("span", { id: this.params.id, className: this.params.class || this.params.className }, this.element(params))
  }
}

class Transtation {
  constructor (id, def) {
    this.result = translations[language] ? (translations[language][id] ? translations[language][i] : def) : def
  }
}

export { root, elements, translations, language, HtmlElement, HtmlContent, HtmlComponent, Transtation }
