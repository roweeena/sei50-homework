class CreateAnimes < ActiveRecord::Migration[5.2]
  def change
    create_table :animes do |t|

      t.string :title
      t.integer :release_year
      t.string :creator
      t.integer :episodes
      t.float :rating
      t.text :poster 

    end # create table
  end # change()
end # class CreateAnimes
