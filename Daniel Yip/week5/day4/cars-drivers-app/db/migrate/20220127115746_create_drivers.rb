class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.string :name
      t.date :dob
      t.boolean :licenced
      t.text :image
      t.timestamps
    end
  end
end
