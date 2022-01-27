class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :movement
      t.text :image

      t.timestamps
    end
  end
end
