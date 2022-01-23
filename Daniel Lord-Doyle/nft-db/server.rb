require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'colorize'
require 'active_record'

# set up active record connection to our DB
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDOUT

after do
    ActiveRecord::Base.connection.close
end

class Property < ActiveRecord::Base
    belongs_to :nft
end

class Nft < ActiveRecord::Base
    has_many :properties
end

#root route

get '/' do

    @nfts = Nft.all

    erb :home
end

# Create

get '/nft/new' do

    erb :list
end #end of /nft/new 

post '/nfts/:id' do

Nft.create(
    project_name: params[:project_name],
    last_purchase_price: params[:last_purchase_price],
    owned: params[:owned],
    for_sale: params[:for_sale],
    image_route: params[:image_route],
    previous_owner: params[:previous_owner]
)

    redirect '/inventory'

end

# Read

get '/inventory' do

    @nfts = Nft.where(owned: true)

    erb :inventory
end

get '/marketplace' do

    @nfts = Nft.where(owned: false)

    erb :marketplace
end

# Individual nft pages

get '/nfts/:id' do

    @nft = Nft.all.find params[:id]

    erb :show_nft

end

# Show prev transactions for those in Inventory

get '/transactions' do

    @nfts = Nft.where(owned: true)

    erb :transactions

end

# Update

get '/nfts/:id/buy' do
    
    @nft = Nft.all.find params[:id]

    erb :buy_nft
end

get '/nfts/:id/sell' do
    
    @nft = Nft.all.find params[:id]

    erb :sell_nft
end

post '/nfts/:id/update' do

    nft = Nft.find params[:id]

    nft.update(
        owned: params[:owned]
    )
    
    redirect "/nfts/#{params[:id]}"
    
end

post '/nfts/:id/sell' do

    nft = Nft.find params[:id]

    nft.update(
        owned: params[:owned]
    )
    
    redirect "/nfts/#{params[:id]}"
    
end

# Delete

get '/nfts/:id/delete' do
    
    Nft.destroy params[:id]

    redirect '/inventory'

end