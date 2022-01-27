Rails.application.routes.draw do
  
  #CREATE
  # 1. BLANK FORM
  get '/places/new' => 'places#new', as: 'new_place'

  # 2. SUBMIT FORM
  post '/places/' => 'places#create'


  #READ
  # HOMEPAGE

   root to: 'places#home'

  # haunted PLACES INDEX

  get '/places' => 'places#index'

  get '/places/:id' => 'places#show', as: 'place'


  #UPDATE
  # 1.PRELOADED FORM
  get '/places/:id/edit' => 'places#edit', as: 'edit_place'

  # 2.SUBMIT EDIT FORM
  patch 'places/:id' => 'places#update'

  #DELETE
  get '/places/:id/delete' => 'places#destroy', as: 'destroy_place'

  
end

