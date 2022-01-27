Rails.application.routes.draw do
  
  # CREATE
  get '/animes/new' => 'animes#new', as: 'new_anime'

  post '/animes' => 'animes#create'


  # READ

  get '/animes' => 'animes#index'

  get '/animes/:id' => 'animes#show', as: 'title'

  # UPDATE
  get '/animes/:id/edit' => 'animes#edit', as: 'edit_anime'

  post '/animes/:id' => 'animes#update'


  # DELETE
  get '/animes/:id/delete' => 'animes#destroy', as: 'destroy_anime'


end

