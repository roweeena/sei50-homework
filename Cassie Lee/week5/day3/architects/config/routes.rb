Rails.application.routes.draw do
 
  get 'architecture/new'
  get 'architecture/create'
  get 'architecture/index'
  get 'architecture/show'
  get 'architecture/edit'
  get 'architecture/update'
  get 'architecture/destroy'
  root to: 'pages#home'

  get '/architects/new' => 'architects#new', as: 'new_architect'

  post '/architects' => 'architects#create'


  get '/architects' => 'architects#index'

  get '/architects/:id' => 'architects#show', as: 'architect'
  
  get 'architects/:id/edit' => 'architects#edit', as: 'edit_architect'

  patch '/architects/:id' => 'architects#update'

  delete '/architects/:id' => 'architects#destroy'


resources :works




end
