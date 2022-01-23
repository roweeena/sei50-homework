require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'
require 'active_record'

# do the initialisation for Active Records
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)
ActiveRecord::Base.logger = Logger.new STDOUT # Print out the sql queries with each execution of the route. 

def get_travel_time(start_street, start_suburb, destination_street, destination_suburb, travel_type)
    p "executing get_travel time for: #{start_street} to #{destination_street}"
    
    require "uri" # TODO: check if you can comment this out. 
    destination = "#{destination_street} #{destination_suburb} NSW Australia".gsub(/\s/,'%20')
    origin = "#{start_street} #{start_suburb} NSW Australia".gsub(/\s/,'%20')

    url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=#{origin}&destinations=#{destination}&mode=#{travel_type}&key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko")
    p "URL is: #{url}"
    api_obj = HTTParty.get(url)
    travel_time = api_obj['rows'][0]['elements'][0]['duration']['value']
    p "the time is #{travel_time} for #{start_street}"
    travel_time
end

# close the sql&active_record connection after every query
after do
    ActiveRecord::Base.connection.close 
end

# generate the usuable class models
class Rental < ActiveRecord::Base
end

class Person < ActiveRecord::Base 
    has_many :destinations
end

class Destination < ActiveRecord::Base
    belongs_to :person
end


###############DESTINATIONS###############
# CREATE



# READ
get '/destination' do
    @destinations = Destination.all
    @Person = Person
    erb :'/destinations/destinations'
end

get '/destination/:id' do
    @destination = Destination.find params[:id]
    
    erb :'/destinations/single'
end

# UDPATE TODO: 

# DELETE TODO:

###############################################################################################################
###############################################################################################################
###############################################################################################################



#################RENTALS#################
# USING GOOGLE MAPS API GENERATE THE total_travel_time value for each property
get '/rental/travel' do
    # for each of the rental entries, go to find the distance between it and each of the destinations 
    Rental.all.each do |rental|
        # require 'pry'
        # binding.pry
        sum = 0
        Destination.all.each do |destination|

            sum += get_travel_time(rental.street_address, rental.suburb, destination.street_address, destination.suburb, 'TRANSIT')
        end
        puts "The sum of the travel time for #{rental.street_address}, is: #{sum}"
        # update the specific rentals total_travel_time

        rental.update(
            total_travel_time: sum
        )
    end
        # travel_time = #{travel_time}
    # ;")

    redirect '/rental'
end

#CREATE 
# form to add new rental db entry
get '/rental/create' do
    erb :'rentals/create'
end

post '/rental' do # TODO: find out the correct route for this
    Rental.create(
        street_address: params[:street_address],
        suburb: params[:suburb],
        cost: params[:cost]
    )
    
    redirect '/rental'
end

#READ 
# page showing all rentals
get '/rental' do
    @rentals = Rental.all
    
    erb :'rentals/rentals'
end

#page showing single rental
get '/rental/:id' do
    @rental = Rental.find params[:id]
    
    erb :'rentals/single'
end

#UPDATE 
# form which populates with the data specific to db row/class instance
get '/rental/:id/update' do
    @rental = Rental.find params[:id]

    erb :'rentals/update'
end

post '/rental/:id' do
    rental = Rental.find params[:id]

    rental.update( 
        street_address: params[:street_address],
        suburb: params[:suburb],
        cost: params[:cost]
    )

    redirect "rental/#{params[:id]}"
end

#DELETE 
get '/rental/:id/delete' do
    Rental.find(params[:id]).destroy
    redirect '/rental'
end