require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do
    'Hello from Google Books Lookup'
end # end of /

#1. Search form
#2. Form submits here, do HTTParty URL query and send results to ERB template

get '/search' do
    erb :search_form
end # end of search/

get '/search/results' do

    params.to_s

    @results = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"

    # "<pre> #{ result } </pre>"

    erb :results

end # end of search/results