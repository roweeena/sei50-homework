class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|

      t.string  :name
      t.string  :founded
      t.integer :premierships
      t.boolean :still_active
      t.text    :logo_url

    end
  end
end
