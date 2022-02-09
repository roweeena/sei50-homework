class CreatePaintings < ActiveRecord::Migration[5.2]
  def change
    create_table :paintings do |t|

      t.string  :name
      t.string  :artist
      t.integer :price 
      t.integer :year
      t.text    :url


    end # create table
  end # change
end #class CreatePaintings
