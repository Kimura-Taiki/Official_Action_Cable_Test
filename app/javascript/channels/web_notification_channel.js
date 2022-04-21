import consumer from "./consumer"

consumer.subscriptions.create("WebNotificationChannel", {
  recieved(data) {
    new Notification(data["title"], { body: data[:body] })
  }
})