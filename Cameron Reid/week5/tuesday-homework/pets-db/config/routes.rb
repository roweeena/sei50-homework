Rails.application.routes.draw do
  
  #create ###############################################################
  get '/pets/new' => 'pets#new', as:'new_pet'
  post '/pets' => 'pets#create'
  #read ###############################################################
  get '/pets' => 'pets#index'

  get '/pets/:id' => 'pets#show', as: 'pet'
  #update ###############################################################
  get '/pets/:id/edit' => 'pets#edit', as: 'edit_pet'

  patch 'pets/:id' => 'pets#update'
  #delete ###############################################################

  get '/pets/:id/delete' => 'pets#destroy', as: 'destroy_pet'
end
