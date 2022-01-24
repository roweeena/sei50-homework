require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(sql)
    db=SQLite3::Database.new 'database.db'
    db.results_as_hash=true
    result=db.execute sql
    db.close
    return result
end
get '/albums/new' do
    erb :new
end


post '/albums' do
    insert_sql = "
      INSERT INTO albums( album_name, artist, genre, released_year, explicity, album_cover )
      VALUES (
          '#{params[:album_name]}',
          '#{params[:artist]}',
          '#{params[:genre]}',
          #{params[:released_year]},
          #{params[:explicity]},
          '#{params[:album_cover]}'
          
      );
    "
        db_query insert_sql
    redirect '/albums'
end

get '/' do
    erb :home
end

get '/albums' do
    @results=db_query "SELECT * FROM albums ORDER BY released_year;"
    erb :shelf 
end

get '/albums/:id' do
    @album=db_query "SELECT * FROM albums WHERE id=#{ params[:id]};"
    @album=@album.first
    erb :detail
end
get '/albums/:id/edit' do
    @album=db_query "SELECT * FROM albums WHERE id=#{ params[:id]};"
    @album = @album.first
    erb :edit 
end
post '/albums/:id' do
    update_sql = "
    UPDATE albums SET
        album_name='#{params[:album_name]}',
        artist='#{params[:artist]}',
        genre='#{params[:genre]}',
        released_year=#{params[:released_year]},
        explicity=#{params[:explicity]},
        album_cover='#{params[:album_cover]}'
    WHERE id = #{params[:id]};
  "
    db_query update_sql
    redirect "/albums/#{params[:id]}"
end
get '/albums/:id/delete' do
    
    db_query "DELETE FROM albums WHERE id= #{ params[:id]};"
    redirect '/albums'
end
