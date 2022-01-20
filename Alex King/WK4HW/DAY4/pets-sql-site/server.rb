
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


def db_query(sql)

    puts "=======================", ""
    puts sql
    puts "", "======================="

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true 
    results = db.execute sql
    db.close
    results # implicit return. need to return
end 

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
   insert_sql ="
    INSERT INTO pets(name, species, description, roundness, alive, age, image_url) 
    VALUES (
        '#{params[:name]}',
        '#{params[:species]}',
        '#{params[:description]}',
        #{params[:roundness]},
        #{params[:alive]},
        #{params[:age]},
        '#{params[:image_url]}'
    );
   "
    db_query insert_sql

    # after processing this form submit and inserting the details into to DB, we don't want this route to show its own template. what if someone wants to reload? It would duplicate the insert. It's safer to redirect to a new page altogether. 

    redirect '/pets'
end #post /pets

# READ

# 1. index of all pets
get '/pets' do
    # Perform SQL query here, and save result into 
    # @var so the template can loop over it 

    @results = db_query "SELECT * FROM pets;"
    erb :index
end # get /pets


# 2. show page - details for one pet, using their ID 
get '/pets/:id' do
    @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
    # Because we get an array of rows (hashes) even when we ask for one
    # row by ID, let's extract the first item from that array right here
    @pet = @pet.first

    erb :show
end # get /pets/:id

# UPDATE

# 1. Show a form whose fields are pre-populated 
# from the item's row in the DB table 
get '/pets/:id/edit' do
    @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
    @pet = @pet.first
    erb :edit
end # get /pets/:id/edit 

# 2. Update form submits to here, update the DB
    # with the form details, and redirect to the show page.
post '/pets/:id' do
    update_sql ="
    UPDATE pets SET
        name = '#{params[:name]}',
        species = '#{params[:species]}',
        description = '#{params[:description]}',
        roundness = #{params[:roundness]},
        alive = #{params[:alive]},
        age = #{params[:age]},
        image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};
    "

    db_query update_sql

    redirect "/pets/#{params[:id]}"

end


get '/pets/:id/delete' do
    
    db_query "DELETE FROM pets WHERE id = #{params[:id]};"

    redirect '/pets' # back to index 

end 



# DELETE