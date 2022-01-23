require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',  
    database: 'database.db' 
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
  ActiveRecord::Base.connection.close
end

class Album < ActiveRecord::Base
    belongs_to :artist  
end 

class Artist < ActiveRecord::Base
    has_many :albums 
end



# HOME
get '/' do
    erb :home
end

# CREATE
get '/albums/new' do
    erb :new_album
end

post '/albums' do
    Album.create(
        name: params[:name],
        artist_id: params[:artist_id],
        genre: params[:genre],
        description: params[:description],
        release: params[:release],
        album_art: params[:album_art],
        grammy_winner: params[:grammy_winner]
    )
    redirect '/albums'
end

# READ
get '/albums' do # show all albums
    @results = Album.all
    erb :album_index
end

get '/albums/:id' do # show each albums info
    @album = Album.find params[:id]
    erb :show_album
end

# UPDATE
get '/albums/:id/edit' do
    @album = Album.find params[:id]
    erb :album_edit 
end

post '/albums/:id' do
    album = Album.find params[:id]
    Album.create(
        name: params[:name],
        artist_id: params[:artist_id],
        genre: params[:genre],
        description: params[:description],
        release: params[:release],
        album_art: params[:album_art],
        grammy_winner: params[:grammy_winner]
    )
    redirect "/albums/#{params[:id]}"
end

# DELETE

get '/albums/:id/delete' do
    Album.destroy params[:id]
    redirect '/albums'
end

# CREATE
get '/artists/new' do
    erb :artist_new
end

post '/artists' do
    Artist.create(
        name: params[:name],
        birth_year: params[:birth_year]
    );
    redirect '/artists'
end


# READ
get '/artists' do
    @artists = Artist.all
    erb :artist_index
end

get '/artists/:id' do
    @artist = Artist.find params[:id]
    erb :artist_show
end

# UPDATE

get '/artists/:id/edit' do
    @artist = Artist.find params[:id]
    erb :artist_edit 
end

post '/artists/:id' do
    artist = Artist.find params[:id]
    artist.update(
        name: params[:name],
        birth_year: params[:birth_year]
    );
    redirect "/artists/#{params[:id]}"
end

# DELETE

get '/artists/:id/delete' do
    Artist.destroy params[:id]
    redirect '/artists'
end

