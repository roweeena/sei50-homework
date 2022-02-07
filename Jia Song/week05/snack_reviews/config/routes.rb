Rails.application.routes.draw do
  # [CREATE]
  get '/snacks/create' => 'snacks#create_form', as: 'create_snack'
  post '/snacks' => 'snacks#create'

  # [READ]
  get '/snacks' => 'snacks#index'
  get '/snacks/:id' => 'snacks#show', as: 'snack'

  # [UPDATE]
  get '/snacks/:id/update' => 'snacks#update_form', as: 'update_snack'
  patch '/snacks/:id' => 'snacks#update'

  # [DELETE]
  get '/snacks/:id/delete' => 'snacks#destroy', as: 'destroy_snack'
end
