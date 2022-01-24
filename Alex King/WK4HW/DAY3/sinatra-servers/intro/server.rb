
# tell Ruby that we want to use on of the 
# pre-installed gem libraries in the 
# current program

require 'sinatra'
require 'sinatra/reloader' # auto reload when we change this file

# Define some routes that our webserver will respond to
# i.e. like a switchboard, or series of if-elsif/case statements
# We use the Sinatra DSL (Domain-Specific Language) to do this 


get '/' do
    puts "Root route requested" # Browser will NOT see 'puts' output

    "<h1>HELLO FROM SINATRA! #{rand}</h1>" # The final value in the block is what gets returned to the browser!

end # get '/'


get '/about' do
    "Welcome to the About Page"
end # get '/about'


get '/luckynumber' do

    # "<!doctype html><html><head><title>Lucky number</title></head><body><h1>Lucky Number!</h1><p>Here is your lucky number: <strong>#{ rand 100 }</p></body></html>"
    
    #Tell Sinatra to go into the 'views' folder (this is assumed) and fine the
    # file called 'lucky.erb' ... and return the contents of that file! 
    max = 100 
    @number = rand max
    erb :lucky 

end # get '/luckynumber'



get '/hello/jesus' do 
    "<h1>Hello Jesus!</h1>"
end 

get '/hello/angela' do 
    "<h1>Hello angela!</h1>"
end 


# Dynamic route - the route has a 'blank' in it that can respond to
# a range of literal routs: i.e. '/hello/SOMEONE'
get '/hello/:student_name' do
    "<h1>Hello #{ params[:student_name].capitalize }!</h1>"
end 


get '/hello/:name/feels/:mood' do
    # "Hello, #{params[:name].capitalize} ... today you are #{params[:mood]}"
    @name = params[:name].capitalize
    @mood = params[:mood]
    erb :mood # not same as route placeholder '/:mood/'
end 

