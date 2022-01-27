class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :name
      t.date :date
      t.text :genre
      t.text :image
      t.integer :author_id

      t.timestamps
    end
  end
end
