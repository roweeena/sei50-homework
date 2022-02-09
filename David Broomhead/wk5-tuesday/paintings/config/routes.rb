Rails.application.routes.draw do

 # CREATE #############################
  # 1. create new painting
  get '/paintings/new' => 'paintings#new', as: 'new_painting'

  # 2. create new painting form route
  post '/paintings' => 'paintings#create'

  # READ #############################
  # 1. browse index of paintings
  get '/paintings' => 'paintings#index'

  # 2. view details of one painting
  get '/paintings/:id' => 'paintings#show', as: 'painting'

  # UPDATE #############################

  # 1. edit painting data page
  get '/paintings/:id/edit' => 'paintings#edit', as: 'edit_painting'

  # 2. update record form route
  patch '/paintings/:id' => 'paintings#update'

  # DELETE #############################

  # painting record
  get '/paintings/:id/delete' => 'paintings#delete', as: 'destroy_painting'


end
