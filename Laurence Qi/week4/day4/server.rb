require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'


def db_query(sql) 
    puts '============================'
    puts sql
    puts '============================'
    
    # Perform SQL query and save into a hash
    # a. connect to db
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    
    # b. Execute an SQL command and save result
    rentals = db.execute sql
    
    # c. Close the connection
    db.close
    rentals
end




# shows all the details on the rental prop. 


# CREATE
# form
get '/rental/new' do
    erb :new_form
end

# parse the data from form to add to the sql db
post '/rental' do
    sql = "INSERT INTO rentals (street_address, suburb, cost)
    VALUES (
        '#{params['street_address']}', 
        '#{params['suburb']}',
        #{params['cost']}
    );"

    db_query sql
    redirect '/'
end

# READ 
# main page showing all rental listings
get '/' do 
    # you want to do a http request to the db get the existing data and clean through it to show on here.
    @rentals = db_query "SELECT * FROM rentals"

    erb :main
end

# show specific listing based on id
get '/rental/:id' do
    @rental = db_query("SELECT * FROM rentals WHERE id = #{params[:id]}").first
    puts "the rental travel_time value is #{@rental['travel_time'] == nil}"
    erb :show_rental
end

# UPDATE TODO: finish this 
get '/rental/:id/edit' do
    'hello this is the rental page'
end
# DELETE