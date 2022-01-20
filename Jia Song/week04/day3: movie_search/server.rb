require 'sinatra'
require 'sinatra/reloader'

require 'HTTParty'


get '/' do
  # get popular movies for first page
  @results = HTTParty.get("https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1")

  erb :search_results
end


get '/results' do
  @title = params[:title]
  @results = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@title}")

  erb :search_results
end


get '/movie' do
  @movie_id = params[:id]
  @results = HTTParty.get("https://api.themoviedb.org/3/movie/#{@movie_id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US")

  # "<pre>#{ @results }</pre>"
  erb :movie_info
end