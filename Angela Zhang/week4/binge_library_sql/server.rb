require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query( sql )

    puts "===================================\n\n"
    puts sql
    puts "\n==================================="

    # a. Connect to database
    db = SQLite3::Database.new 'database.db'
    # a1. get results as an array of hashes
    db.results_as_hash = true
    # b. Execute an SQL command and save result
    results = db.execute sql
    # c. Close the connection (close the file)
    db.close

    results #implicit return
    
end #db_query

#Root Route
get '/' do

    "hello"
    erb :home
end # get/

#CREATE
# a.create index form 
get '/movies/new_movie' do

    erb :new_movie
end # get/movies

post '/movies' do
    
    insert_sql = "
        INSERT INTO movies( name, genre, original_language, status, rating, description,poster_url )
        VALUES (
            '#{ params[:name] }',
            '#{ params[:genre] }',
            '#{ params[:original_language] }',
            '#{ params[:status] }',
            #{ params[:rating] },
            '#{ params[:description] }',
            '#{ params[:poster_url] }'
        );
    "
    db_query insert_sql 

    redirect '/movies'
end # post'/movies'


get '/dramas/new_drama' do

    erb :new_drama
end # get/movies

post '/dramas' do
    
    insert_sql = "
        INSERT INTO dramas( name, genre, original_language, status, rating, description,poster_url )
        VALUES (
            '#{ params[:name] }',
            '#{ params[:genre] }',
            '#{ params[:original_language] }',
            '#{ params[:status] }',
            #{ params[:rating] },
            '#{ params[:description] }',
            '#{ params[:poster_url] }'
        );
    "
    db_query insert_sql 

    redirect '/dramas'
end # post'/dramas'




#READ
#index of movies
get '/movies' do
    @movies = db_query "SELECT * FROM movies;"
    
    erb :movies
end # get/movies

#filter through status
get '/movies/watched' do
    @movies_filter_watched = db_query "SELECT * FROM movies WHERE status='Watched' GROUP BY status ;"
    
    erb :movies
end # get/movies/watched


get '/movies/:id' do

    @movie_info = db_query "SELECT * FROM movies WHERE id= #{ params[:id] } "

    @movie_info = @movie_info.first

    erb :show_movies

end


get '/dramas' do
    @dramas = db_query "SELECT * FROM dramas;"
    
    erb :dramas
end # get/dramas

get '/dramas/:id' do

    @drama_info = db_query "SELECT * FROM dramas WHERE id= #{ params[:id] } "

    @drama_info = @drama_info.first

    erb :show_drama

end






#UPDATE

get '/movies/:id/edit' do
    @movie_info = db_query "SELECT * FROM movies WHERE id = #{ params[:id]};"
    @movie_info = @movie_info.first 
    
    erb :edit_movie

end #get  /movies/:id/edit

post '/movies/:id' do
    
    update_sql = "
        UPDATE movies SET
            name = '#{ params[:name] }',
            genre = '#{ params[:genre] }',
            original_language = '#{ params[:original_language] }',
            status = '#{ params[:status] }',
            rating = #{ params[:rating] },
            description = '#{ params[:description] }',
            poster_url = '#{ params[:poster_url] }'
            WHERE id = #{ params[:id] };
        "
    db_query update_sql 

    redirect "/movies/#{ params[:id] }" # Go to show page for the edited item
end


get '/dramas/:id/edit' do
    @drama_info = db_query "SELECT * FROM dramas WHERE id = #{ params[:id]};"
    @drama_info = @drama_info.first 
    
    erb :edit_drama

end #get  /dramas/:id/edit

post '/dramas/:id' do
    
    update_sql = "
        UPDATE dramas SET
            name = '#{ params[:name] }',
            genre = '#{ params[:genre] }',
            original_language = '#{ params[:original_language] }',
            status = '#{ params[:status] }',
            rating = #{ params[:rating] },
            description = '#{ params[:description] }',
            poster_url = '#{ params[:poster_url] }'
            WHERE id = #{ params[:id] };
        "
    db_query update_sql 

    redirect "/dramas/#{ params[:id] }" # Go to show page for the edited item
end


#DELETE

get '/movies/:id/delete' do
    db_query "DELETE FROM movies WHERE id= #{ params[:id] };"
    redirect '/movies' #back to index
end

get '/dramas/:id/delete' do
    db_query "DELETE FROM dramas WHERE id= #{ params[:id] };"
    redirect '/dramas' #back to index
end