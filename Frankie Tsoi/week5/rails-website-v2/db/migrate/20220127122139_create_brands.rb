class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.string :year
      t.text :location
      t.text :image

      t.timestamps
    end
  end
end
