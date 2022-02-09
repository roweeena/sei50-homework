class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :players
      t.text :logo
      t.string :coach
      t.string :captain
      t.string :sponsor
      t.integer :league_id
      t.timestamps
    end
  end
end
