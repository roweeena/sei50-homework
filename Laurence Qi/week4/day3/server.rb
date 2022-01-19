# A route which displays a blank form where the user can enter a search term; which submits to...
# A route which uses the submitted search term to search themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li>) - at least the title, maybe the year and overview/plot text too
# Also try to show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image from the incomplete thumbnail filename given to you in the search result data; you're not the first person to attempt this)
# Optionally: if you're feeling very brave, make each search result movie title/image into clickable a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the API URL to use to look up a movie's details when you already have its ID from a previous search), and show these details in a new template (I did say if you were feeling brave) - now you have a way to click through from search results to see the detailed movie info for one result :tada:
# Optionally, but just for Ethan: Implement pagination for search results :robot-devil:

require 'sinatra'; require 'sinatra/reloader'; require 'httparty'

get '/search' do
    erb :search
end

# With the params provided by form submission above, generate a api request. 
get '/search/results' do
    "params returned from search submission are: #{params}"
    # title https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=
end