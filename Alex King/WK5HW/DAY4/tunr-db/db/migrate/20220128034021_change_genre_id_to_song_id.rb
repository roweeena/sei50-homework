class ChangeGenreIdToSongId < ActiveRecord::Migration[5.2]
  def change
    rename_column :mixtapes_songs, :songs_id, :song_id
  end
end
