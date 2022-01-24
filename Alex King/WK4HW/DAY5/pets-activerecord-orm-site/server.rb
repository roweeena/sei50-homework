
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'active_record'
# Set up the ActiveRecord 'connection' to our DB
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',  # What kind of DB is this?
  database: 'database.db'  # Where is the actual data (file)?
)
# Show us all the SQL you're saving us from writing!!
ActiveRecord::Base.logger = Logger.new STDOUT
# close connection after every request
after do
  ActiveRecord::Base.connection.close
end
# Tell AR how to talk to our 'pets' table
# To do this, we make a class with the CAPITALISED SINGULAR form of our
# table name... and that class has to inherit from AR
# This is referred to as a 'model', i.e. a way of representing our DB table
class Pet < ActiveRecord::Base
    belongs_to :owner  # MUST BE SINGULAR form of table name (ie AR will look for 'owner_id')
end  # class Pet


class Owner < ActiveRecord::Base
    has_many :pets # MUST BE PLURAL (i.e. AR will go into the 'pets' table and use 'owner_id' to find the pets owned)
end # class Owner 

# require 'pry'
# binding.pry

# Routes for Pets, i.e.  /pets



# Root route
get '/' do
    # 'hello from root'
    erb :home
end

# CREATE 

# a. Blank form for a new item 
get '/pets/new' do # this is before id so new is not interpreted as :id
    erb :new 
end

# b. Form submits to here (i.e. this is the <form action=""> URL),
    # where we INSERT the form details into the pets table,
    # and then redirect to another page such as the index/pets
    # We use method="post" for the form to use POST HTTP verb =
    # and this means our route handler method is 'post' also 
    # NOTE: "post '/pets'" and "get '/pets'" are unique, distinct
    # routes even though the paths are the same; 
    # it's the combination of verb +  
post '/pets' do
#    insert_sql ="
#     INSERT INTO pets(name, species, description, roundness, alive, age, image_url) 
#     VALUES (
#         '#{params[:name]}',
#         '#{params[:species]}',
#         '#{params[:description]}',
#         #{params[:roundness]},
#         #{params[:alive]},
#         #{params[:age]},
#         '#{params[:image_url]}'
#     );
#    "
#     db_query insert_sql
    Pet.create(
        name: params[:name],
        species: params[:species],
        description: params[:description],
        roundness: params[:roundness],
        alive: params[:alive],
        age: params[:age],
        image_url: params[:image_url]
    )

    # after processing this form submit and inserting the details into to DB, we don't want this route to show its own template. what if someone wants to reload? It would duplicate the insert. It's safer to redirect to a new page altogether. 

    redirect '/pets'
end #post /pets

# READ

# 1. index of all pets
get '/pets' do
    # Perform SQL query here, and save result into 
    # @var so the template can loop over it 
    # @results = db_query "SELECT * FROM pets;"
    @results = Pet.all 
    erb :index
end # get /pets


# 2. show page - details for one pet, using their ID 
get '/pets/:id' do
   @pet = Pet.find params[:id]

    erb :show
end # get /pets/:id

# UPDATE

# 1. Show a form whose fields are pre-populated 
# from the item's row in the DB table 
get '/pets/:id/edit' do
    # @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
    # @pet = @pet.first
    @pet = Pet.find params[:id]
    erb :edit
end # get /pets/:id/edit 

# 2. Update form submits to here, update the DB
    # with the form details, and redirect to the show page.
post '/pets/:id' do
    # update_sql ="
    # UPDATE pets SET
    #     name = '#{params[:name]}',
    #     species = '#{params[:species]}',
    #     description = '#{params[:description]}',
    #     roundness = #{params[:roundness]},
    #     alive = #{params[:alive]},
    #     age = #{params[:age]},
    #     image_url = '#{params[:image_url]}'
    # WHERE id = #{params[:id]};
    # "

    # db_query update_sql

    # 1. First do a query to load the row into an object
    pet = Pet.find params[:id]
    # 2. Then call .update on retrieved object
    # providing all the key-value pairs to update
    # from params (which comes from the form submission)
    Pet.create(
        name: params[:name],
        species: params[:species],
        description: params[:description],
        roundness: params[:roundness],
        alive: params[:alive],
        age: params[:age],
        image_url: params[:image_url]
    )

    redirect "/pets/#{params[:id]}"

end

# DELETE

get '/pets/:id/delete' do
    
    # db_query "DELETE FROM pets WHERE id = #{params[:id]};"
    Pet.destroy params[:id]

    redirect '/pets' # back to index 

end 

# ##################################################
# ##################################################
# ##################################################
# ##################################################
# ##################################################
# ##################################################
# ##################################################
# ##################################################
# ##################################################

#CRUD ROUTES FOR OWNERS


# CREATE

# 1. Blank form
get '/owners/new' do
    erb :owner_new
end

# 2. Form submits here, create owner, redirect
post '/owners' do
    # params.to_s

    Owner.create(
        name: params[:name],
        email: params[:email]
    );

    redirect '/owners'

end

# READ


# 1. Index of all Owners
get '/owners' do
    @owners = Owner.all
    erb :owner_index
end # get /owners

# 2. Show page for one Owner's details by ID
get '/owners/:id' do
    # "show page #{params[:id]}"
    @owner = Owner.find params[:id]
    erb :owner_show
end

# UPDATE

# 1. Show pre-populated edit form 
get '/owners/:id/edit' do
    @owner = Owner.find params[:id]
    erb :owner_edit
end # get /owners/:id/edit

# 2. Form submits here, perform update, reditect
post '/owners/:id' do

    owner = Owner.find params[:id]
    owner.update(
        name: params[:name],
        email: params[:email]
    )

    redirect "/owners/#{params[:id]}"

end # post /owners/:id


# DELETE

# delete the owner and redirect 
get '/owners/:id/delete' do
    
    Owner.destroy params[:id]
    redirect '/owners'
end



# DELETE