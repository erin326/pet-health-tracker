class CreateHealthLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :health_logs do |t|
      
      t.integer :pet_id
      t.string :changes 
      t.timestamps
    end
  end
end
