class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :name
      t.text :body_type
      t.text :model
      t.float :price
      t.text :image

      t.integer :brand_id

      t.timestamps
    end
  end
end
