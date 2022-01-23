require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    # type of database
    adapter: 'sqlite3',
    database: 'database.db' 
)
# use of Ruby’s standard logger to write log information
    ActiveRecord::Base.logger = Logger.new STDOUT

# close connection after each request
after do
    ActiveRecord::Base.connection.close
end


class Team < ActiveRecord::Base
    belongs_to :owner
end #class Team

class Owner < ActiveRecord::Base
    has_many :teams
end #class Owner

# require 'pry'
# binding.pry

get '/' do
    erb :home
  end


#####################################################
# CRUD routes for teams
#####################################################

#CREATE

get '/teams/team_new' do
  erb :"teams/team_new"
end

post '/teams' do
    Team.create(
        franchise: params[:franchise],
        price: params[:price],
        year: params[:year]
    )
    redirect '/teams/team_index'
end


# READ

get '/teams/team_index' do
    @teams = Team.all
    erb :"/teams/team_index"
end

get '/teams/team_show/:id' do
    @owners = Owner.all
    @team = Team.find params[:id]
    erb :"/teams/team_show"
end

# UPDATE

post '/teams/link/:id' do
    team = Team.find params[:id]
    team.update(
        owner_id: params[:owner_id]
    )
    redirect "/teams/team_show/#{ params[:id] }"
end


# DELETE
get '/teams/team_show/:id/delete' do
    Team.destroy params[:id]
    redirect '/teams/team_index'
end




#####################################################
# CRUD routes for owners
#####################################################


# CREATE


get '/owners/owner_new' do
    erb :"owners/owner_new"
  end
  
post '/owners' do
    Owner.create(
        name: params[:name],
        age: params[:age],
        wealth_m: params[:wealth_m]
    )
    redirect '/owners/owner_index'
end
  
  


#READ
get '/owners/owner_index' do
    @owners = Owner.all
    erb :"/owners/owner_index"
end

get '/owners/owner_show/:id' do
    @owner = Owner.find params[:id]
    erb :"/owners/owner_show"
end




#UPDATE


#DELETE
