require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(sql)

    db = SQLite3::Database.new 'database.db' 
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results
end

get '/' do
    erb :home
end

get '/bradpitt/new' do

    erb :new
end


post '/bradpitt' do
"form sumit route"
    insert_sql = "
        INSERT INTO bradpitt (title, release, duration, overview, rating, role, image_url)
        VALUES (
            '#{ params[:title] }',
            #{ params[:release] },
            '#{ params[:duration] }',
            '#{ params[:overview] }',  
            #{ params[:rating] },  
            '#{ params[:role] }',  
            '#{ params[:image_url] }'
        );
    "

db_query insert_sql
redirect '/bradpitt'

end


#index of all list of movies
get '/bradpitt' do

    @results = db_query "SELECT * FROM bradpitt;"

    erb :movies
end

get '/bradpitt/:id' do
    @movie = db_query "SELECT * FROM bradpitt WHERE id = #{ params[:id] };"
    @movie = @movie.first

    erb :moviedetail
end


get '/bradpitt/:id/edit' do

    @movie = db_query "SELECT * FROM bradpitt WHERE id = #{ params[:id] };"
    @movie = @movie.first

    erb :edit

end

post '/bradpitt/:id' do
    update_sql = "
        UPDATE pets SET
            title = '#{ params[:title] }',
            release = #{ params[:release] },
            duration = '#{ params[:duration] }',
            overview = '#{ params[:overview] }',  
            rating = #{ params[:rating] },  
            rold = '#{ params[:role] }',  
            image_url = '#{ params[:image_url] }'
        WHERE id = #{ params[:id] };
    "

    db_query update_sql

    redirect "/bradpitt/#{ params[:id] }"

end




