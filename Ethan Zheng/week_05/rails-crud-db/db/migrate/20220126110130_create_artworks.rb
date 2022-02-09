class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :name
      t.integer :year
      t.string :artist
      t.string :image_url
      t.string :tags
    end
  end
end
