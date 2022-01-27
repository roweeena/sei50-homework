class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.text :name
      t.text :location
      t.integer :teams
      t.text :season
      t.date :date_start
      t.timestamps
    end
  end
end
