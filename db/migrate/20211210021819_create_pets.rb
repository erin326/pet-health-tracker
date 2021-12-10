class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :age
      t.string :weight
      t.string :type
      t.string :health_issues
      t.string :sex
      t.string :image_url

      t.timestamps
    end
  end
end
