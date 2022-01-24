require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
#  use today's codealong in the repo above as your guide but I recommend not copy-pasting the code, rather type it out afresh - this will force you to run it through your fingers and brain, and make you think about what's happeni

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
    database: 'database.db' # actual data file ?
)

ActiveRecord::Base.logger = Logger.new STDOUT


after do
    ActiveRecord::Base.connection.close
  end



  class Bear < ActiveRecord::Base
    belongs_to :owner 
  end

  class Owner < ActiveRecord::Base
    has_many :bears
    
    
  end


  get '/' do
    erb :home
  end


  get '/bears/new' do
    erb :new
  end 


  post '/bears' do 

    Bear.create(
    name: params[:name],
    description: params[:description],
    age: params[:age],
    image_url: params[:image_url]
  )

  redirect '/bears'
  end

  get '/bears' do
  @results = Bear.all
  erb :index
end
# require 'pry'; binding.pry

get '/bears/:id' do

  @bear = Bear.find params[:id]
  erb :show

end

get '/bears/:id/edit' do
  @bear = Bear.find params[:id]
  erb :edit
end 

post '/bears/:id' do
  bear = Bear.find params[:id]


  bear.update(
      name: params[:name],
      description: params[:description],
      age: params[:age],
      image_url: params[:image_url]
    )
    redirect "/bears/#{ params[:id] }"
end

get '/bears:id/delete' do

  Bear.destroy params[:id]
  redirect '/bears'  # back to index
end 

#""""""""""""""""""""""""""""""""""""""

get '/owners/new' do
  erb :owner_new
end 
post '/owners' do
  # params.to_s
  Owner.create(
    name: params[:name],
    email: params[:email]
  )
  redirect '/owners'
end  # post /owners
# READ
# 1. Index of all Owners
get '/owners' do
  @owners = Owner.all
  erb :owner_index
end  
get '/owners/:id' do
  @owner = Owner.find params[:id]
  erb :owner_show
end  # get /owners/:id
# UDPATE
get '/owners/:id/edit' do
end
# 1. Show pre-populated edit form
post '/owners/:id' do
  owner = Owner.find 
end