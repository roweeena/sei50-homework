Rails.application.routes.draw do
  root to: 'pages#home'

  resources :authors

  resources :books

end
