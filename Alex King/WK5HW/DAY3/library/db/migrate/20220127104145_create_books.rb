class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :publish_date
      t.string :genre
      t.text :image
      t.text :bio
      t.integer :pages
      t.integer :writer_id

      t.timestamps
    end
  end
end
