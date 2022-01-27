require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'colorize'

require 'active_record'

# Set up the ActiveRecord 'connection' to our DB
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3', 
    database: 'database.db' 
)

# Show us all the SQL you're saving us from writing!! :heart
ActiveRecord::Base.logger = Logger.new STDOUT

# close connection after every request
after do
    ActiveRecord::Base.connection.close
end


class Watch < ActiveRecord::Base
    belongs_to :manufacturer   # MUST BE SINGULAR FORM OF OTHER TABLE NAME 

end #class Watch

class Manufacturer < ActiveRecord::Base    
    has_many :watches      # MUST BE PLURAL FORM OF OTHER TABLE NAME 
end #class manufacturer

# require 'pry'
# binding.pry

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

    return result
end


# Root route
get '/' do
    erb :home
end

# CREATE

# a. Blank form for new item
get '/watches/new' do
    erb :new
end


# b. Form submits to here (i.e. this is the <form action = ""> attribute url)

post '/watches' do

    Watch.create(
        name:  params[:name],
        production:  params[:production],
        diameter:  params[:diameter],
        movement:  params[:movement],
        year_made:  params[:year_made],
        current_price:  params[:current_price],
        image_url:  params[:image_url]
    ) 

    redirect '/watches'
end 

# READ

# 1. index
get '/watches' do

    # @results = db_query('SELECT * FROM watches;')

    @results = Watch.all
    erb :index
end #get /watches

#2. Show page - details for one pet, using their ID
get '/watches/:id' do

    
    @watch = Watch.find params[:id]

    erb :show
end #get /watches/:id


# UPDATE

# 1. Show a form whose fields are pre-populated
#    from the item's row in the DB table

get '/watches/:id/edit' do

    @watch = Watch.find params[:id]

    erb :edit
end #get /watches/:id/edit

# 2. Update form submits to here, update the DB
#    with the form details, and redirect to the show page

post '/watches/:id' do

    # 1. First do a query to load the row into an object
    pet = Watch.find params[:id]
    # 2. Then call .update on the retrieved object,
    # providing all the key value pairs to update
    # from params (which comes from the form submission)
    pet.update(
        name:  params[:name],
        production:  params[:production],
        diameter:  params[:diameter],
        movement:  params[:movement],
        year_made:  params[:year_made],
        current_price:  params[:current_price],
        image_url:  params[:image_url]
    )

    redirect "/watches/#{params[:id]}" #Go to show page for the edited item

end #post /watches/:id

# DELETE
get '/watches/:id/delete' do

    # db_query "DELETE FROM watches WHERE id = #{params[:id]};"

    # clarence = Watch.find 3
    # clarence.destroy
    # ......one line version
    Watch.destroy params[:id]

    redirect '/watches' #back to index
end #get /watches/:id/delete



################################################################################
################################################################################
################################################################################
################################################################################
################################################################################
################################################################################


# CRUD Routes for Manufacturers

# CREATE

# 1. Blank form
get '/manufacturers/new' do
    erb :manufacturer_new
end # get /manufacturers/new

# 2. Form submits here, create manufacturer, redirect
post '/manufacturers' do
    Manufacturer.create(
        name: params[:name],
        location: params[:location],
        date_established: params[:date_established]
    )

    redirect '/manufacturers'
end

# READ

# 1. Index of all Manufacturers
get '/manufacturers' do
    @manufacturers = Manufacturer.all
    erb :manufacturer_index
end #/manufacturers

# 2. Show page for one Manufacturer's details by ID
get '/manufacturers/:id' do
    
    @manufacturer = Manufacturer.find params[:id]
    erb :manufacturer_show
end

# UPDATE

# 1. Show pre-populated edit form
get '/manufacturers/:id/edit' do

    @manufacturer = Manufacturer.find params[:id]

    erb :manufacturer_edit
end 

# 2. Form submits here, perform update, redirect
post '/manufacturers/:id' do
    manufacturer = Manufacturer.find params[:id]

    manufacturer.update(
        name:  params[:name],
        location: params[:location],
        date_established: params[:date_established]
    )

    redirect "/manufacturers/#{params[:id]}"

end

# DELETE
get '/manufacturers/:id/delete' do



    Manufacturer.destroy params[:id]

    

    redirect '/manufacturers' #back to index
end #get /watches/:id/delete
