require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'colorize'

# Function that accesses the database and returns its value as an array of hashes
def db_query(sql)

    puts "=============================================\n".yellow
    puts sql.green
    puts "\n=============================================\n \n".yellow

    #a. Connect to database
    db = SQLite3::Database.new 'database.db'
    #a1. Get results as an array of hashes
    db.results_as_hash = true
    #b. Execute an SQL command and save result
    result = db.execute sql
    #c. Close the connection
    db.close
    #d. return results
    result
end

# Root route
get '/' do
    erb :home
end


# CREATE
# a. Blank form for new item
get '/paintings/new' do
    erb :new
end


# b. Form submits to here (i.e. this is the <form action = ""> attribute url)
#    where we INSERT the form details into the pets table,
#    and then redirect to another page such as the index/pets
#    We use method = "post" for the form to use POST HTTP verb -
#    and this means our route handler method is 'post' also
#    NOTE: " post '/paintings' " and "post '/paintings' " are unique,
#    distinct routes even though the paths are the same;
post '/paintings' do
    insert_sql = "
        INSERT INTO paintings (name, artist, year, movement, medium, description, image_url)
        VALUES (
            '#{params[:name]}',
            '#{params[:artist]}',
            #{params[:year]},
            '#{params[:movement]}',
            '#{params[:medium]}',
            '#{params[:description]}',
            '#{params[:image_url]}'
        );   
    "
    # This sql argument injects the values submitted by the form into the paintings database
    db_query insert_sql
    
    redirect '/paintings'
end


# READ
# 1. Index of all paintings
get '/paintings' do
    # store paintings table into a variable to pass on into the erb
    @results = db_query('SELECT * FROM paintings;')
    erb :index
end

# 2. Show page - details for one painting, using their ID
get '/paintings/:id' do
    # store one specified row from the paintings table into a variable to pass on into the erb
    @painting = db_query("SELECT * FROM paintings WHERE id = #{ params[:id]};")
    @painting = @painting.first

    erb :show
end


# UPDATE
# 1. Show a form whose fields are pre-populated
#    from the item's row in the DB table
get '/paintings/:id/edit' do
    @painting = db_query("SELECT * FROM paintings WHERE id = #{ params[:id]};")
    @painting = @painting.first
    erb :edit
end
# 2. Update form submits to here, update the DB
#    with the form details, and redirect to the show page

post '/paintings/:id' do
    update_sql = "
        UPDATE paintings SET
            name = '#{params[:name]}',
            artist = '#{params[:artist]}',
            year = #{params[:year]},
            movement = '#{params[:movement]}',
            medium = '#{params[:medium]}',
            description = '#{params[:description]}',
            image_url = '#{params[:image_url]}'
        WHERE id = #{params[:id]};
    "
    db_query update_sql
    redirect "/paintings/#{params[:id]}"
end

# DELETE
#   Just delete a row forehead
get '/paintings/:id/delete' do
    db_query "DELETE FROM paintings WHERE id = #{params[:id]};"

    redirect '/paintings'
end
