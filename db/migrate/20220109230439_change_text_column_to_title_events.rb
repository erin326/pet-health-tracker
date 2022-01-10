class ChangeTextColumnToTitleEvents < ActiveRecord::Migration[6.1]
  def up
    rename_column :events, :text, :title
  end

  def down 
    rename_column :events, :title, :text
  end
end
