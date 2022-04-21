// Action CableはRailsでWebSocketを扱うフレームワークを提供する
// WebSocketがある場所で"bin/rails generate channel"コマンドを使うと新しいチャンネルを生成できる

import { createConsumer } from "@rails/actioncable"

export default createConsumer()