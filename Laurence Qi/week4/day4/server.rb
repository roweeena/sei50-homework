require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'

get '/' do
    # you want to do a http request to the db get the existing data and clean through it to show on here.
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true

    @rentals = db.execute "SELECT * FROM rentals"
    db.close
    erb :main
end

get '/rental/:id' do
    "rental num: #{params['id']}"
    
end