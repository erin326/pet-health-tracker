class ChangeColumnNamesEvents < ActiveRecord::Migration[6.1]
  def up
    rename_column :events, :start_time, :start
    rename_column :events, :end_time, :end
  end

  def down
    rename_column :events, :start, :start_time
    rename_column :events, :end, :end_time
  end
end
