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

# close the sql&active_record connection after every query
after do
    ActiveRecord::Base.connection.close 
end

# generate the usuable class models
class Rental < ActiveRecord::Base
end

require 'pry'
binding.pry
# main page describing what's going on
get '/rental' do
    @rentals = Rental.all
    
    erb :rentals
end

get '/rental/:id' do
    @rental = Rental.find params(:id)
    
    erb :single_rental
end


#CREATE 

#READ 

#UPDATE 

#DELETE 