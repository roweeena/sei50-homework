class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :level
      t.string :special_move
      t.text :image
      t.integer :owner_id

      t.timestamps
    end
  end
end
