require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :main
end


get '/search/results' do
    @result = HTTParty.get("https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&")
    erb  :results
end

get '/search/movie' do
    @result = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:movie_name]}")
    erb  :results
end

get '/search/get_movie' do
    @result = HTTParty.get("https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US")
    erb  :movie_info
end