Rails.application.routes.draw do

  root to: 'pages#home'

  # CREATE

  # 1. Blank form
  get '/artists/new' => 'artists#new', as: 'new_artist' 

  # 2. Form submit, DB create, redirect
  post '/artists' => 'artists#create'

  # READ

  # a. Index of all artists
  get '/artists' => 'artists#index'

  # b. Show page, details for one artist by ID
  get '/artists/:id' => 'artists#show', as: 'artist'


  # UPDATE

  # 1. Pre-filled form
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  # 2. Form submit, update, redirect
  patch '/artists/:id' => 'artists#update'

  # DESTROY

  # Destroy artist by ID, redirect 
  delete '/artists/:id' => 'artists#destroy'

  # Routes for the Work model
  resources :works
end
