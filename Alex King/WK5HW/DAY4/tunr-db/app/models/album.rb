class Album < ApplicationRecord
    has_many :songs

    has_many :artists, through: 'songs'

    def artist
        self.artists.uniq.first
    end # artist()

    def to_s
        " '#{self.title}' by #{self.artist.name} "
    end
    def song_titles
        self.songs.pluck(:title).join(', ')
    end
end # class Album 
