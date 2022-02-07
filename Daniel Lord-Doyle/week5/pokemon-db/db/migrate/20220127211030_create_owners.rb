class CreateOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :jap_name
      t.integer :age
      t.string :gender
      t.string :eye_colour
      t.string :hair_colour
      t.string :hometown
      t.string :region
      t.string :specializes_in
      t.string :anime_debut
      t.string :image

      t.timestamps
    end
  end
end
