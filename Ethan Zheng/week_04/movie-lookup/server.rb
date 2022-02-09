require 'sinatra'
require 'sinatra/reloader'


require 'httparty'

get '/' do
    "Hello from Movie Look Up"
end #get /

#1. Search form
get '/search' do
    erb :search_form
end #get /search


#2. Form submits here, do httparty URL query, and send results to ERB template


get '/search/results/:page' do
    @results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:title]}&page=#{params[:page]}"
    erb :results
end #get /search/results
