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

# Read

get '/inventory' do

    @nfts = Nft.all

    erb :inventory
end

# Individual nft pages

get '/nfts/:id' do

    @nft = Nft.all.find params[:id]

    erb :show_nft

end

# Update

# Delete