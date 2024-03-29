module ApplicationCable
  class Connection < ActionCable::Connection::Base
    indetified_by :current_user
    rescue_from StandardError, with: :report_error

    def connect
      self.current_user = find_verified_user
    end

    private
    def find_verified_user
      if verified_user = User.find_by(id: cookies.emcrypted[:user_id])
        verified_user
      else
        reject_unauthorized_connection
      end
    end

    def report_error(e)
      SomeExternalBugtrackingService.notify(e)
    end
  end
end
