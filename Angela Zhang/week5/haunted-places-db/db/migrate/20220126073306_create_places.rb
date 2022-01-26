class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string  :name
      t.string  :location
      t.string  :built
      t.integer :ghosts_num
      t.string  :ghost_name
      t.text    :ghost_description
      t.text    :image_url

    end
  end
end
