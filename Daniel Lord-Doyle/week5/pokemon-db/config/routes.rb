Rails.application.routes.draw do

  root to: 'owners#index'

  resources :owners, :pokemons

end