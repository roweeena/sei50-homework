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


def get_travel_time(address)
    require "uri"
    destination = '12 Bowler Ave Fairfield, NSW Australia'.gsub(/\s/,'%20BC')
    origin = "#{address} NSW Australia".gsub(/\s/,'%20BC')
    transport_mode = 'TRANSIT'

    url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=#{origin}&destinations=#{destination}&mode=#{transport_mode}&key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko")
    p HTTParty.get(url)['rows'][0]['elements'][0]['duration']['value']
    
end

## USING GOOGLE MAPS API GENERATE THE TABLE VALUE
get '/rental/maps_api' do
    travel_time = get_travel_time('1/4 Beronga Street, North Strathfield')
    # travel_time = get_travel_time('1/4 Beronga Street, North Strathfield')['rows'][0]['elements']['duration']['value']
    p "Travel time = #{travel_time}" 
    db_query("UPDATE rentals SET 
        travel_time = #{travel_time}
    ;")

    redirect '/'
end

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
    erb :show_rental
end


# UPDATE TODO: finish this 
# form
get '/rental/:id/edit' do
    @rental = db_query("SELECT * FROM rentals WHERE id = #{params[:id]}").first
    erb :edit_form
end

# submission
post '/rental/:id' do
    db_query("UPDATE rentals SET
        street_address = '#{params[:street_address]}',
        suburb = '#{params[:suburb]}',
        cost = #{params[:cost]}
    WHERE id = #{params[:id]};
    ")
    redirect '/'
end


# DELETE
get '/rental/:id/delete' do
    db_query("DELETE FROM rentals WHERE id = #{params[:id]}")
    redirect '/'
end


