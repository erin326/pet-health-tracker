class AddTimesToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :start_time, :string
    add_column :events, :end_time, :string
  end
end
