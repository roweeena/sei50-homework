class CreateSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :snacks do |t|

      t.string :name # a string type column for the planet name
      t.text :image_url
      t.text :review
      t.integer :rate
    end
  end
end