class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.integer :weight
      t.string :type_of_pet
      t.string :health_issues
      t.string :sex
      t.string :image_url

      t.timestamps
    end
  end
end
