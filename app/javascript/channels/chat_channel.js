import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ChatChannel", room: "BestRoom" })

// consumer.subscriptions.create({ channel: "ChatChannel", room: "1stRoom" })
// consumer.subscriptions.create({ channel: "ChatChannel", room: "2ndRoom" })