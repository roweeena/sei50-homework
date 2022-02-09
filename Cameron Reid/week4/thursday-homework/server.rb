require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


def db_query ( sql )

  puts "=============================\n"
  puts sql
  puts "\n============================="
   # 1. connect to database
   db = SQLite3::Database.new 'database.db'

   # 1.a. get results as an array of hashes
   db.results_as_hash = true
 
   # 2. Execute an sql command and save result
   results = db.execute sql
 
   # 3. Close the connection (close the file)
   db.close

   results
end

get '/' do

  erb :home

end #end '/'

# create

get '/cocktails/new' do 
  erb :new

end

post '/cocktails' do

  insert_sql = "
  INSERT INTO cocktails( image_url, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, glass_type_url, description, garnish, steps )
  VALUES (
    '#{params[:image_url]}',
    '#{params[:name]}',
    '#{params[:ingredient1]}',
    '#{params[:ingredient2]}',
    '#{params[:ingredient3]}',
    '#{params[:ingredient4]}',
    '#{params[:ingredient5]}',
    '#{params[:glass_type_url]}',
    '#{params[:description]}',
    '#{params[:garnish]}',
    '#{params[:steps]}'
    );
  "

  db_query insert_sql

  redirect '/cocktails'
end # post /cocktails
# read

get '/cocktails' do
  @results = db_query "SELECT * FROM cocktails;"

  erb :index
end

get '/cocktails/:id' do 

  @drink = db_query "SELECT * FROM cocktails WHERE id = #{params[:id]};"
  
  @drink = @drink.first

  erb :show 
end

# update

get '/cocktails/:id/edit' do
  @drink = db_query "SELECT * FROM cocktails WHERE id = #{params[:id]};"

  @drink = @drink.first
  erb :edit

end

post '/cocktails/:id' do

  update_sql = "
  UPDATE cocktails SET
    image_url = '#{params[:image_url]}',
    name = '#{params[:name]}',
    ingredient1 = '#{params[:ingredient1]}',
    ingredient2 = '#{params[:ingredient2]}',
    ingredient3 = '#{params[:ingredient3]}',
    ingredient4 = '#{params[:ingredient4]}',
    ingredient5 = '#{params[:ingredient5]}',
    glass_type_url = '#{params[:glass_type_url]}',
    description = '#{params[:description]}',
    garnish = '#{params[:garnish]}',
    steps = '#{params[:steps]}'
  WHERE id = #{ params[:id] };
  "

  db_query update_sql

  redirect "/cocktails/#{params[:id]}"
end

#delete

get '/cocktails/:id/delete' do
  db_query "DELETE FROM cocktails WHERE id = #{params[:id] }"

  redirect '/cocktails' #back to index
end
