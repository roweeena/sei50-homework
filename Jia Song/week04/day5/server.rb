# server
require 'sinatra'
require 'sinatra/reloader'
# database
require 'sqlite3'
require 'active_record'

# [[ DATABASE ]]
# connect to my db
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', 
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

# close connection
after do
  ActiveRecord::Base.connection.close
end

# join the tables. 
# one todo has one project, each project has many todos.
class Todo < ActiveRecord::Base
  belongs_to :project
end

class Project < ActiveRecord::Base
  has_many :todos 
end


# [[ CRUD for Todo ]]
# 1. display all todos
get '/' do
  @projects = Project.all
  @todos = Todo.all

  erb :home
end

# 2. display todos by project
get '/project/:id/todos' do
  @projects = Project.all
  @todos = Todo.where("project_id = #{params[:id]}")

  erb :home
end

# 3. create a todo
get '/todo/create' do
  # to create <select> tag
  @projects = Project.all

  erb :add_todo
end

post '/todo' do
  Todo.create(
    todo: params[:todo],
    dueDate: params[:dueDate],
    completed: params[:completed] ? true : false,
    project_id: params[:project_id]
  )

  redirect '/'
end

# 4. update todo
get '/todo/:id/update' do
  @projects = Project.all
  @todo = Todo.find params[:id]

  erb :add_todo
end

post '/todo/:id' do
  todo = Todo.find params[:id]

  todo.update(
    todo: params[:todo],
    dueDate: params[:dueDate],
    completed: params[:completed] ? true : false,
    project_id: params[:project_id]
  )

  redirect '/'
end

# 5. delete todo
get '/todo/:id/delete' do
  Todo.destroy params[:id]

  redirect '/'
end


# [[ CRUD for Project ]]
# 1. create a project
get '/project/create' do
  erb :add_project
end

post '/project' do
  Project.create(
    name: params[:name]
  )

  redirect '/'
end

# 2. update project
get '/project/:id/update' do
  @project = Project.find params[:id]

  erb :add_project
end

post '/project/:id' do
  project = Project.find params[:id]

  project.update(
    name: params[:name]
  )

  redirect '/'
end

# 3. delete project
get '/project/:id/delete' do
  Project.destroy params[:id]

  redirect '/'
end