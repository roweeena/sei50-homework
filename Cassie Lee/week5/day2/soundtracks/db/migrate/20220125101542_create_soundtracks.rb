class CreateSoundtracks < ActiveRecord::Migration[5.2]
  def change
    create_table :soundtracks do |t|
      t.string :title
      t.string :artists
      t.string :nomination
      t.string :release
      t.string :songs
      t.text :link_url
      t.text :image_url


    end
  end
end
