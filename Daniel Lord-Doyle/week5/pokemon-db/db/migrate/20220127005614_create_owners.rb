class CreateOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :owners do |t|
      t.string :name
      t.integer :age
      t.string :hometown
      t.integer :pokemon_owned
      t.boolean :champion
      t.text :image

      t.timestamps
    end
  end
end
