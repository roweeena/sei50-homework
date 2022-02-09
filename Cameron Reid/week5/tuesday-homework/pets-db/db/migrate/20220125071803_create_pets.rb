class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.text :image_url
      t.text :vaccinated
      t.text :favourite_food
      
    end
  end
end
