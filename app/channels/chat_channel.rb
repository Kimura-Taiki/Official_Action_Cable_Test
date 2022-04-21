class ChatChannel < ApplicationCable::Channel
  rescue_from "MyError", with: :deliver_error_message
    
  # コンシューマーがこのチャンネルのサブスクライバーになると
  # このコードが呼び出される
  def subscribed
    stream_from "chat_#{params[:room]}"
  end
  
  private
  def deliver_error_message(e)
    broadcast_to("...")
  end
end
