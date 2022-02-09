Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/' => 'pages#home'

  # CREATE
  get '/artworks/new' => 'artworks#new', as: 'new_artwork'
  
  post '/artworks' => 'artworks#create'

  # READ
  
  get '/artworks' => 'artworks#index'
  
  get '/artworks/:id' => 'artworks#show', as: 'artwork'
  
  get '/artworks/tag/:tag' =>'artworks#tag', as: 'tag'


  # UPDATE
  get '/artworks/:id/edit' => 'artworks#edit', as: 'edit_artwork'

  patch '/artworks/:id' => 'artworks#update'
  
  # DELETE
  get '/artworks/:id/delete' => 'artworks#destroy', as: 'destroy_artwork'
end
