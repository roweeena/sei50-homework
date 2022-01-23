require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(sql)

    puts "=======================================\n \n"
    puts sql
    puts "=======================================\n \n"


    db = SQLite3::Database.new 'database.db'  
    db.results_as_hash = true
    results = db.execute sql
    db.close

    results  #implicit return
end

get '/' do
    "hello from home page"
    erb :home
end

get '/index' do
    @results = db_query "SELECT * FROM shortcuts;"
    
    erb :index
  end

  get '/shortcuts/:id' do
    @shortcut = db_query "SELECT * FROM shortcuts WHERE id = #{ params[:id] };"
    @shortcut = @shortcut.first
    erb :show
  end