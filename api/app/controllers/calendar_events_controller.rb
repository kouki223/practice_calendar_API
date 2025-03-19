class CalendarEventsController < ApplicationController

  before_action :authentivate_user!

  def index
    user_id = current_user.id
    calendar_events = CalendarEvent.where(user_id: user_id)
    render json: calendar_events
  end

end
