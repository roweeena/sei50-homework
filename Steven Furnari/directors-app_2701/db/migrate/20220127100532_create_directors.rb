class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.string :name
      t.date :dob
      t.string :nationality
      t.text :bio
      t.text :photo

      t.timestamps
    end
  end
end
