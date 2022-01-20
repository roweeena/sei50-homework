require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  
  erb :home
end

get '/search' do
  
  erb :search_form

end 

get '/search/results' do
  
  @results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:movie]}"

  erb :results

end

get '/movie/:id' do
  @movie = HTTParty.get "https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=24d863d54c86392e6e1df55b9a328755"
  erb :movie
end