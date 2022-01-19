require 'sinatra'
require 'sinatra/reloader' #auto restart the server when we save this file

# Define routes that our webservers will respond to
# i.e. like a switch board, or series of if/elsif statements

get '/' do
    
    puts 'Root route requested' # the browser will NOT see puts output

    "
    <h1>Hello from Sinatra #{rand}</h1>
    "
    # the final value in the block is what gets returned to the browser!

end #end of get '/'

get '/lucky-number' do
    # "Here is your lucky number: #{ rand 100 }"

    # Tell Sinatra to go in to 'views' (by default) and find the file called lucky and return the contents
    erb :lucky

end #end of 'lucky-number'

get '/about' do

    "
    <h1>Welcome to the about page</h1>
    "

end #end of '/about'

# get '/hello/jesus' do
#     "<h1>Hello Jesus</h1>"
# end

#Dynamic route - the route has a blank in it that can respodnd to a range of literal routes e.g. /hello/SOMEONE

get '/hello/:student_name' do

    "<h1>Hello to #{ params[:student_name].capitalize }.</h1>"

end

get '/hello/:name/:mood' do

    @name = params[:name].capitalize
    @mood = params[:mood]

    erb :moods
    
end