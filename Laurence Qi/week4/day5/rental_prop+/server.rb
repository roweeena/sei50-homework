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

# class Person < ActiveRecord::Base 
# end

# require 'pry'
# binding.pry

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