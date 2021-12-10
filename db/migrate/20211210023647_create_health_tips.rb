class CreateHealthTips < ActiveRecord::Migration[6.1]
  def change
    create_table :health_tips do |t|
      t.string :text 

      t.timestamps
    end
  end
end
