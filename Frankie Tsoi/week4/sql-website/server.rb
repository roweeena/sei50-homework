require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'



def db_query(sql)

  puts'-----------------------------'
  puts sql
  puts'-----------------------------'
  
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    results = db.execute sql
    db.close
    results

end #db_quary


get '/' do #homepage
  # "hello from root"
  erb :home
end

#Create
get '/gundams/new' do
  erb :new
end

post '/gundams' do
  insert_sql ="
  INSERT INTO gundams(name, model_number, pilot, designer, power_sources, height, image_url)
  VALUES (
    '#{params[:name]}',
    '#{params[:model_number]}',
    '#{params[:pilot]}',
    #{params[:designer]},
    #{params[:power_sources]},
    #{params[:height]},
    '#{params[:image_url]}'
  );
  "
  db_query insert_sql

  redirect '/gundams'
 end 

#READ
get '/gundams' do

  @results = db_query "SELECT * FROM gundams ORDER BY name;"

  erb :index
end 

get '/gundams/:id' do 
  
  @gundams = db_query "SELECT * FROM gundams WHERE id = #{params[:id]} ;"
  @gundams = @gundams.first 

  erb :show
end

#Update

get'/gundams/:id/edit' do

  @gundams = db_query "SELECT * FROM gundams WHERE id = #{params[:id]} ;"
  @gundams = @gundams.first 
  erb :edit
end

post '/gundams/:id' do
  insert_sql ="
  UPDATE gundams SET
    name = '#{params[:name]}',
    model_number = '#{params[:model_number]}',
    pilot = '#{params[:pilot]}',
    designer = #{params[:designer]},
    power_sources = #{params[:power_sources]},
    height = #{params[:height]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
  "
  db_query insert_sql

  redirect "/gundams/#{params[:id]}"
 end 

 #Delete
 get '/gundams/:id/delete' do

  db_query "DELETE FROM gundams WHERE id = #{params[:id]};"
  redirect '/gundams' #back to index page

end