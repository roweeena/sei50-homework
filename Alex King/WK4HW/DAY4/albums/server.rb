require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query (sql)

    puts "=======================", ""
    puts sql
    puts "", "======================="

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true 
    results = db.execute sql
    db.close
    results
end 

get '/' do
    erb :home
end 


get '/albums/new' do
    erb :new 
end

post '/albums' do
    insert_sql ="
    INSERT INTO records(name, artist, bio, genre, release_year, grammy_winner, image_url)
    VALUES (
        '#{params[:name]}',
        '#{params[:artist]}',
        '#{params[:bio]}',
        '#{params[:genre]}',
        #{params[:release_year]},
        #{params[:grammy_winner]},
        '#{params[:image_url]}'
    );
    "
    db_query insert_sql

    
    redirect '/albums'
end


get '/albums' do
    @results = db_query "SELECT * FROM records;"
    erb :albums
end

get '/albums/:id' do
    @album = db_query "SELECT * FROM records WHERE id = #{params[:id]};"
    @album = @album.first
    erb :display
end



get '/albums/:id/edit' do
    @album = db_query "SELECT * FROM records WHERE id = #{params[:id]};"
    @album = @album.first
    erb :edit
end

post '/albums/:id' do
    update_sql ="
    UPDATE records SET
        name = '#{params[:name]}',
        artist = '#{params[:artist]}',
        bio = '#{params[:bio]}',
        genre = '#{params[:genre]}',
        release_year = #{params[:release_year]},
        grammy_winner = #{params[:grammy_winner]},
        image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
    "

    db_query update_sql

    redirect "/albums/#{params[:id]}"

end

