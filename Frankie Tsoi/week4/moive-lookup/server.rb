require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  "Hello Movie Lookup"
end

#1.Search Form
get '/search' do
  erb :search_form 
end # end search



#2. Form submits here, do httparty URL query, and send results to ERB template

get '/search/results' do

  @results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:title]}"


erb :results

end# end search and results




