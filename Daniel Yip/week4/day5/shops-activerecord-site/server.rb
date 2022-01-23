
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

class Shop < ActiveRecord::Base
has_many :items
end

class Item < ActiveRecord::Base
belongs_to :shop
end 

# require 'pry'
# binding.pry

# ROOT ROUTE
get '/' do
  erb :home
end

##########################################################################################################
##########################################################################################################
##########################################################################################################
##########################################################################################################

# CREATE
get '/shops/new' do
  erb :shop_new
end

post '/shops' do
  Shop.create(
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
  Shop.destroy params[:id]
  redirect '/shops'
end

##########################################################################################################
##########################################################################################################
##########################################################################################################
##########################################################################################################

# CREATE
get '/items/new' do
  erb :item_new
end

post '/items' do
  Item.create(
    name: params[:name],
    description: params[:description],
    cost_price: params[:cost_price],
    retail_price: params[:retail_price],
    priced_by: params[:priced_by],
    taxable: params[:taxable],
    image_url:params[:image_url],
    shop_id: params[:shop_id]
  )
  redirect '/items'
end

# READ
get '/items' do
  @results = Item.all
  erb :item_index
end

get '/items/:id' do
  @item = Item.find params[:id]
  erb :item_show
end

# UPDATE
get '/items/:id/edit' do
  @item = Item.find params[:id]
  erb :item_edit
end

post '/items/:id' do
  item = Item.find params[:id]
  item.update(
    name: params[:name],
    description: params[:description],
    cost_price: params[:cost_price],
    retail_price: params[:retail_price],
    priced_by: params[:priced_by],
    taxable: params[:taxable],
    image_url:params[:image_url],
    shop_id: params[:shop_id]
  )
  redirect "/items/#{params[:id]}"
end

# DELETE
get '/items:id/delete' do
  Item.destroy params[:id]  
  redirect '/items'
end

