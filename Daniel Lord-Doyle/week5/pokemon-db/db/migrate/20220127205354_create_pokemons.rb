class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :description
      t.string :image_one
      t.string :image_two
      t.integer :pokedex_no
      t.string :pokemon_type
      t.integer :gender_ration
      t.integer :catch_rate
      t.float :height
      t.float :weight
      t.string :ability_one
      t.string :ability_two
      t.string :ability_three
      t.string :ability_four
      t.integer :owner_id

      t.timestamps
    end
  end
end
