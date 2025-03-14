class Auth::SessionsController < ApplicationController

    def index
        if current_user
          render json: { is_login: true, data: current_user }
        else
          render json: { is_login: false, message: "ユーザーは存在しません" }
        end
      end

end
