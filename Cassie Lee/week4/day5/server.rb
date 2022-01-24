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

class Cast < ActiveRecord::Base
    belongs_to :movie
end

class Movie < ActiveRecord::Base
    has_many :casts
end


# root route 
get '/' do
    @results =  Movie.all
    erb :home
end # root end 

# add new form 
get '/movies/new' do

    erb :new
end # get/movies/new 

# form submits 
post '/movies' do
    Movie.create(
        title: params[:title],
        release: params[:release],
        duration: params[:duration],
        rating: params[:rating],
        image_url: params[:image_url],
        video_url: params[:video_url]
    )

    redirect '/movies'
end #post/movies

# index of all movies 
get '/movies' do
    @results =  Movie.all
    erb :index
end #get/movies 

# details of movies 
get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :moviedetail
end # get/movies/:id

 # edit details of movie 
get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :edit
end # get/movies/:id/edit

# update form 
post '/movies/:id' do
    #load the row into an object
    movie = Movie.find params[:id]
    #provide all key-values to update from params (comes from form submission)
    movie.update(
        title: params[:title],
        release: params[:release],
        duration: params[:duration],
        rating: params[:rating],
        image_url: params[:image_url],
        video_url: params[:video_url]

    )
    redirect "/movies/#{ params[:id] }"

end#post/movies/:id

#delete 
get '/movies/:id/delete' do
    Movie.destroy params[:id]
    redirect '/movies'
end #get/movies/:id/delete


###########################################################

#blank form for add casts
get '/casts/new' do
    erb :cast_new
end #get/casts/new

# form submission 
post '/casts' do
    Cast.create(
        name: params[:name],
        born: params[:born],
        awards: params[:award],
        image_url: params[:image_url]
    )

    redirect '/casts'

end #post/casts

#index of all casts
get '/casts' do
    @casts = Cast.all
    erb :cast_list
end #get/casts

#page of casts details 
get '/casts/:id' do
    @cast = Cast.find params[:id]
    erb :cast_detail
end #get/casts/:id


get '/casts/:id/edit' do
    # @casts = Cast.all
    @cast = Cast.find params[:id]

    erb :cast_edit

end

post '/casts/:id' do
    cast = Cast.find params[:id]
    cast.update(
        name: params[:name],
        born: params[:born],
        awards: params[:award],
        image_url: params[:image_url]
    )

    redirect "/casts/#{ params[:id] }"

end

#delete
get '/casts/:id/delete' do
    Cast.destroy params[:id]
    redirect '/casts'
end #get '/casts/:id/delete'