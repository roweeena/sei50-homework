require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# A route which displays a blank form where the user can enter a search term; which submits to...
# A route which uses the submitted search term to search themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li>) - at least the title, maybe the year and overview/plot text too
# Also try to show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image from the incomplete thumbnail filename given to you in the search result data; you're not the first person to attempt this)

# https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755


get '/' do
    "hello from movie db"
end #root


get '/search' do
    erb :search
end #search


get '/search/results' do
    
    @results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:title]}"

    "<pre>#{@results}</pre>"

    erb :results
    
end #search results

