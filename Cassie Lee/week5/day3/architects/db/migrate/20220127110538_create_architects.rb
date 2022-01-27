class CreateArchitects < ActiveRecord::Migration[5.2]
  def change
    create_table :architects do |t|
      t.string :name
      t.date :dob
      t.string :nationality
      t.text :image
      

      t.timestamps
    end
  end
end
