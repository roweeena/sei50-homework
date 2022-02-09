class GenreIdToSongId < ActiveRecord::Migration[5.2]
  def change
    rename_column :mixtapes_songs, :genre_id, :song_id
  end
end
