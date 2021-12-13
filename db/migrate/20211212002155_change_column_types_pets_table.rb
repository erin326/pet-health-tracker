class ChangeColumnTypesPetsTable < ActiveRecord::Migration[6.1]
  def up
    change_column :pets, :weight, :integer, using: 'weight::integer'
    change_column :pets, :age, :integer, using: 'age::integer'
  end

  def down
    change_column :pets, :weight, :string
    change_column :pets, :age, :string

  end

end
