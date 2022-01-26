Rails.application.routes.draw do

  # CREATE
  get '/teams/new' => 'teams#new', as: 'new_team'

  post '/teams' => 'teams#create'

  # READ
  get '/teams' => 'teams#index'

  get '/teams/:id' => 'teams#show', as: 'team'

  # UPDATE
  get '/teams/:id/edit' => 'teams#edit', as: 'edit_team'

  patch '/teams/:id' => 'teams#update'

  # DELETE
  get '/teams/:id/delete' => 'teams#destroy', as: 'destroy_team'

end
