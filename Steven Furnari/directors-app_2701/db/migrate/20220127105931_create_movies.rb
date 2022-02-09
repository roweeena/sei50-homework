class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :director_id
      t.integer :released
      t.integer :boxoffice
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
