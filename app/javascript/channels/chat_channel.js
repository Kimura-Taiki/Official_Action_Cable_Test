import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ChatChannel", room: "BestRoom" }, {
  received(data) {
    this.appendLine(data)
  },
  
  appendLine(data) {
    const html = this.createLine(data)
    const element = document.querySelector("[data-chat-room='BestRoom']")
    element.insertAdjacentHTML("beforeend", html)
  },
  
  createLine(data) {
    return `
      <article class="chat-line">
        <span class="speaker">${data["send_by"]}</span>
        <span class="body">${data["body"]}</span>
      </article>
    `
  }
})

// consumer.subscriptions.create({ channel: "ChatChannel", room: "1stRoom" })
// consumer.subscriptions.create({ channel: "ChatChannel", room: "2ndRoom" })