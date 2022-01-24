Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'movies#home'

  # 1. Blank form where user enters movie search text
  get '/movies' => 'pages#search'


  # 2. Form submits to here, do API request using HTTParty.get, loop through results in template
  get '/movies/results' => 'pages#results'
  # BONUS: a show page using a route like '/movies/:id' to perform ANOTHER HTTParty request to the movie details endpoint


end
