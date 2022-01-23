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
