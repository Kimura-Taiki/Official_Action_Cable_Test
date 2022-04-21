import consumer from "./consumer"

consumer.subscriptions.create({ channel: "AppearanceChannel" }, {
  // サブスクリプション時に１度呼び出される
  initialized() {
    this.update = this.update.bind(this)
  },

  // サブスクリプションがサーバーで利用可能になると呼び出される
  connected() {
    this.install()
    this.update()
  },

  // WebSocket接続がクローズすると呼び出される
  disconnected() {
    this.uninstall()
  },

  // サブスクリプションがサーバーで却下されると呼び出される
  rejected() {
    this.uninstall()
  },

  update() {
    this.documentIsActive ? this.appear() : this.away
  },

  appear() {
    // サーバーの`AppearanceChannel#appear(data)`を呼び出す
    this.perform("appear", { appearing_on: this.appearingOn })
  },

  away() {
    // サーバーの`AppearanceChannel#away`を呼び出す
    this.perform("away")
  },
  
  install() {
    window.addEventListener("focuns", this.update)
    window.addEventListener("blur", this.update)
    document.addEventListener("turbolinks:load", this.update)
    document.addEventListener("visibilitychange", this.update)
  },
  
  uninstall() {
    window.removeEventListener("focuns", this.update)
    window.removeEventListener("blur", this.update)
    document.removeEventListener("turbolinks:load", this.update)
    document.removeEventListener("visibilitychange", this.update)
  },
  
  get documentIsActive() {
    return document.visibilityState === "visible" && document.hasFocus()
  },
  
  get appearingOn() {
    const element = document.querySelector("[data-appearing-on]")
    return element ? element.getAttribute("data-appearing-on") : null
  }
})