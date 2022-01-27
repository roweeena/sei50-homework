class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.date :manufacture_date
      t.boolean :registered
      t.integer :cool_factor
      t.text :image
      t.integer :driver_id

      t.timestamps
    end
  end
end
