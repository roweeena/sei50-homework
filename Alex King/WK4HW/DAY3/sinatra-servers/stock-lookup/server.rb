
require 'sinatra'
require 'sinatra/reloader'

require 'HTTParty'

get '/' do
    
    "Hello???"
end

# 1. Search form
get '/search' do
    erb :search_form
end # get /search


# 2. Form submits here, do httparty URL query, and send result to ERB template

get '/search/results' do
    
    @results = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"

    # "<pre>#{results}</pre>"
    # params.to_s

    erb :results 
end # get /search/results