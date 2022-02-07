
require 'httparty'

res = HTTParty.get 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien'


puts res