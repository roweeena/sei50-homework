require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(query)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute query
  db.close

  results
end

# 1. [READ] first page. get all todos
get '/' do
  query = "SELECT * FROM todos;"
  @results = db_query query

  erb :home
end

# 2. [CREATE] page with form
get '/create' do
  erb :create
end

# when form is submitted
post '/' do
  query = "INSERT INTO todos(
    todo, dueDate, description, completed
    ) VALUES (
      '#{params[:todo]}',
      #{params[:dueDate]},
      '#{params[:description]}',
      '#{params[:completed]}'
    );
  "

  db_query query

  redirect '/'
end

# [READ] get a todo by id
get '/todo/:id' do
  query = "SELECT * FROM todos WHERE id = #{params[:id]};"
  @result = db_query query
  @result = @result.first

  erb :read
end 


# 3. [UPDATE] 
get '/todo/:id/update' do
  query = "SELECT * FROM todos WHERE id = #{params[:id]};"
  @result = db_query query
  @result = @result.first

  erb :update
end

# submit updated todo
post '/todo/:id' do
  query = "
    UPDATE todos SET
      todo = '#{ params[:todo] }',
      dueDate = #{ params[:dueDate] },
      description = '#{ params[:description] }',
      completed = '#{ params[:completed] }'
    WHERE id = #{params[:id]};
  "

  db_query query

  redirect "/todo/#{params[:id]}"
end


# 4. [DELETE]
get '/todo/:id/delete' do
  query = "DELETE FROM todos WHERE id = #{params[:id]};"
  db_query query

  redirect '/'
end

