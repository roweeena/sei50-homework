require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

#Setting up the database- activerecord

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
    ActiveRecord::Base.connection.close
end


class Movie < ActiveRecord::Base
    belongs_to :studio
end

class Studio < ActiveRecord::Base
    has_many :movies
end


get '/' do

erb :home
end

#CREATE

# 1. New Movie form

get '/movies/new' do
    
    erb :new_movie
end

#submits
post '/movies' do
    Movie.create(
    name: params[:name],
    genre: params[:genre],
    release_year: params[:release_year],
    overview: params[:overview],
    poster_url: params[:poster_url]
    );
    redirect '/movies'
end


#READ
# 1. SHOW movie INDEX 
get '/movies' do
    @results = Movie.all

    erb :index_movies
end # get'/movies'

# 2. SHOW individual Movie detail
get '/movies/:id' do
    @movie = Movie.find params[:id]

    erb :show_movie
end # get'movies/:id'


# require 'pry'
# binding.pry

#UPDATE

get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :edit_movie
end

post '/movies/:id' do
    movie = Movie.find params[:id],

    movie.update(
    name: params[:name],
    genre: params[:genre],
    release_year: params[:release_year],
    overview: params[:overview],
    poster_url: params[:poster_url]
    );
    redirect "/movies/#{ params[:id]}"
end



#DELETE

get '/movies/:id/delete' do

    Movie.destroy params[:id]
    redirect '/movies'
end


#######################################################
#######################################################
#######################################################
#######################################################

#OWNERS

#CREATE
# 1. New Studio form

get '/studios/new' do
    erb :new_studio
end

#submits
post '/studios' do
    Studio.create(
    name: params[:name],
    foundation_year: params[:foundation_year],
    founders: params[:founders],
    headquarters: params[:headquarters],
    website: params[:website],
    studio_logo: params[:studio_logo]
    );
    redirect '/studios'
end

#READ
# 1. SHOW studios INDEX 
get '/studios' do
    @results = Studio.all

    erb :index_studios
end # get'/studios'

# 2. SHOW individual Studio detail
get '/studios/:id' do
    @studio = Studio.find params[:id]

    erb :show_studio
end # get'studios/:id'

#UPDATE

get '/studios/:id/edit' do
    @studio = Studio.find params[:id]
    erb :edit_studio
end

post '/studios/:id' do
    studio = Studio.find params[:id],

    studio.update(
    name: params[:name],
    genre: params[:genre],
    release_year: params[:release_year],
    overview: params[:overview],
    poster_url: params[:poster_url]
    );
    redirect "/studios/#{ params[:id]}"
end



#DELETE

get '/studios/:id/delete' do

    Studio.destroy params[:id]
    redirect '/studios'
end
