class AddForeignKeyToPets < ActiveRecord::Migration[6.1]
  def change
    add_column :pets, :user_id, :integer
  end
end
