
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'colorize'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

class Shop < ActiveRecord::Base

end

# require 'pry'
# binding.pry


#root

get '/' do
  erb :home
end

# CREATE
get '/shops/new' do
  "NEW SHOP FORM"
end

post '/shops' do
  #sql method goes here

  redirect '/shops'
end

# READ
get '/shops' do
  @results = Shop.all
  erb :shop_index
end

get '/shops/:id' do
  @shop = Shop.find params[:id]
  erb :shop_show
end

# UPDATE
get '/shops/:id/edit' do
  @shop = Shop.find params[:id]
  
  erb :shop_edit
end

post '/shops/:id' do
  shop = Shop.find params[:id]

  shop.update(
    name: params[:name],
    address: params[:address],
    description: params[:description],
    opening_time: params[:opening_time],
    closing_time: params[:closing_time],
    open_weekdays: params[:open_weekday],
    open_weekends: params[:open_weekends],
    rating: params[:rating],
    image_url: params[:image_url]
  )

  redirect "/shops/#{params[:id]}"
end
# DELETE

get '/shops/:id/delete' do
  
end