require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Set up ActiveRecord 'conection' to our DB
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3', #what kind of DB is this? 'sqlite3'
    database: 'database.db' # where is the actual data 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

#  Close connection after every request
after do
    ActiveRecord::Base.connection.close    
end

class Car < ActiveRecord::Base
    belongs_to :manufacturer 
end

class Manufacturer < ActiveRecord::Base
    has_many :cars
end



# Root route
get '/' do
    erb :home
end

# CREATE
get '/cars/new' do
    erb :new
end

post '/cars' do
    Car.create(
        model: params[:model],
        body_type: params[:body_type],
        entered_market: params[:entered_market],
        in_production: params[:in_production],
        photo_url: params[:photo_url],
        manufacturer_id: params[:manufacturer_id]
    )
    redirect '/cars'
end


# READ
get '/cars' do
    @cars = Car.all
    erb :index
end

get '/cars/:id' do
    @car = Car.find params[:id]
    erb :show
end


# UPDATE
get '/cars/:id/edit' do
    @car = Car.find params[:id]
    erb :edit
end

post '/cars/:id' do
    car = Car.find params[:id]
    car.update(
        model: params[:model],
        body_type: params[:body_type],
        entered_market: params[:entered_market],
        in_production: params[:in_production],
        photo_url: params[:photo_url],
        manufacturer_id: params[:manufacturer_id]
    )

    redirect "/cars/#{params[:id]}"    
end


# DELETE
get '/cars/:id/delete' do
    Car.destroy params[:id]
    redirect '/cars'
end


####### MANUFACTURERS ########

# CREATE
get '/manufacturers/new'do
    erb :manufacturer_new
end

post '/manufacturers' do
    Manufacturer.create(
        name: params[:name],
        country: params[:country],
        founded: params[:founded],
        active: params[:active],
        logo_url: params[:logo_url]
    )

    redirect '/manufacturers'
end


# READ
get '/manufacturers' do
    @manufacturers = Manufacturer.all
    erb :manufacturer_index
end

get '/manufacturers/:id' do
    @manufacturer = Manufacturer.find params[:id]
    erb :manufacturer_show
end
# UPDATE
get '/manufacturers/:id/edit' do
    @manufacturer = Manufacturer.find params[:id]
    erb :manufacturer_edit
end

post '/manufacturers/:id' do
    manufacturer = Manufacturer.find params[:id]
    manufacturer.update(
        name: params[:name],
        country: params[:country],
        founded: params[:founded],
        active: params[:active],
        logo_url: params[:logo_url]
    )

    redirect "/manufacturers/#{params[:id]}"
end

# DELETE
get '/manufacturers/:id/delete' do
    Manufacturer.destroy params[:id]
    redirect '/manufacturers'
end