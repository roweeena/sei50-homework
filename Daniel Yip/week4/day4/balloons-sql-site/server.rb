require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "colorize"

get '/' do

  erb :home

end

# CREATE

get '/balloons/new' do
  
  erb :new

end

post '/balloons' do

  db_query "INSERT INTO balloons ( type, style, size, fun_factor, exciting, image_url)
  VALUES (
    '#{params['type']}',
    '#{params['style']}',
    '#{params['size']}',
    #{params['fun_factor']},
    #{params['exciting']},
    '#{params['image_url']}'
  );"
  
  redirect '/balloons'
end



# READ

# helper function
def db_query sql
  db = SQLite3::Database.new 'database.db'

  puts "===================================="
  puts sql.red
  puts "===================================="

  db.results_as_hash = true # a. Get results as array of hashes
  result = db.execute sql # b. Execute a command and save result
  db.close # c. Close the connection (close the file)
  result

end

get '/balloons' do
  
  @results = db_query "SELECT * FROM balloons;"
  
  erb :index
  
end

get '/balloons/:id' do
  
  @balloon = db_query "SELECT * FROM balloons WHERE id = #{params[:id]};"
  
  @balloon = @balloon[0]
  
  erb :show
  
end

# UPDATE

get '/balloons/:id/edit' do

  @balloon = db_query "SELECT * FROM balloons WHERE id = #{params[:id]};"
  @balloon = @balloon[0]

  erb :edit

  
end

post '/balloons/:id' do
  
  update_sql = "
  UPDATE balloons SET
  type = '#{params[:type]}',
  style = '#{params[:style]}',
  size = '#{params[:size]}',
  fun_factor = #{params[:fun_factor]},
  exciting = #{params[:exciting]},
  image_url = '#{params[:image_url]}'
  WHERE id = '#{params[:id]}';
  "

  db_query update_sql
    
  redirect "/balloons/#{params[:id]}"
end

# DELETE

get '/balloons/:id/delete' do
  db_query "DELETE FROM balloons WHERE id = #{params['id']};"

  redirect '/balloons'
end

