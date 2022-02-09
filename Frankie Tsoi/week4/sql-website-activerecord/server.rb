require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)
 
ActiveRecord::Base.logger = Logger.new STDOUT
after do
  ActiveRecord::Base.connection.close
end

class Mangabook < ActiveRecord::Base
  belongs_to :author
end 

class Author < ActiveRecord::Base
  has_many :mangabooks 
end 

# START CRUD of Mangabooks
#CREATE
#homepage nav tab
get '/' do
  erb :home
end

#Add new nav tab
get '/mangabooks/new' do
  erb :new
end
#Add new tab link to database
post '/mangabooks' do

  Mangabook.create(
    name: params[:name],
    volumes: params[:volumes],
    end: params[:end],
    image_url: params[:image_url]
  )
  redirect "/mangabooks"

end

#READ
#Index page
get '/mangabooks' do
  @results = Mangabook.all
  erb :index
end
#Index ID page
get '/mangabooks/:id' do
  @mangabook = Mangabook.find params[:id]
  erb :show
end

#UPDATE 
#Edit page
get '/mangabooks/:id/edit' do
  @mangabook = Mangabook.find params[:id]
  erb :edit
end
#Link to database when updated new info
post '/mangabooks/:id' do

  mangabook = Mangabook.find params[:id]
  mangabook.update(
    name: params[:name],
    volumes: params[:volumes],
    end: params[:end],
    image_url: params[:image_url]
  )
  redirect "/mangabooks/#{params[:id]}"

end

#DELETE
get '/mangabooks/:id/delete' do

  Mangabook.destroy params[:id]

  redirect '/mangabooks' 

end

# -----------------------------------------------------#
# -----------------------------------------------------#
# -----------------------------------------------------#
# -----------------------------------------------------#
# -----------------------------------------------------#

# START CRUD of Author

#CREATE
#Blank page
get '/authors/new' do
  erb :author_new
end
post '/authors' do
  Author.create(
    name: params[:name],
    birthday: params[:birthday],
    age: params[:age],
    nationality: params[:nationality],
    image_url: params[:image_url]
  )
  redirect '/authors'
end

#READ
#Index of authors
get '/authors' do
  @author = Author.all
  erb :author_index
end
#Index ID page
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :author_show
end

#UPDATE
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :author_edit
end

post '/authors/:id' do
  author = Author.find params[:id]
  author.update(
    name: params[:name],
    birthday: params[:birthday],
    age: params[:age],
    nationality: params[:nationality],
    image_url: params[:image_url]
  )
  redirect "/authors/#{params[:id]}"
end


#DELETE
get '/authors/:id/delete' do 
  Author.destroy params[:id]
  redirect '/authors'
end