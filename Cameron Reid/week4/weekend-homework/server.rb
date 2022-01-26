require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'active_record'

#active record set up
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
ActiveRecord::Base.connection.close 
end


class Restaurant < ActiveRecord::Base 
  belongs_to :chef
end

class Chef < ActiveRecord::Base
  has_many :restaurants 
  
end # class chef

get '/' do
  erb :home
    
end



# ROUTES FOR CHEFS

# Create
get '/chefs/new' do
  erb :chef_new

end

post '/chefs' do
  Chef.create(
    image_url: params[:image_url],
    name: params[:name],
    years_cooking: params[:years_cooking],
    cuisine: params[:cuisine]

  )

  redirect '/chefs'

end


# Read

get '/chefs' do

  @result = Chef.all
  
  erb :chef_index
end

get '/chefs/:id' do
  @chef = Chef.find params[:id]

  erb :chef_show
end #end /chefs/:id

# Update
get '/chefs/:id/edit' do 
  @chef = Chef.find params[:id]
  erb :chef_edit
end


post '/chef/:id' do
  chef = Chef.find params[:id]

  chef.update(
    image_url: params[:image_url],
    name: params[:name],
    years_cooking: params[:years_cooking],
    cuisine: params[:cuisine]
  )
  redirect "/chefs/#{params[:id]}"
end
# Delete

get '/chefs/:id/delete' do
  Chef.destroy params[:id]
  redirect '/chefs'
end
#+++++++++++++++++++++++++++++++++++++++++++++++++++++
#+++++++++++++++++++++++++++++++++++++++++++++++++++++
#+++++++++++++++++++++++++++++++++++++++++++++++++++++
#+++++++++++++++++++++++++++++++++++++++++++++++++++++

# ROUTES FOR RESTAURANTS

# Create

get '/restaurants/new' do
  erb :restaurant_new

end

post '/restaurants' do
  Restaurant.create(
    name: params[:name],
    image_url: params[:image_url],
    location: params[:location],
    style: params[:style],
    stars: params[:stars]
  )

  redirect '/restaurants'

end

# Read

get '/restaurants' do

  @result = Restaurant.all
  
  erb :restaurant_index
end

get '/restaurants/:id' do
  @rest = Restaurant.find params[:id]

  erb :restaurant_show
end #end /restaurants/:id

# Update
 
get '/owners/:id/edit' do
  @rest = Restaurant.find params[:id]
  erb :restaurant_edit
end

post '/restaurants/:id' do
  rest = Restaurant.find params[:id]

  rest.update(
    name: params[:name],
    image_url: params[:image_url],
    location: params[:location],
    style: params[:style],
    stars: params[:stars]
  )

  redirect "/owners/#{params[:id]}"

end
# Delete
  
get '/restaurants/:id/delete' do
  Restaurant.destroy params[:id]
  redirect '/restaurants'
end