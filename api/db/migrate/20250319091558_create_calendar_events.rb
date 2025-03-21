class CreateCalendarEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_events do |t|
      t.string      :title
      t.string      :description
      t.string      :start_date
      t.string      :end_date
      t.references  :user, foreign_key: true
      t.timestamps
    end
  end
end
