Rails.application.routes.draw do

  #API endpoints for AJAX-based frontend
  get '/flights' => 'flights#index'

  get '/flights/:id' => 'flights#show'

  get '/flights/search/:origin/:destination' => 'flights#search'

  post '/reservations/create' => 'reservations#create'

end
